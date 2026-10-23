import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { getDb } from './firebase';

const SYNC_KEY_STORAGE = 'egel_pro_sync_key';
const DEVICE_ID_STORAGE = 'egel_pro_device_id';
const LAST_SYNC_STORAGE = 'egel_pro_last_sync_ts';

// Generar un código aleatorio legible (ej: EGEL-7K9M)
export function generateSyncCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `EGEL-${code}`;
}

// Obtener o inicializar ID único para este dispositivo
export function getDeviceId() {
  try {
    let devId = localStorage.getItem(DEVICE_ID_STORAGE);
    if (!devId) {
      devId = 'dev_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
      localStorage.setItem(DEVICE_ID_STORAGE, devId);
    }
    return devId;
  } catch {
    return 'dev_unknown';
  }
}

// Obtener la clave de sincronización actual o leerla de la URL (?sync=...)
export function getActiveSyncKey() {
  try {
    // 1. Verificar si viene en la URL
    if (typeof window !== 'undefined' && window.location.search) {
      const params = new URLSearchParams(window.location.search);
      const urlSync = params.get('sync');
      if (urlSync && urlSync.trim()) {
        const cleaned = urlSync.trim().toUpperCase();
        localStorage.setItem(SYNC_KEY_STORAGE, cleaned);
        // Limpiar parámetro de la URL sin recargar
        params.delete('sync');
        const newSearch = params.toString() ? `?${params.toString()}` : '';
        window.history.replaceState({}, '', `${window.location.pathname}${newSearch}`);
        return cleaned;
      }
    }

    // 2. Leer de localStorage
    let stored = localStorage.getItem(SYNC_KEY_STORAGE);
    if (!stored) {
      stored = generateSyncCode();
      localStorage.setItem(SYNC_KEY_STORAGE, stored);
    }
    return stored;
  } catch {
    return 'EGEL-MAIN';
  }
}

// Guardar nueva clave de sincronización (al vincular manualmente)
export function setActiveSyncKey(newKey) {
  try {
    const formatted = newKey.trim().toUpperCase();
    localStorage.setItem(SYNC_KEY_STORAGE, formatted);
    return formatted;
  } catch {
    return newKey;
  }
}

// Obtener URL de sincronización para generar el QR
export function getSyncShareUrl(syncKey) {
  if (typeof window === 'undefined') return '';
  const origin = window.location.origin;
  const path = window.location.pathname;
  return `${origin}${path}?sync=${encodeURIComponent(syncKey)}`;
}

let saveTimeout = null;

// Guardar progreso en la nube con debounce para no saturar peticiones
export function pushToCloudDebounced(syncKey, progress, activeSession, delayMs = 600) {
  const db = getDb();
  if (!db || !syncKey) return;

  if (saveTimeout) {
    clearTimeout(saveTimeout);
  }

  saveTimeout = setTimeout(async () => {
    try {
      const deviceId = getDeviceId();
      const now = Date.now();
      const docRef = doc(db, 'sync_vaults', syncKey);
      
      await setDoc(
        docRef,
        {
          syncKey,
          progress: progress || null,
          activeSession: activeSession || null,
          lastUpdated: now,
          lastDeviceId: deviceId,
        },
        { merge: true }
      );

      localStorage.setItem(LAST_SYNC_STORAGE, String(now));
    } catch (err) {
      console.warn('Error al sincronizar con la nube:', err);
    }
  }, delayMs);
}

// Descargar una vez los datos desde la nube (por ejemplo al vincular código)
export async function fetchVaultFromCloud(syncKey) {
  const db = getDb();
  if (!db || !syncKey) return null;

  try {
    const docRef = doc(db, 'sync_vaults', syncKey);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data();
    }
    return null;
  } catch (err) {
    console.error('Error al descargar bóveda de la nube:', err);
    return null;
  }
}

// Suscribirse a cambios en tiempo real
export function subscribeToCloudVault(syncKey, onUpdate) {
  const db = getDb();
  if (!db || !syncKey) return () => {};

  const docRef = doc(db, 'sync_vaults', syncKey);
  const deviceId = getDeviceId();

  const unsubscribe = onSnapshot(
    docRef,
    (snap) => {
      if (!snap.exists()) return;
      const data = snap.data();

      // Ignorar actualizaciones generadas por este mismo dispositivo
      if (data.lastDeviceId === deviceId) return;

      const lastLocalSync = Number(localStorage.getItem(LAST_SYNC_STORAGE) || 0);
      if (data.lastUpdated && data.lastUpdated > lastLocalSync) {
        localStorage.setItem(LAST_SYNC_STORAGE, String(data.lastUpdated));
        if (onUpdate) {
          onUpdate(data);
        }
      }
    },
    (error) => {
      console.warn('Error en listener de sincronización:', error);
    }
  );

  return unsubscribe;
}

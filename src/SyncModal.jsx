import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  X,
  Smartphone,
  Copy,
  Check,
  RefreshCw,
  QrCode,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { isFirebaseConfigured } from './firebaseConfig';
import { getSyncShareUrl, fetchVaultFromCloud, setActiveSyncKey } from './syncService';

export default function SyncModal({
  isOpen,
  onClose,
  syncKey,
  onApplyRemoteData,
  onSyncKeyChange,
  isSyncing,
}) {
  const [copied, setCopied] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const [loadingLink, setLoadingLink] = useState(false);
  const [linkError, setLinkError] = useState('');
  const [activeTab, setActiveTab] = useState('qr'); // 'qr' | 'link'

  if (!isOpen) return null;

  const shareUrl = getSyncShareUrl(syncKey);
  const configured = isFirebaseConfigured();

  const handleCopy = (text) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLinkCode = async (e) => {
    e.preventDefault();
    const clean = inputCode.trim().toUpperCase();
    if (!clean) return;

    if (!configured) {
      setLinkError('Debes configurar tus credenciales de Firebase en src/firebaseConfig.js primero.');
      return;
    }

    setLoadingLink(true);
    setLinkError('');

    try {
      const data = await fetchVaultFromCloud(clean);
      if (data) {
        setActiveSyncKey(clean);
        onSyncKeyChange(clean);
        if (data.progress || data.activeSession) {
          onApplyRemoteData(data);
        }
        setInputCode('');
        onClose();
      } else {
        // La clave puede ser nueva o estar vacía, pero aún así se puede vincular
        setActiveSyncKey(clean);
        onSyncKeyChange(clean);
        setInputCode('');
        onClose();
      }
    } catch {
      setLinkError('Error al conectar con la nube. Verifica el código e intenta de nuevo.');
    } finally {
      setLoadingLink(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/30 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF7F2] border border-[#E5DEC9] rounded-3xl shadow-2xl max-w-md w-full overflow-hidden text-stone-900 transition-all">
        {/* Cabecera */}
        <div className="px-6 py-5 border-b border-[#E5DEC9] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-[#D95D39] border border-amber-300 flex items-center justify-center">
              <RefreshCw className={`w-5 h-5 ${isSyncing ? 'animate-spin' : ''}`} />
            </div>
            <div>
              <h3 className="font-extrabold text-lg leading-tight text-stone-900">Sincronizar Dispositivos</h3>
              <p className="text-xs text-stone-500">Estudia en tu computadora y continúa en tu teléfono</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-[#F3EFE6] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Alerta si Firebase aún no está configurado */}
        {!configured && (
          <div className="mx-6 mt-5 p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-700" />
            <div>
              <p className="font-bold">Firebase pendiente de credenciales</p>
              <p className="mt-0.5 text-amber-800/90 leading-relaxed">
                Pega tus credenciales en el archivo <code className="font-mono bg-amber-100 px-1 py-0.5 rounded">src/firebaseConfig.js</code> para activar la sincronización entre tu PC y teléfono.
              </p>
            </div>
          </div>
        )}

        {/* Pestañas de Modo */}
        <div className="px-6 pt-5 pb-2">
          <div className="flex bg-[#EFEAE0] p-1 rounded-2xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('qr')}
              className={`flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5 ${
                activeTab === 'qr'
                  ? 'bg-white text-[#D95D39] font-extrabold shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>Escanear QR o Compartir</span>
            </button>
            <button
              onClick={() => setActiveTab('link')}
              className={`flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-1.5 ${
                activeTab === 'link'
                  ? 'bg-white text-[#D95D39] font-extrabold shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Escribir Código</span>
            </button>
          </div>
        </div>

        {/* Contenido según pestaña */}
        <div className="px-6 pb-6 pt-3 space-y-4">
          {activeTab === 'qr' ? (
            <div className="flex flex-col items-center text-center">
              {/* Código QR */}
              <div className="p-3 bg-white rounded-2xl border border-[#E5DEC9] shadow-inner my-1">
                {shareUrl ? (
                  <QRCodeSVG value={shareUrl} size={150} level="M" />
                ) : (
                  <div className="w-[150px] h-[150px] flex items-center justify-center text-xs text-stone-400">
                    Cargando QR...
                  </div>
                )}
              </div>

              <p className="text-xs text-stone-600 mt-2 max-w-xs">
                Escanea este código con la cámara de tu teléfono para abrir tu sesión al instante.
              </p>

              {/* Código PIN corto */}
              <div className="mt-3 w-full bg-white border border-[#E5DEC9] rounded-2xl p-3 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Tu Código PIN</span>
                  <p className="font-mono font-black text-xl text-[#D95D39] tracking-wider">
                    {syncKey}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(syncKey)}
                    className="p-2 text-xs font-medium rounded-xl border border-[#E5DEC9] hover:bg-[#F3EFE6] flex items-center gap-1 text-stone-700 transition"
                    title="Copiar código PIN"
                  >
                    {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => handleCopy(shareUrl)}
                    className="px-3.5 py-2 text-xs font-bold rounded-xl bg-[#D95D39] hover:bg-[#C04D2B] text-white shadow-sm flex items-center gap-1.5 transition"
                  >
                    {copied ? '¡Copiado!' : 'Copiar enlace'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                Si ya tienes un código en tu computadora u otro teléfono, escríbelo aquí para unir ambos dispositivos:
              </p>

              <form onSubmit={handleLinkCode} className="space-y-3">
                <div>
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                    placeholder="Ej. EGEL-7K9M"
                    maxLength={15}
                    className="w-full font-mono text-center text-lg uppercase tracking-widest px-4 py-3 bg-white border border-[#E5DEC9] rounded-2xl focus:outline-none focus:border-[#D95D39] focus:ring-2 focus:ring-[#D95D39]/20 transition text-stone-900"
                  />
                </div>

                {linkError && (
                  <p className="text-xs text-rose-600 font-semibold text-center">{linkError}</p>
                )}

                <button
                  type="submit"
                  disabled={loadingLink || !inputCode.trim()}
                  className="w-full py-3 px-4 bg-[#D95D39] hover:bg-[#C04D2B] disabled:opacity-50 text-white font-extrabold text-sm rounded-2xl shadow-sm transition flex items-center justify-center gap-2"
                >
                  {loadingLink ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Conectando...</span>
                    </>
                  ) : (
                    <>
                      <span>Vincular y Cargar Progreso</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* Explicación de seguridad y anonimato */}
          <div className="pt-2 border-t border-[#E5DEC9] flex items-center gap-2 text-[11px] text-stone-500">
            <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
            <span>Progreso cifrado por clave privada anónima. No se recopilan datos personales.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

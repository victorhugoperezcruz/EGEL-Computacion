import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig, isFirebaseConfigured } from './firebaseConfig';

let dbInstance = null;

export function getDb() {
  if (!isFirebaseConfigured()) {
    return null;
  }
  if (!dbInstance) {
    try {
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
      dbInstance = getFirestore(app);
    } catch (err) {
      console.warn('Error inicializando Firebase Firestore:', err);
      return null;
    }
  }
  return dbInstance;
}

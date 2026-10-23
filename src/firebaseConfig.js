// Configuración de Firebase Firestore para sincronización multi-dispositivo sin cuentas

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDcmyp5kueblRuRwR6MsK_e5m-Qhp1ULGk",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "egel-pro-f8c0b.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "egel-pro-f8c0b",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "egel-pro-f8c0b.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "173285316659",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:173285316659:web:4b1567dcb0b4cfbbb72b46",
};

// Verifica si las credenciales ya fueron configuradas
export const isFirebaseConfigured = () => {
  return (
    Boolean(firebaseConfig.apiKey) &&
    !firebaseConfig.apiKey.includes("PEGAR_AQUI") &&
    Boolean(firebaseConfig.projectId) &&
    !firebaseConfig.projectId.includes("PEGAR_AQUI")
  );
};

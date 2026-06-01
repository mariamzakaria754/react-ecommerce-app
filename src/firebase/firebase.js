import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBc4F2YF5Hn_89GEyMir8Ncjq35Ltv4gtA",

  authDomain: "react-ecommerce-app-f0eee.firebaseapp.com",

  projectId: "react-ecommerce-app-f0eee",

  storageBucket: "react-ecommerce-app-f0eee.firebasestorage.app",

  messagingSenderId: "865876331667",

  appId: "1:865876331667:web:18e6077ee7dfc3c9335166",

  measurementId: "G-8ZQLWKM62W",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBNDjYQ1W15xK-THOZg6c00lTXy49LYUro",
  authDomain: "izicommunity-441501.firebaseapp.com",
  databaseURL: "https://izicommunity-441501-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "izicommunity-441501",
  storageBucket: "izicommunity-441501.appspot.com",
  messagingSenderId: "655546514452",
  appId: "1:655546514452:web:d2eed8dd3dd9db056dfb01",
  measurementId: "G-V2F02V77YW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app, 'trainizi');
const storage = getStorage(app);

export { db, storage };
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';

/**
 * Config fireb
 */

const firebaseConfig = {
  apiKey: "AIzaSyB0PpCQ5DeY-1DyLKISZdkCMAPz4bT0pj0",
  authDomain: "appnoithat-87f22.firebaseapp.com",
  databaseURL: "https://appnoithat-87f22-default-rtdb.firebaseio.com",
  projectId: "appnoithat-87f22",
  storageBucket: "appnoithat-87f22.appspot.com",
  messagingSenderId: "339776509921",
  appId: "1:339776509921:web:70c09620cadaea620ba4a0",
  measurementId: "G-X9KGCZB639"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);

// export const analytics = getAnalytics(app);

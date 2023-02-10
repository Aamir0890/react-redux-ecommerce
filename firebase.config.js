
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxigzWenue8BpM99_RznhSycvwO-lse5U",
  authDomain: "e-commerce1-2aab8.firebaseapp.com",
  projectId: "e-commerce1-2aab8",
  storageBucket: "e-commerce1-2aab8.appspot.com",
  messagingSenderId: "592353776782",
  appId: "1:592353776782:web:c53bbee465839645cfe5df"
};
 const app=initializeApp(firebaseConfig)
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)
export default app

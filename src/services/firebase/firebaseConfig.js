import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "tienda-electrodomesticos-4efad.firebaseapp.com",
  projectId: "tienda-electrodomesticos-4efad",
  storageBucket: "tienda-electrodomesticos-4efad.appspot.com",
  messagingSenderId: "662353618751",
  appId: "1:662353618751:web:275abc4341a5ab3a63958a"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

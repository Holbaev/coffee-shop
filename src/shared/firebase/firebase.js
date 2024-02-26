import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage , ref as refStorage   } from "firebase/storage";
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyDCfmAXXloyz9ULommkSTV_koUusflh8hY",
  authDomain: "coffee-shop-ebff0.firebaseapp.com",
  databaseURL: "https://coffee-shop-ebff0-default-rtdb.firebaseio.com",
  projectId: "coffee-shop-ebff0",
  storageBucket: "coffee-shop-ebff0.appspot.com",
  messagingSenderId: "37142999955",
  appId: "1:37142999955:web:759741e8d5938d1bc8ae66",
  measurementId: "G-BTVWRCF9RW"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const storage = getStorage(firebase);
const auth = getAuth()
export {db , firebase , storage , auth};

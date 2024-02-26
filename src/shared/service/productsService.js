import {db , firebase} from '../firebase/firebase';
import {doc , getDoc , updateDoc , arrayUnion , setDoc} from "firebase/firestore";

const productsRef = doc(db , 'products' , 'LmOPNffvTfe94RmAXUMK');


export const getProducts = async () =>{
    const products = await getDoc(productsRef);
    return products.exists ? products.data() : null;
}

export const postProducts = async (data) =>{
     return await setDoc(productsRef , {products: data});
}

export const updateProducts = async (data) =>{
         return await updateDoc(productsRef , {products: arrayUnion(data)});
}
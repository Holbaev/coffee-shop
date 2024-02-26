import {db , firebase} from '../firebase/firebase';
import {doc , getDoc , updateDoc , arrayUnion , arrayRemove , setDoc} from "firebase/firestore";

const cartRef = doc(db , 'cart' , 'T0lLrCQnaznaWDfUN9Oj');

export const getCart = async () =>{
    const cart = await getDoc(cartRef);
    return cart.exists ? cart.data() : null;
}

export const postCart = async (data) =>{
    return await updateDoc(cartRef , {cart: arrayUnion(data)});
}

export const postCart2 = async (data) =>{
    return await setDoc(cartRef , {cart: arrayUnion(data)});
}

export const deleteCart = async (data) =>{
    return await updateDoc(cartRef , {cart: arrayRemove(data)});
}

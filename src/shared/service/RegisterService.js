import { createUserWithEmailAndPassword, updateProfile , signInWithEmailAndPassword , signOut} from "firebase/auth";
import { auth, db } from "../firebase/firebase";

export const signup = async (email, password, name) => {
  await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(auth.currentUser, {
    displayName: name,
  });
  return auth.currentUser.providerData;
};

export const login = async (email, password) => {
   await signInWithEmailAndPassword(auth, email, password);
   return auth.currentUser.providerData;
};
  
export const logout = async () => {
    await signOut(auth);
};
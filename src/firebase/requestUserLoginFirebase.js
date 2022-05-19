import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase-config";

const auth = getAuth(app);

export const getUserLogued = async (user, password) => {
  const userLogued = await signInWithEmailAndPassword(auth, user, password);
  console.log(userLogued);
  return userLogued;
};

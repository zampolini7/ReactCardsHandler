import { app } from "./firebase-config";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

export const logOutFromFb = async () => {
  await signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Se hizo el logOutwa8");
      const isLogued = false;
      return isLogued;
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};

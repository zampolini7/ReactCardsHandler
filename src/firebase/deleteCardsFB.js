import { getFirestore } from "firebase/firestore";
import { app } from "./firebase-config";
import { doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(app);

export const deleteCardsFromFB = async (action) => {
  const usId = action.userIdLogued;
  const cardId = action.id;
  console.log(usId);
  await deleteDoc(doc(db, `/users/${usId}/cards/${cardId}`))
    .then(() => {
      const isDelete = true;
      console.log(isDelete);
      return isDelete;
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};

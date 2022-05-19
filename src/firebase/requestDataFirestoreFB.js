import { app } from "./firebase-config";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export const getCardsFromColection = async (userUid) => {
  const db = getFirestore(app);

  const querySnapshot = await getDocs(
    collection(db, `users/${userUid}/cards/`)
  );
  let cards = [];
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data().cards}`);

    const obj2 = doc.data();

    obj2.id = doc.id;

    cards.push(obj2);
  });

  console.log(cards);

  return cards;
};

/*

 firebase から ユーザー情報を取得
 
*/

/* eslint-disable no-console */
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useCallback, useState } from "react";
import { auth, firestore } from "src/lib/firebase";

import { useStripeid } from "./useStripeid";

export const useUserProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { stripeId, setStripeId } = useStripeid();

  const user = auth.currentUser;

  //firestoreからユーザー情報取得
  const getData = useCallback(async () => {
    if (user) {
      const docRef = doc(firestore, "user", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFirstName(docSnap.data().firstName);
        setLastName(docSnap.data().lastName);
        setStripeId(docSnap.data().stripeId);
        return console.log("Get Success");
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return;
      }
    }
  }, [setStripeId, user]);

  //firestoreのユーザー情報変更
  const setData = useCallback(async () => {
    if (user) {
      const colRef = collection(firestore, "user");
      await setDoc(doc(colRef, user.uid), {
        firstName,
        lastName,
        stripeId,
      });
    }
  }, [firstName, lastName, stripeId, user]);

  return { getData, setData, firstName, setFirstName, lastName, setLastName };
};

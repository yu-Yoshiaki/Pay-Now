/* eslint-disable no-console */
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useCallback, useState } from "react";
import { useUser } from "src/hooks/useUser";
import { firestore } from "src/lib/firebase";

type UserProfile = {
  firstName?: string;
  lastName?: string;
};

export const useUserProfile = () => {
  const { user } = useUser();
  const [profile, setProfile] = useState<UserProfile>({});

  const setData = useCallback(
    async ({ firstName, lastName }) => {
      if (user) {
        const colRef = collection(firestore, "user");

        await setDoc<UserProfile>(doc(colRef, user.uid), {
          firstName,
          lastName,
        });
      }
    },
    [user]
  );

  // setD();
  const getData = useCallback(async () => {
    if (user) {
      const docRef = doc(firestore, "user", user.uid);
      const docSnap = await getDoc<UserProfile>(docRef);

      if (docSnap.exists()) {
        return setProfile({ firstName: docSnap.data().firstName, lastName: docSnap.data().lastName });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return;
      }
    }
  }, [user]);

  // const setI = useCallback(() => {
  //   return setProfile({ firstName: "yoh" });
  // }, []);

  return { profile, getData, setData };
};

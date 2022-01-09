/* eslint-disable no-console */
import { doc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { auth, firestore } from "src/lib/firebase";

export const useCompletePurchase = () => {
  const user = auth.currentUser;
  const [stripeId, setStripeId] = useState<string>();
  const [paymentMethod, setPaymentMethod] = useState<string>();

  const [message, setMessage] = useState("");

  const getStripeId = useCallback(async () => {
    if (user) {
      const docRef = doc(firestore, "user", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("getid success!!");

        setStripeId(docSnap.data().stripeId);
        return;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return;
      }
    }
  }, [setStripeId, user]);

  const getPaymentMethod = useCallback(async () => {
    const res = await fetch(`/api/getPaymentMethod/${stripeId}`);
    const data = await res.json();
    console.log("getpm success!!");

    setPaymentMethod(data.paymentMethod);
  }, [stripeId]);

  const createPaymentIntents = useCallback(async () => {
    const res = await fetch(`/api/createPaymentIntents/${stripeId}`, {
      method: "POST",
      body: paymentMethod,
    });
    const data = await res.json();
    setMessage(`intents: ${data}`);
    console.log("createpi success!!");
  }, [paymentMethod, stripeId]);

  useEffect(() => {
    if (user) {
      getStripeId();
    }
    if (stripeId) {
      getPaymentMethod();
    }
    if (paymentMethod) {
      createPaymentIntents();
    }
  }, [createPaymentIntents, getPaymentMethod, getStripeId, paymentMethod, stripeId, user]);

  return { message };
};

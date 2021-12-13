/* eslint-disable import/no-anonymous-default-export */
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { addDoc, collection } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "src/lib/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      // const body = JSON.parse(req.body);
      const body = req.body;
      const email = body.email;
      const password = body.password;

      const response = await createUserWithEmailAndPassword(auth, email, password);
      // const user = response.user;
      // await addDoc(collection(firestore, "user"), {
      //   id: user.uid,
      //   stripeId,
      // });

      // const ref = {
      //   email,
      //   password,
      //   stripeId,
      // };

      res.status(200).json(response.user);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
    res.status(200).json({ test: "test" });
  }
};

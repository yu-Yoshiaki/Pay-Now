/* eslint-disable no-console */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "src/lib/stripe";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { userid } = req.query;
  if (req.method === "POST") {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 500,
        currency: "jpy",
        customer: userid as string,
        payment_method: req.body,
        off_session: true,
        confirm: true,
      });

      res.status(200).json(paymentIntent);
    } catch (err) {
      // Error code will be authentication_required if authentication is needed
      console.log("Error code is: ", err.code);
      const paymentIntentRetrieved = await stripe.paymentIntents.retrieve(err.raw.payment_intent.id);
      console.log("PI retrieved: ", paymentIntentRetrieved.id);
    }
  }

  res.status(200).json({ test: "test" });
};

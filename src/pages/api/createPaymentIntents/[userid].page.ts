/*
  Stripeで、新規支払い処理の作成＆実行
*/

/* eslint-disable no-console */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "src/lib/stripe";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { userid } = req.query;
  if (req.method === "POST") {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1300,
      currency: "jpy",
      customer: userid as string,
      payment_method: req.body,
      off_session: true,
      confirm: true,
    });

    res.status(200).json({ message: "Complete Payment.", paymentIntent });
  }

  res.status(200).json("Not existed GET Method");
};

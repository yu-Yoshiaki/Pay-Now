/*
  Stripeにから支払い手段の取得
*/

/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "src/lib/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const paymentMethods = await stripe.paymentMethods.list({
    customer: id as string,
    type: "card",
  });

  res.status(200).json({ paymentMethod: paymentMethods.data[0].id });
};

/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "src/lib/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const setupIntent = await stripe.setupIntents.create({
        customer: req.body,
        payment_method_types: ["card"],
      });
      res.status(200).json({ clientSecret: setupIntent.client_secret });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
    res.status(200).json({ test: "test" });
  }
};

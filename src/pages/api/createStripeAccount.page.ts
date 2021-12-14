/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "src/lib/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const customer = await stripe.customers.create({
        email: req.body,
      });
      res.status(200).json({ customer: customer.id });
    } catch {
      res.status(500).json("error");
    }
    res.status(200).json({ test: "test" });
  }
};

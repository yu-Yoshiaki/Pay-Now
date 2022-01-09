/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "src/lib/stripe";

export default async (req: NextApiRequest, res: NextApiResponse<{ customerId: string } | string>) => {
  if (req.method === "POST") {
    try {
      const customer = await stripe.customers.create({ email: req.body });
      res.status(200).json({ customerId: customer.id });
    } catch {
      return;
    }
    res.status(200).json("error");
  }
};

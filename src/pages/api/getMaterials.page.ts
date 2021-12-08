// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "src/lib/stripe";
import type Stripe from "stripe";

type Res = {
  products: Stripe.Product[];
};

const materialsId = ["prod_KXSBHxeY7TwFs4", "prod_Kfzuvy8rA5cGHk"];

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req: NextApiRequest, res: NextApiResponse<Res>) => {
  const products = await stripe.products.list({
    ids: materialsId,
  });

  res.status(200).json({ products: products.data });
};

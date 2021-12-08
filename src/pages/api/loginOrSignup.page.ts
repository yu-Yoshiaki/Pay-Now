import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/lib/microcms";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const list = await client.get({
        endpoint: "user",
        queries: { filters: `email[equals]${req.body}` },
      });

      res.status(200).json({ email: list.contents[0].email });
    } catch (err) {
      res.status(500).json({ error: "Not match this User." });
    }
  }
};

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidate: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  for (const url of req.body) {
    await res.revalidate(url);
  }

  res.status(200).json({ revalidate: true });
}

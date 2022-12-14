import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";
import NextCors from "nextjs-cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      method,
      query: { user },
    } = req;

    await NextCors(req, res, {
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200,
    });

    let { db } = await connectToDatabase();

    if (method === "GET") {
      const dreamList = await db
        .collection("dreamItems")
        .find({ name: user })
        .toArray();
      res.status(200).json({ data: dreamList });
    }
  } catch (e) {
    res.status(404).send(e);
  }
}

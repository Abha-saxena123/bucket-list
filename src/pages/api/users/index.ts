import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { connectToDatabase } from "../../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  let { db } = await connectToDatabase();

  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (method === "GET") {
    const userList = await db.collection("users").find().toArray();
    res.status(200).json({ data: userList });
  }

  if (method === "POST") {
    const newUser = req.body;
    db.collection("users").insertOne(newUser, function (err, res) {
      if (err) throw err;
    });
    res.status(200).send({ message: "User added successfully" });
  }

  // if (method === "PUT") {
  //   const userList = await db.collection("users").find().toArray();
  //   res.status(200).json({ data: userList });
  // }
}

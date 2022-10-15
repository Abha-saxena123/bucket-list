import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;
  let { db } = await connectToDatabase();

  if (method === "GET") {
    const dreamDetails = await db
      .collection("dreamItems")
      .find({ _id: new ObjectId(id as string) })
      .toArray();
    res.status(200).json({ data: dreamDetails[0] });
  } else if (method === "POST") {
    const newItem = req.body;
    db.collection("dreamItems").insertOne(newItem, function (err, res) {
      if (err) {
        console.log("ERROR", err);
        throw err;
      }
      console.log("1 Item inserted");
    });
    res.status(200).send({ message: "Dream added successfully" });
  } else if (method === "PUT") {
    const { _id, isDone, experience } = req.body;
    const dreamList = await db
      .collection("dreamItems")
      .updateOne(
        { _id: new ObjectId(_id as string) },
        { $set: { isDone: isDone, experience: experience } }
      );
    res.status(200).json({ data: "Dream updated successfully" });
  }
}

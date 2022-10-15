import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";
import { Users } from "../../modules/dream-list/types/dream-list.types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  let { db } = await connectToDatabase();

  if (method === "POST") {
    const { userName, password } = req.body;
    console.log("@@@@@@", userName, password);
    const database = await db
      .collection("users")
      .find({ userName: userName })
      .toArray();

    let LoginResponse;

    if (database.length > 0 && password === database[0].password) {
      LoginResponse = {
        user: database[0],
        access_token: "Bearer adjsgjfdskgjsfdngjfsnjfnjnfdj",
        accessTokenExpiry: 30,
      };
    }

    res.status(200).send(LoginResponse);
  }
}

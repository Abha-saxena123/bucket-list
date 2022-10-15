import { ObjectId } from "mongodb";

export interface Users {
  firstName: string;
  lastName: string;
  password: string;
  userName: string;
  email?: string;
  _id: string;
}

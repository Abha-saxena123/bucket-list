import { ObjectId } from "mongodb";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface Users {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  _id: string;
}

export interface BucketListProps {
  _id: ObjectId;
  description: string;
  experience: string;
  firstName: string;
  remarks: string;
  title: string;
  isDone: boolean;
}

export interface DreamUpdateProps {
  isDone: boolean;
  _id: ObjectId;
  experience: string;
}

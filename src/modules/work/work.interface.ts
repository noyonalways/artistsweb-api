import { Document } from "mongoose";

export interface IWork extends Document {
  title: string;
  image: string;
  isLatest: boolean;
  tags: string[];
}

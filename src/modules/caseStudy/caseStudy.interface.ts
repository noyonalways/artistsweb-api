import { Document, Model, Types } from "mongoose";

export interface ICaseStudy extends Document {
  service: Types.ObjectId;
  name: string;
  slug: string;
  image: string;
  brief: string;
  isLatest: boolean;
}
export interface ICaseStudyModel extends Model<ICaseStudy> {
  generateSlug(title: string): Promise<string>;
}

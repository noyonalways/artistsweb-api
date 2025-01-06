import { model, Schema } from "mongoose";
import { IWork } from "./work.interface";

const workSchema = new Schema<IWork>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
      trim: true,
    },
    isLatest: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: [String],
      required: [true, "Tags are required"],
    },
  },
  {
    timestamps: true,
  },
);

const Work = model<IWork>("Work", workSchema);
export default Work;

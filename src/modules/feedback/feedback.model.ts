import { model, Schema } from "mongoose";
import { TFeedback } from "./feedback.interface";

const feedbackSchema = new Schema<TFeedback>(
  {
    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    avatar: {
      type: String,
      required: [true, "Avatar is required"],
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
  },
  { timestamps: true },
);

const Feedback = model<TFeedback>("Feedback", feedbackSchema);
export default Feedback;

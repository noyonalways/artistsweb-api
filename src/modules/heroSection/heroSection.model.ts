import { Schema, model } from "mongoose";
import { THeroSection, THighlight } from "./heroSection.interface";

const HighlightSchema = new Schema<THighlight>({
  title: {
    type: String,
    required: [true, "The title of the highlight is required."],
  },
  value: {
    type: String,
    required: [true, "The value of the highlight is required."],
  },
});

const HeroSectionSchema = new Schema<THeroSection>(
  {
    heading: {
      type: String,
      required: [true, "The heading for the hero section is required."],
    },
    subheading: {
      type: String,
      required: [true, "The subheading for the hero section is required."],
    },
    highlights: {
      type: [HighlightSchema],
      required: [
        true,
        "At least one highlight is required in the hero section.",
      ],
    },
  },
  { timestamps: true },
);

const HeroSection = model<THeroSection>("Hero-Section", HeroSectionSchema);

export default HeroSection;

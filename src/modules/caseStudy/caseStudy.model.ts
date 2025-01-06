import { model, Schema } from "mongoose";
import slugify from "slugify";
import { ICaseStudy, ICaseStudyModel } from "./caseStudy.interface";

const caseStudySchema = new Schema<ICaseStudy, ICaseStudyModel>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: [true, "Service id is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    brief: {
      type: String,
      trim: true,
    },
    isLatest: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

caseStudySchema.statics.generateSlug = async function (name: string) {
  const baseSlug = slugify(name, {
    lower: true,
    trim: true,
    remove: /[*+~.()'"!:@#$%^&\\]/g,
    replacement: "-",
  });

  let slug = baseSlug;
  let counter = 1;

  while (await this.findOne({ slug })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
};

const CaseStudy = model<ICaseStudy, ICaseStudyModel>(
  "Case-Study",
  caseStudySchema,
);
export default CaseStudy;

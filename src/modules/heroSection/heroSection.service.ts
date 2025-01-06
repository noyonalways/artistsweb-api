import { z } from "zod";
import HeroSection from "./heroSection.model";
import heroSectionValidation from "./heroSection.validation";

const create = async (
  payload: z.infer<typeof heroSectionValidation.create>["body"],
) => {
  return HeroSection.create({ ...payload });
};

const get = async () => {
  const result = await HeroSection.findOne();
  return result;
};

const update = async (
  payload: z.infer<typeof heroSectionValidation.update>["body"],
) => {
  const result = await HeroSection.findOneAndUpdate({}, payload, { new: true });
  return result;
};

export default { create, get, update };

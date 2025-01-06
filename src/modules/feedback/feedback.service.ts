import { PaginatedQueryBuilder } from "@/builders";
import { AppError } from "@/errors";
import httpStatus from "http-status";
import { z } from "zod";
import Feedback from "./feedback.model";
import feedbackValidation from "./feedback.validation";

const create = async (
  payload: z.infer<typeof feedbackValidation.create>["body"],
) => {
  return Feedback.create({ ...payload });
};

const getAll = async (query: Record<string, unknown>) => {
  const queryBuilder = new PaginatedQueryBuilder(
    Feedback.find(),
    query,
    "/api/v1/feedbacks",
  );

  const result = await queryBuilder
    .filter()
    .search()
    .sort()
    .selectFields()
    .paginate()
    .execute();

  return result;
};

const updateOne = async (
  id: string,
  payload: z.infer<typeof feedbackValidation.update>["body"],
) => {
  const updatedFeedback = await Feedback.findByIdAndUpdate(
    id,
    { ...payload },
    { new: true },
  );

  if (!updatedFeedback) {
    throw new AppError(httpStatus.NOT_FOUND, "Feedback not found");
  }

  return updatedFeedback;
};

const deleteOne = async (id: string) => {
  const feedback = await Feedback.findByIdAndDelete(id, {
    new: true,
  });

  if (!feedback) {
    throw new AppError(httpStatus.NOT_FOUND, "Feedback not found");
  }

  return feedback;
};

export default {
  create,
  getAll,
  updateOne,
  deleteOne,
};

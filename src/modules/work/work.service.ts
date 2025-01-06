import { PaginatedQueryBuilder, SingleDocQueryBuilder } from "@/builders";
import { AppError } from "@/errors";
import httpStatus from "http-status";
import { z } from "zod";
import Work from "./work.model";
import workValidation from "./work.validation";

const create = async (
  payload: z.infer<typeof workValidation.create>["body"],
) => {
  return Work.create({ ...payload });
};

const getAll = async (query: Record<string, unknown>) => {
  const queryBuilder = new PaginatedQueryBuilder(
    Work.find(),
    query,
    "/api/v1/works",
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

const getOne = async (id: string, query: Record<string, unknown>) => {
  const work = await new SingleDocQueryBuilder(
    Work,
    { _id: id },
    query,
  ).execute();

  if (!work) {
    throw new AppError(httpStatus.NOT_FOUND, "Work not found");
  }

  return work;
};

const updateOne = async (
  id: string,
  payload: z.infer<typeof workValidation.update>["body"],
) => {
  const updatedWork = await Work.findByIdAndUpdate(
    id,
    { ...payload },
    { new: true },
  );

  if (!updatedWork) {
    throw new AppError(httpStatus.NOT_FOUND, "Work not found");
  }

  return updatedWork;
};

const deleteOne = async (id: string) => {
  const work = await Work.findByIdAndDelete(id, {
    new: true,
  });

  if (!work) {
    throw new AppError(httpStatus.NOT_FOUND, "Work not found");
  }

  return work;
};

export default {
  create,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};

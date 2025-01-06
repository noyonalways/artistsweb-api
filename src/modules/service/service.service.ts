import { PaginatedQueryBuilder } from "@/builders";
import { AppError } from "@/errors";
import httpStatus from "http-status";
import { z } from "zod";
import Service from "./service.model";
import serviceValidation from "./service.validation";

const create = async (
  payload: z.infer<typeof serviceValidation.create>["body"],
) => {
  return Service.create({ ...payload });
};

const getAll = async (query: Record<string, unknown>) => {
  const queryBuilder = new PaginatedQueryBuilder(
    Service.find(),
    query,
    "/api/v1/services",
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
  payload: z.infer<typeof serviceValidation.update>["body"],
) => {
  const updatedService = await Service.findByIdAndUpdate(
    id,
    { ...payload },
    { new: true },
  );

  if (!updatedService) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  }

  return updatedService;
};

const deleteOne = async (id: string) => {
  const service = await Service.findByIdAndDelete(id, {
    new: true,
  });

  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  }

  return service;
};

export default {
  create,
  getAll,
  updateOne,
  deleteOne,
};

import { PaginatedQueryBuilder, SingleDocQueryBuilder } from "@/builders";
import { AppError } from "@/errors";
import httpStatus from "http-status";
import { z } from "zod";
import Service from "../service/service.model";
import { ICaseStudy } from "./caseStudy.interface";
import CaseStudy from "./caseStudy.model";
import caseStudyValidation from "./caseStudy.validation";

const create = async (payload: ICaseStudy) => {
  payload.slug = await CaseStudy.generateSlug(payload.name);

  const service = await Service.findById(payload.service);
  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  }

  return (
    await CaseStudy.create({ ...payload, service: service._id })
  ).populate("service");
};

const getAll = async (query: Record<string, unknown>) => {
  const queryBuilder = new PaginatedQueryBuilder(
    CaseStudy.find(),
    query,
    "/api/v1/case-studies",
  );

  const result = await queryBuilder
    .filter()
    .search()
    .sort()
    .selectFields()
    .populateFields(["service"])
    .paginate()
    .execute();

  return result;
};

const getOne = async (id: string, query: Record<string, unknown>) => {
  const caseStudy = await new SingleDocQueryBuilder(
    CaseStudy,
    { _id: id },
    query,
  )
    .populate(["service"])
    .execute();

  if (!caseStudy) {
    throw new AppError(httpStatus.NOT_FOUND, "Case Study not found");
  }

  return caseStudy;
};

const updateOne = async (
  id: string,
  payload: z.infer<typeof caseStudyValidation.update>["body"],
) => {
  if (payload.service) {
    const service = await Service.findById(payload.service);
    if (!service) {
      throw new AppError(httpStatus.NOT_FOUND, "Service not found");
    }
  }

  const updatedCaseStudy = await CaseStudy.findByIdAndUpdate(
    id,
    { ...payload },
    {
      new: true,
      runValidators: true,
    },
  ).populate("service");

  if (!updatedCaseStudy) {
    throw new AppError(httpStatus.NOT_FOUND, "Case Study not found");
  }

  return updatedCaseStudy;
};

const deleteOne = async (id: string) => {
  const caseStudy = await CaseStudy.findByIdAndDelete(id, { new: true });
  if (!caseStudy) {
    throw new AppError(httpStatus.NOT_FOUND, "Case Study not found");
  }
  return caseStudy;
};

export default {
  create,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};

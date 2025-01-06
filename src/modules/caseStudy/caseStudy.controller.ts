import { catchAsync, sendResponse } from "@/utils";
import httpStatus from "http-status";
import caseStudyService from "./caseStudy.service";

const create = catchAsync(async (req, res) => {
  const result = await caseStudyService.create(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Case Study created successfully",
    data: result,
  });
});

const getAll = catchAsync(async (req, res) => {
  const { data, pagination } = await caseStudyService.getAll(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Case Studies retrieved successfully",
    data: data,
    meta: pagination,
  });
});

const getOne = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await caseStudyService.getOne(id, req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Case Study retrieved successfully",
    data: result,
  });
});

const updateOne = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await caseStudyService.updateOne(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Case Study updated successfully",
    data: result,
  });
});

const deleteOne = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await caseStudyService.deleteOne(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Case Study deleted successfully",
    data: result,
  });
});

export default {
  create,
  getAll,
  updateOne,
  deleteOne,
  getOne,
};

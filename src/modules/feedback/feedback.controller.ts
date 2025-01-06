import { catchAsync, sendResponse } from "@/utils";
import httpStatus from "http-status";
import feedbackService from "./feedback.service";

const create = catchAsync(async (req, res) => {
  const result = await feedbackService.create(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Feedback created successfully",
    data: result,
  });
});

const getAll = catchAsync(async (req, res) => {
  const { data, pagination } = await feedbackService.getAll(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Feedback retrieved successfully",
    data: data,
    meta: pagination,
  });
});

const updateOne = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await feedbackService.updateOne(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Feedback updated successfully",
    data: result,
  });
});

const deleteOne = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await feedbackService.deleteOne(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Feedback deleted successfully",
    data: result,
  });
});

export default {
  create,
  getAll,
  updateOne,
  deleteOne,
};

import { catchAsync, sendResponse } from "@/utils";
import httpStatus from "http-status";
import workService from "./work.service";

const create = catchAsync(async (req, res) => {
  const result = await workService.create(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Work created successfully",
    data: result,
  });
});

const getAll = catchAsync(async (req, res) => {
  const { data, pagination } = await workService.getAll(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Works retrieved successfully",
    data: data,
    meta: pagination,
  });
});

const getOne = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await workService.getOne(id, req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Work retrieved successfully",
    data: result,
  });
});

const updateOne = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await workService.updateOne(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Work updated successfully",
    data: result,
  });
});

const deleteOne = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await workService.deleteOne(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Work deleted successfully",
    data: result,
  });
});

export default {
  create,
  getAll,
  getOne,
  updateOne,
  deleteOne,
};

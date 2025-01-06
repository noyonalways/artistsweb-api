import { catchAsync, sendResponse } from "@/utils";
import httpStatus from "http-status";
import serviceService from "./service.service";

const create = catchAsync(async (req, res) => {
  const result = await serviceService.create(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Service created successfully",
    data: result,
  });
});

const getAll = catchAsync(async (req, res) => {
  const { data, pagination } = await serviceService.getAll(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service retrieved successfully",
    data: data,
    meta: pagination,
  });
});

const updateOne = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await serviceService.updateOne(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service updated successfully",
    data: result,
  });
});

const deleteOne = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await serviceService.deleteOne(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service deleted successfully",
    data: result,
  });
});

export default {
  create,
  getAll,
  updateOne,
  deleteOne,
};

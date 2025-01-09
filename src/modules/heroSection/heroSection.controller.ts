import { catchAsync, sendResponse } from "@/utils";
import httpStatus from "http-status";
import heroSectionService from "./heroSection.service";

const create = catchAsync(async (req, res) => {
  const result = await heroSectionService.create(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Hero Section Created successfully",
    data: result,
  });
});

const get = catchAsync(async (req, res) => {
  const result = await heroSectionService.get();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Hero Section data retrieved successfully",
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await heroSectionService.update(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Hero Section updated successfully",
    data: result,
  });
});

export default {
  create,
  get,
  update,
};

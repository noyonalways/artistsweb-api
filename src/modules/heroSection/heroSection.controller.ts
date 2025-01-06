import { catchAsync, sendResponse } from "@/utils";
import httpStatus from "http-status";
import heroSectionService from "./heroSection.service";

const create = catchAsync(async (req, res) => {
  const result = await heroSectionService.create(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Feedback created successfully",
    data: result,
  });
});

const get = catchAsync(async (req, res) => {
  const result = await heroSectionService.get();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Feedback retrieved successfully",
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await heroSectionService.update(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Feedback updated successfully",
    data: result,
  });
});

export default {
  create,
  get,
  update,
};

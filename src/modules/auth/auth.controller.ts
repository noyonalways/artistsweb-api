import { catchAsync, sendResponse } from "@/utils";
import authService from "./auth.service";

const login = catchAsync(async (req, res) => {
  // Implement your login logic here
  const result = await authService.login(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Logged in successfully",
    data: result,
  });
});

export default {
  login,
};

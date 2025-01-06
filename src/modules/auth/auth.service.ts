import config from "@/config";
import { AppError } from "@/errors";
import httpStatus from "http-status";
import { z } from "zod";
import User from "../user/user.model";
import authValidation from "./auth.validation";

const login = async (payload: z.infer<typeof authValidation.login>["body"]) => {
  const user = await User.findOne({ email: payload.email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  const isMatch = await User.isPasswordMatched(payload.password, user.password);
  if (!isMatch) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid credentials");
  }

  const jwtPayload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };

  const accessToken = User.createToken(
    jwtPayload,
    config.JWT_ACCESS_TOKEN_SECRET as string,
    config.JWT_ACCESS_TOKEN_EXPIRES_IN as string,
  );

  return { accessToken };
};

export default {
  login,
};

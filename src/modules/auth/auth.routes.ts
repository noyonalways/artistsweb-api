import { validateRequest } from "@/middlewares";
import { Router } from "express";
import authController from "./auth.controller";
import authValidation from "./auth.validation";

const authRouter: Router = Router();

authRouter.post(
  "/login",
  validateRequest(authValidation.login),
  authController.login,
);

export default authRouter;

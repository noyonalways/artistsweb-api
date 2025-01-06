import { auth, validateRequest } from "@/middlewares";
import { Router } from "express";
import heroSectionController from "./heroSection.controller";
import heroSectionValidation from "./heroSection.validation";

const heroSectionRouter: Router = Router();

heroSectionRouter
  .route("/")
  .get(heroSectionController.get)
  .post(
    auth("admin"),
    validateRequest(heroSectionValidation.create),
    heroSectionController.create,
  )
  .patch(
    auth("admin"),
    validateRequest(heroSectionValidation.update),
    heroSectionController.update,
  );

export default heroSectionRouter;

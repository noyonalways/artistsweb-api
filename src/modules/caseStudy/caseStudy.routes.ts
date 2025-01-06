import { auth, validateRequest } from "@/middlewares";
import { Router } from "express";
import caseStudyController from "./caseStudy.controller";
import caseStudyValidation from "./caseStudy.validation";

const caseStudyRouter: Router = Router();

caseStudyRouter
  .route("/")
  .get(caseStudyController.getAll)
  .post(
    auth("admin"),
    validateRequest(caseStudyValidation.create),
    caseStudyController.create,
  );

caseStudyRouter
  .route("/:id")
  .get(caseStudyController.getOne)
  .patch(
    auth("admin"),
    validateRequest(caseStudyValidation.update),
    caseStudyController.updateOne,
  )
  .delete(auth("admin"), caseStudyController.deleteOne);

export default caseStudyRouter;

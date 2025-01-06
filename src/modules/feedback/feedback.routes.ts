import { auth, validateRequest } from "@/middlewares";
import { Router } from "express";
import feedbackController from "./feedback.controller";
import feedbackValidation from "./feedback.validation";

const feedbackRouter: Router = Router();

feedbackRouter
  .route("/")
  .get(feedbackController.getAll)
  .post(
    auth("admin"),
    validateRequest(feedbackValidation.create),
    feedbackController.create,
  );

feedbackRouter
  .route("/:id")
  .patch(
    auth("admin"),
    validateRequest(feedbackValidation.update),
    feedbackController.updateOne,
  )
  .delete(auth("admin"), feedbackController.deleteOne);

export default feedbackRouter;

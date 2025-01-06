import { auth, validateRequest } from "@/middlewares";
import { Router } from "express";
import workController from "./work.controller";
import workValidation from "./work.validation";

const workRouter: Router = Router();

workRouter
  .route("/")
  .get(workController.getAll)
  .post(
    auth("admin"),
    validateRequest(workValidation.create),
    workController.create,
  );

workRouter
  .route("/:id")
  .get(workController.getOne)
  .patch(
    auth("admin"),
    validateRequest(workValidation.update),
    workController.updateOne,
  )
  .delete(auth("admin"), workController.deleteOne);

export default workRouter;

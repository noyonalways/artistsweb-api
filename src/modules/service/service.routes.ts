import { auth, validateRequest } from "@/middlewares";
import { Router } from "express";
import serviceController from "./service.controller";
import serviceValidation from "./service.validation";

const serviceRouter: Router = Router();

serviceRouter
  .route("/")
  .get(serviceController.getAll)
  .post(
    auth("admin"),
    validateRequest(serviceValidation.create),
    serviceController.create,
  );

serviceRouter
  .route("/:id")
  .patch(
    auth("admin"),
    validateRequest(serviceValidation.update),
    serviceController.updateOne,
  )
  .delete(auth("admin"), serviceController.deleteOne);

export default serviceRouter;

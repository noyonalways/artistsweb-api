import authRouter from "@/modules/auth/auth.routes";
import caseStudyRouter from "@/modules/caseStudy/caseStudy.routes";
import feedbackRouter from "@/modules/feedback/feedback.routes";
import serviceRouter from "@/modules/service/service.routes";
import workRouter from "@/modules/work/work.routes";
import { Router } from "express";

const router: Router = Router();

const moduleRoutes: TModuleRoute[] = [
  {
    path: "/auth",
    routes: authRouter,
  },
  {
    path: "/works",
    routes: workRouter,
  },
  {
    path: "/feedbacks",
    routes: feedbackRouter,
  },
  {
    path: "/services",
    routes: serviceRouter,
  },
  {
    path: "/case-studies",
    routes: caseStudyRouter,
  },
];

moduleRoutes.forEach(({ path, routes }) => {
  router.use(path, routes);
});

type TModuleRoute = {
  path: string;
  routes: Router;
};

export default router;

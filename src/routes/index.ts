import authRouter from "@/modules/auth/auth.routes";
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
];

moduleRoutes.forEach(({ path, routes }) => {
  router.use(path, routes);
});

type TModuleRoute = {
  path: string;
  routes: Router;
};

export default router;

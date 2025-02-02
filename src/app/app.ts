import "colors";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

// local imports
import applicationRoutes from "./routes";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(
  cors({
    origin: [
      "https://artistsweb.vercel.app",
      "http://localhost:3000",
      "http://192.168.0.116:3000",
      "http://192.168.0.111:3000",
    ],
  }),
);
app.use(helmet());
app.use(express.json());

//  server static files
app.use("/public", express.static(path.join(process.cwd(), "public")));

// application routes
app.use(applicationRoutes);

export default app;

import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import "./config/database.js";

import { router as apiRouter } from "./routes/api/index.js";
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", apiRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
  app.use(logger("combined"));
} else {
  app.use(logger("dev"));
}

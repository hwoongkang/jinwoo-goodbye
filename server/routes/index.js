import express from "express";
import { router as apiRouter } from "./api/index.js";

export const router = express.Router();

router.use("/api", apiRouter);

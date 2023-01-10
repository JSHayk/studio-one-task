import express from "express";
// Routes
import authRouter from "./auth.router.js";

const router = express();
// Middlewares
router.use(authRouter); // Auth

export default router;

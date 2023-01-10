import express from "express";
// Routes
import authRouter from "./auth.router.js";
import newsRouter from "./news.router.js";

const router = express();
// Middlewares
router.use(authRouter); // Auth
router.use(newsRouter); // News

export default router;

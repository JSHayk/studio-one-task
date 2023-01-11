import express from "express";
import newsController from "../controllers/news.controller.js";
import generalMiddleware from "../middlewares/general.middleware.js";

const { checkIdParam, checkEmptyBody } = generalMiddleware;

const router = express();
// Geting all news
router.get("/news", newsController.getAllNews);
// Geting special news
router.get("/news/:id", checkIdParam, newsController.getNews);
// Adding keywords
router.post("/news/keywords/:id/:userId", checkIdParam, checkEmptyBody);

export default router;

import express from "express";
import newsController from "../controllers/news.controller.js";
import generalMiddleware from "../middlewares/general.middleware.js";

const router = express();
// Geting all news
router.get("/news", newsController.getAllNews);
// Geting special news
router.get("/news/:id", generalMiddleware.checkIdParam, newsController.getNews);


export default router;

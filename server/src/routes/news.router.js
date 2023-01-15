import express from "express";
import newsController from "../controllers/news.controller.js";
import generalMiddleware from "../middlewares/general.middleware.js";
import newsMiddleware from "../middlewares/news.middleware.js";

const { checkIdParam, checkEmptyBody } = generalMiddleware;

const router = express();
// Geting all news
router.get("/news", newsController.getAllNews);
// Geting special news
router.get("/news/:id", checkIdParam, newsController.getNews);
// Adding keywords
router.post(
  "/news/keywords/:newsId/:userId",
  checkIdParam,
  checkEmptyBody,
  newsMiddleware.checkNewsBody,
  newsMiddleware.checkNewsValidations,
  newsController.addKeywords
);
// Editing keywords
router.put(
  "/news/keywords/:newsId/:keywordsId",
  checkIdParam,
  checkEmptyBody,
  newsMiddleware.checkNewsBody,
  newsMiddleware.checkNewsValidations,
  newsController.editKeywords
);
// Deleting keywords
router.delete(
  "/news/keywords/:newsId/:keywordsId",
  checkIdParam,
  generalMiddleware.checkEmptyBody,
  newsController.deleteKeywords
);

export default router;

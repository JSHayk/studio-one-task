import express from "express";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import generalMiddleware from "../middlewares/general.middleware.js";

const router = express();
// Register
router.post(
  "/register",
  generalMiddleware.checkEmptyBody,
  authMiddleware.checkAuthBody,
  authMiddleware.checkAuthValidations,
  authController.register
);
// Login
router.post(
  "/login",
  generalMiddleware.checkEmptyBody,
  authMiddleware.checkAuthBody,
  authMiddleware.checkAuthValidations,
  authController.login
);
// Logout
router.get("/logout", authController.logout);

export default router;

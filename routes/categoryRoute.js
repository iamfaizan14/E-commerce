import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  updateCategoryController,
  singleCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController.js";
const router = express.Router();

//ROUTES
//READ-CATEGORY
router.get("/get-category", requireSignIn, isAdmin, categoryController);

//CREATE-CATEGORY
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//UPDATE-CATEGORY
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//GET SINGE CATEGORY
router.get(
  "/single-category/:slug",
  requireSignIn,
  isAdmin,
  singleCategoryController
);

//DELETE-CATEGORY
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;

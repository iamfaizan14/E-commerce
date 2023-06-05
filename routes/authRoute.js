import express from "express";
import {
  registerController,
  loginController,
  testController,
  userController,
  forgetPasswordController,
  resetPassUsingOTPController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//REGISTER || POST METHOD
router.post("/register", registerController);

//LOGIN || POST METHOD
router.post("/login", loginController);

router.get("/test", requireSignIn, isAdmin, testController);

//FORGOT PASSWORD
router.post("/forget-password", forgetPasswordController);
//USELESS ROUTE NEED TO FIX
router.get("/sendOTP/:mobileNumber", resetPassUsingOTPController);

//PRIVATE ROUTES HERE
router.get("/user-auth", requireSignIn, userController);

export default router;

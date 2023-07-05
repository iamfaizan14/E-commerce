import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, phone, address, password, answer } = req.body;
    //valdiations
    if (!name) {
      res.send({ message: "Name is required" });
    }
    if (!email) {
      res.send({ message: "Email is required" });
    }
    if (!password) {
      res.send({ message: "Password is required" });
    }
    if (!phone) {
      res.send({ message: "Phone is required" });
    }
    if (!address) {
      res.send({ message: "Address is required" });
    }
    if (!answer) {
      res.send({ message: "Address is required" });
    }
    //check user
    let existingUser = await userModel.findOne({ email });
    //existing user
    if (existingUser) {
      return res.send({
        success: false,
        message: "Already registered, please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save user
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      answer,
    }).save();
    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

//LOGIN CONTROLLER
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validations
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid username or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "User not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid credentials",
      });
    }
    //Token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(201).send({
      success: true,
      message: "User logged in successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
    });
  }
};

//Forget Password controller
export const forgetPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (email && answer && newPassword) {
      const user = await userModel.findOne({ email, answer });
      if (!user) {
        return res.send({
          success: false,
          message: "Wrong email or answer",
        });
      } else {
        const hashedPassword = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, {
          password: hashedPassword,
        });
        res.send({
          success: true,
          message: "Password updated successfully",
        });
      }
    } else {
      res.send({
        success: false,
        message: "All fields are mandatory",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "somthing went wrong",
    });
  }
};

//Reset password using otp (USELESS CONTROLLER)
export const resetPassUsingOTPController = async (req, res) => {
  try {
    const mobileNumber = req.params.mobileNumber;
    const generateOTP = () => {
      return Math.floor(1000 + Math.random() * 9000).toString();
    };
    const otp = generateOTP();

    const message = `Your OTP is: ${otp}`;
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "Error while sending OTP",
    });
  }
};

//Controller when user is logged in (PRIVATE CONTROLLERS)
export const userController = (req, res) => {
  res.send({
    status: true,
  });
};

//Test Controller

export const testController = (req, res) => {
  res.send({
    success: true,
    message: "Logged in as Admin",
  });
};

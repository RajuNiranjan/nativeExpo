import User from "../models/user.modle.js";
import { errorHandler } from "../middleware/error.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signUP = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "Email is already used!" });
    }

    if (!userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ userName, email, password: hashPassword });
    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, { httpOnly: true });

    const userResponse = {
      _id: newUser._id,
      userName: newUser?.userName,
      email: newUser.email,
    };

    return res
      .status(201)
      .json({ message: "user created successfully", user: userResponse });
  } catch (error) {
    console.log("error during sign up : ", error);
    next(errorHandler(500, "Sign Up failed, Internal Server Error"));
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    if (!isPasswordValid) {
      return res.status(401).json({ message: "invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, { httpOnly: true });

    const userResponse = {
      _id: user._id,
      email: user.email,
      userName: user.userName,
    };

    res
      .status(200)
      .json({ message: "sign in successfully", user: userResponse });
  } catch (error) {
    console.log("error during sign in : ", error);
    next(errorHandler(500, "Sign In failed, Internal server error"));
  }
};

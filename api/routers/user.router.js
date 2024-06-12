import express from "express";
import { signIn, signUP } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/sign-up", signUP);
userRouter.post("/sign-in", signIn);

export default userRouter;

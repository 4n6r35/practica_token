import { Router } from "express";
import {
  AuthController,
  registerUserController,
} from "../controller/user.contoller.js";

export const userRouter = Router();

userRouter.post("/register", registerUserController);

userRouter.post("/auth", AuthController);

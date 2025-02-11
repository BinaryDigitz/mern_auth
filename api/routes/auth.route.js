import { Router } from "express";
import { Signup } from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.post('/signup', Signup)


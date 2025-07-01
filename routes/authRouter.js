import { Router } from "express";
import { loginUser, signupUser } from "../controllers/authControllers";

const authRouter = Router();

authRouter.post("/signup", signupUser);
authRouter.post("/login", loginUser);

export default authRouter;
import { Router } from "express";
import LoginController from "../controllers/loginController";

const router = Router();
const loginController = LoginController;

router.post("/login", loginController.loginUser);

export default router;

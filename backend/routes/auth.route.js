import { Router } from "express";
const router = Router();
import { register, login, updateUser } from "../controllers/auth.controller.js";

router.post("/register", register);
router.post("/login", login);
router.patch("/updateUser", updateUser);

export default router;
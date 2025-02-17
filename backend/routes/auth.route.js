import { Router } from "express";
import { register, login, updateUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.put("/update-user", updateUser);

export default router;

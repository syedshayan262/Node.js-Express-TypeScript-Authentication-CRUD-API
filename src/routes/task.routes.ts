import { Router } from "express";
import { createTask, getTasks } from "../controllers/task.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();

// create task
router.post("/create", authMiddleware, createTask);

// get tasks
router.get("/all", authMiddleware, getTasks);

export default router;

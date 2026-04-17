import { Request, Response } from "express";
import Task from "../models/task.model";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    const newTask = new Task({
      title,
      userId: (req as any).user.id,
    });

    await newTask.save();

    res.json({ msg: "task added" });
  } catch (err) {
    res.json({ error: err });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find({ userId: (req as any).user.id });
    res.json(tasks);
  } catch (err) {
    res.json({ error: err });
  }
};

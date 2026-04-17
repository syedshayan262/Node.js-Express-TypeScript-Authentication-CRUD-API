import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ msg: "user already exists" });
    }

    const hash = await bcrypt.hash(password || "", 10);

    const newUser = new User({
      name,
      email,
      password: hash,
    });

    await newUser.save();

    res.json({ msg: "user created" });
  } catch (err) {
    res.json({ error: err });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ msg: "user not found" });
    }

    const match = await bcrypt.compare(password || "", user.password || "");

    if (!match) {
      return res.json({ msg: "wrong password" });
    }

    const token = jwt.sign({ id: user._id }, "secretkey");

    res.json({ token });
  } catch (err) {
    res.json({ error: err });
  }
};

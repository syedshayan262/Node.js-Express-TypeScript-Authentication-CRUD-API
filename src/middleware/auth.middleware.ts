import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.json({ msg: "no token" });
  }

  try {
    const data = jwt.verify(token, "secretkey");
    (req as any).user = data;
    next();
  } catch (err) {
    res.json({ msg: "invalid token" });
  }
};

export default authMiddleware;

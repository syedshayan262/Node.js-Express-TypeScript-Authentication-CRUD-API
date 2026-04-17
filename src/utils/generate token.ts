import jwt from "jsonwebtoken";

export const generateToken = (id: string) => {
  const token = jwt.sign({ id }, "secretkey");
  return token;
};

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
    console.log("db connected");
  } catch (err) {
    console.log("db error", err);
  }
};

export default connectDB;

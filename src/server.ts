import app from "./app";
import connectDB from "./config/db";

const PORT = 3000;

// connecting db
connectDB();

// starting server
app.listen(PORT, () => {
  console.log("server running on port", PORT);
});

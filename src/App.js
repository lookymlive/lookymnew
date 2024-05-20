import express from "express";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

const app = express();

app.use(morgan("dev"));

app.use("/api","authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");

export default app;


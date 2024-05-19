import { connectDB } from "./db.js";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares y rutas aquí

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();

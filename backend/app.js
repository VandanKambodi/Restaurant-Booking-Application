import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import reservationRoutes from "./routes/reservationRoute.js";
import { errorMiddleware } from "./middlewares/error.js";
import { dbConnection } from "./database/dbConnection.js";

dotenv.config({ path: "./config.env" });

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ 
  origin: process.env.FRONTEND_URL || "http://localhost:5173", 
  credentials: true 
}));

// Routes
app.use("/reservation", reservationRoutes);
app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

dbConnection();

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;

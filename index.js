import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Routes
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8801;

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      throw err;
    });
};

// use
app.use(express.json());
// API Links
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.listen(PORT, () => {
  connect();
  console.log(`Connected! to port ${PORT}`);
});

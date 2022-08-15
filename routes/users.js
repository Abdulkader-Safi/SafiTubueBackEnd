import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  update,
} from "../contrallers/users.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Update user
router.put("/:id", verifyToken, update);

// delete user
router.delete("/:id", verifyToken, deleteUser);

// get a user
router.get("/find/:id", verifyToken, getUser);

// subscribe a user
router.put("/sub/:channelID", verifyToken, subscribe);

// unsubscribe a user
router.put("/unsub//:channelID", verifyToken, unsubscribe);

// like a video
router.put("/like/:videoID", verifyToken, like);

// dislike a video
router.put("/dislike/:videoID", verifyToken, dislike);

export default router;

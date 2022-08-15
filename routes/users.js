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

router.get("/find/:id", getUser);

router.put("/:id", verifyToken, update);
router.delete("/:id", verifyToken, deleteUser);

router.put("/sub/:id", verifyToken, subscribe);
router.put("/unsub/:id", verifyToken, unsubscribe);

router.put("/like/:videoID", verifyToken, like);
router.put("/dislike/:videoID", verifyToken, dislike);

export default router;

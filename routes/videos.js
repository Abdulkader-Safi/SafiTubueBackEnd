import express from "express";
import {
  getVideo,
  addVideo,
  updateVideo,
  deleteVideo,
} from "../contrallers/videos.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.get("/:id", getVideo);
router.post("/:id", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/find/:id", verifyToken, deleteVideo);

export default router;

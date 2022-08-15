import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userID: req.user.id, ...req.body });
  try {
    const saveVideo = await newVideo.save();
    res.status(200).json("savedVideo");
  } catch (err) {
    next(err);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

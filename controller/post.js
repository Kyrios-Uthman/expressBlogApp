import express from "express";
import Post from "../model/posts.js";
import {addPost,getAllPost} from "../services/post.js";
import Joi from "joi";
const router = express.Router();

const postSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  auther: Joi.string().required(),
});

router.post("/", async (req, res) => {
  try {
    await postSchema.validateAsync(req.body);
    const post = await addPost(req.body);
    return res.status(200).send({ status: 200, message: "success", post });
  } catch (err) {
    return res.status(400).send({ status: 400, message: err.message });
  }
});

router.get("/", async (req,res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const allPosts = await getAllPost(page);
    return res.status(200).send({ status: 200, message: "success", allPosts });
  } catch (err) {
    return res.status(400).send({ status: 400, message: err.message });

  }
});

export default router;

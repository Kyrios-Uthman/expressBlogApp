import Post from "../model/posts.js";
import mongoose from "mongoose";
const addPost = async (data) => {
  const post = new Post(data);
  return await post.save();
};

const getAllPost = async (pagen) => {
  const itemsPerPage = 3;
  const page = 3;
  const skip = (page - 1) * itemsPerPage;

  //return await Post.find({}).populate("auther","name")
  const totalItems  = await Post.countDocuments();
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const items = await Post.find({}).skip(skip).limit(itemsPerPage);
  return {
      page,
      totalPages,
      totalItems,
      items,
  }

};

export { addPost, getAllPost };

import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema  = mongoose.Schema({
  name:{
      type:String,
      required:true
  },
  email:{
      type:String,
      required:true,
      unique : true,
      
  },
  password:{
      type:String,
      required:true
  },
  phone:{
      type:Number,
      required:true
  }
})





const blogSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "create",
      updatedAt: "update",
    },
  }
);


const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post", blogSchema);
export default Post;

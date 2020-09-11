import mongoose from "mongoose";
import PostSchema from "../models/Post";
import CommentSchema from "../models/Comment";
import ProfileSchema from "../models/Profile";

class DbContext {
  Posts = mongoose.model("Post", PostSchema);
  Comments = mongoose.model("Comment", CommentSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();

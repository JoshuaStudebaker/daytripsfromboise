import mongoose from "mongoose";
import PostSchema from "../models/Post";
import ProfileSchema from "../models/Profile";

class DbContext {
  Posts = mongoose.model("Post", PostSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();

import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId


const Comment = new Schema(
  {
    user: { type: String, required: true },
    body: { type: String, required: true },
    cVote: { type: Number, required: true, default: 0 },
    parentId: { type: ObjectId, ref: "Post" },
    creatorEmail: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Comment.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Comment;

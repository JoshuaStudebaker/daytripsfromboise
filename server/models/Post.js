import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    placeName: { type: String, required: true },
    description: { type: String, required: true },
    distance: { type: Number, required: true },
    time: { type: String, required: true, enum: ['Short', 'Medium', 'Long'] },
    user: { type: String, required: true },
    pVote: { type: Number, required: true, default: 0 },
    creatorEmail: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Post.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Post;

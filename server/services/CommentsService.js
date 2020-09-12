import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentsService {
  async editVote(commentData) {
    let update = await dbContext.Comments.findOneAndUpdate(
      { _id: commentData.id },
      commentData,
      { new: true }
    );
    if (!update) {
      throw new BadRequest("invalid id");
    }
    return update;
  }
  async find(query = {}) {
    let comment = await dbContext.Comments.find(query);
    return comment;
  }
  async findCommentById(id) {
    let value = await dbContext.Comments.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
  async create(commentData) {
    return await dbContext.Comments.create(commentData);
  }
  async edit(commentData) {
    let update = await dbContext.Comments.findOneAndUpdate(
      { _id: commentData.id, creatorEmail: commentData.creatorEmail },
      commentData,
      { new: true }
    );
    if (!update) {
      throw new BadRequest("invalid id");
    }
    return update;
  }
  async delete(commentData) {
    let deleted = await dbContext.Comments.findOneAndDelete({
      _id: commentData.id,
      creatorEmail: commentData.creatorEmail,
    });
    if (!deleted) {
      throw new BadRequest("invalid id");
    }
    return deleted;
  }
}

export const commentsService = new CommentsService();

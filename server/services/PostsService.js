import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PostsService {
  async find(query = {}) {
    let post = await dbContext.Posts.find(query);
    return post;
  }
  async findPostById(id) {
    let value = await dbContext.Posts.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
  async create(postData) {
    return await dbContext.Posts.create(postData)
  }
  async edit(postData) {
    let update = await dbContext.Posts.findOneAndUpdate({ _id: postData.id, creatorEmail: postData.creatorEmail }, postData, { new: true })
    if (!update) {
      throw new BadRequest("invalid id")
    }
    return update
  }
  async editvote(postData){
  let update = await dbContext.Posts.findOneAndUpdate({ _id: postData.id,}, postData, { new: true })
  if (!update) {
    throw new BadRequest("invalid id")
  }
  return update
}
  async delete(postData) {
    let deleted = await dbContext.Posts.findOneAndDelete({ _id: postData.id, creatorEmail: postData.creatorEmail })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
    return deleted
  }
}

export const postsService = new PostsService();
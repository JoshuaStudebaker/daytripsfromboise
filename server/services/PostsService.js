import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PostsService {
  edit(body) {
    throw new Error("Method not implemented.");
  }
  delete(id) {
    throw new Error("Method not implemented.");
  }
  create(body) {
    throw new Error("Method not implemented.");
  }
  async find(query = {}) {
    let post = await dbContext.Posts.find(query);
    return post;
  }
  async findById(id) {
    let value = await dbContext.Posts.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const postsService = new PostsService();
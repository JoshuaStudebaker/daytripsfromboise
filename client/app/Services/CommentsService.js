import { ProxyState } from "../AppState.js";
import Comment from "../Models/Comment.js";
import { api } from "./AxiosService.js";

let url = "comments/";

class CommentsService {
  async likeComment(commentId) {
    // let res = await api.get(url + commentId)
    // res.data.voters.foEach()
  }
  async getComments(postId) {
    let res = await api.get("comments");
    ProxyState.comments = res.data.map((c) => new Comment(c));
  }
  async addComment(comment) {
    let res = await api.post(url, comment);
    ProxyState.comments = [...ProxyState.comments, new Comment(res.data)];
  }

  async deleteComment(commentId) {
    await api.delete(url + commentId);
    let index = ProxyState.comments.findIndex((c) => c.id == commentId);
    ProxyState.comments.splice(index, 1);
    ProxyState.comments = ProxyState.comments;
  }
}

export const commentsService = new CommentsService();

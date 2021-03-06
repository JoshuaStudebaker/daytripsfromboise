import { ProxyState } from "../AppState.js";
import Comment from "../Models/Comment.js";
import { api } from "./AxiosService.js";

let url = "comments/";

class CommentsService {
  // async likeComment(commentId) {
  //   // let res = await api.get(url + commentId)
  //   // res.data.voters.foEach()
  // }
  async getComments(postId) {
    console.log(postId);
    let res = await api.get(`posts/${postId}/comments`);
    console.log("get service", res);
    ProxyState.comments = res.data.map((c) => new Comment(c));
  }
  async addComment(comment) {
    let res = await api.post("comments/", comment);
    console.log("add", res);
    ProxyState.comments = [...ProxyState.comments, new Comment(res.data)];
  }

  async likeComment(value, commentId) {
    console.log(commentId);
    console.log(ProxyState.comments);
    let aComment = ProxyState.comments.find((c) => c._id == commentId);
    console.log(aComment);
    aComment.cVote += value;
    let res = await api.put(`comments/${commentId}/vote`, {
      cVote: aComment.cVote,
    });
    ProxyState.comments = ProxyState.comments;
  }

  async deleteComment(commentId) {
    await api.delete(url + commentId);
    let index = ProxyState.comments.findIndex((c) => c.id == commentId);
    ProxyState.comments.splice(index, 1);
    ProxyState.comments = ProxyState.comments;
  }
}

export const commentsService = new CommentsService();

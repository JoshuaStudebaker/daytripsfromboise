import { ProxyState } from "../AppState.js";
import { commentsService } from "../Services/CommentsService.js";

//Private
function _drawComments() {
  let template = "";
  ProxyState.comments.forEach((c) => (template += c.Template));
  document.getElementById("comments").innerHTML = template;
}

//Public
export default class CommentsController {
  constructor() {
    this.getComments();
    ProxyState.on("comments", _drawComments);
  }

  getComments(postId) {
    try {
      commentsService.getComments(postId);
    } catch (error) {
      console.error(error);
    }
  }

  addComment(postId) {
    event.preventDefault;
    let form = event.target;
    let comment = {
      // @ts-ignore
      body: form.body.value,
      parentId: postId,
    };
    try {
      commentsService.addComment(comment);
    } catch (error) {}
  }

  deleteComment(commentId) {
    try {
      commentsService.deleteComment(commentId);
    } catch (error) {
      console.error(error);
    }
  }

  likeComment(commentId) {
    try {
      commentsService.likeComment(commentId);
    } catch (error) {
      console.error(error);
    }
  }
}

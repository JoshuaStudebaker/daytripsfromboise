import { ProxyState } from "../AppState.js";
import { commentsService } from "../Services/CommentsService.js";

//Private
function _drawComments() {
  let template = "";
  console.log(ProxyState.comments);
  if (ProxyState.comments) {
    ProxyState.comments.forEach((c) => (template += c.Template));
  }
  document.getElementById("comments").innerHTML = template;
}

//Public
export default class CommentsController {
  constructor() {
    ProxyState.on("activePost", this.getComments);
    ProxyState.on("comments", _drawComments);
  }

  getComments() {
    console.log("hello get");
    let postId = ProxyState.activePost._id;
    console.log("post id", postId);
    try {
      commentsService.getComments(postId);
    } catch (error) {
      console.error(error);
    }
  }

  addComment(postId) {
    event.preventDefault();
    let form = event.target;

    let comment = {
      // @ts-ignore
      body: form.body.value,
      parentId: postId,
    };
    console.log(comment);
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

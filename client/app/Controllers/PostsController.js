import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";

//Private
function _draw() {
  let posts = ProxyState.posts;
  console.log(posts);
}

function _drawactive() {

}

//Public
export default class PostsController {
  constructor() {
    this.getPost()
    ProxyState.on("posts", _draw);
  }

  getPost(){
    try {
      postsService.getPost()
    } catch (error) {
      console.error(error)
    }
  }
  addPost() {
    try {
      postsService.addPost()
    } catch (error) {
      console.error(error)
    }
  }

  removePost() {
    try {
      postsService.removePost()
    } catch (error) {
      console.error(error)
    }
  }

  focusPost() {
    try {
      postsService.focusPost()
    } catch (error) {
      console.error(error)
    }

  }

}

import { AuthController } from "./Controllers/AuthController.js";
import CommentsController from "./Controllers/CommentsController.js";
import PostsController from "./Controllers/PostsController.js";

class App {
  constructor() {
    this.authController = new AuthController();
    this.postsController = new PostsController();
    this.commentsController = new CommentsController();
  }
}

window["app"] = new App();

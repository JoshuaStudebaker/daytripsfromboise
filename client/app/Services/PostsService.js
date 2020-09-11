import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";
import { api } from "./AxiosService.js";

class PostsService {
  async getPost() {
    console.log("service")
    let obj = await api.get('posts')
    console.log(obj)
  }
  async addPost(nPost) {
    let obj = await api.post('posts', nPost)
    let post = new Post(obj)
    ProxyState.posts = [...ProxyState.posts, post]
  }
  async focusPost() {
  
        }
  async removePost() {
  
        }
}

export const postsService = new PostsService();


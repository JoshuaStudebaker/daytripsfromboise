import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";
import { api } from "./AxiosService.js";

class PostsService {
  async getPost() {
    let obj = await api.get('posts')
    console.log(obj)
  }
  async addPost() {
    ProxyState.posts = [...ProxyState.posts, new Post({ title: Math.random() })]
  }
  async focusPost() {
  
        }
  async removePost() {
  
        }
}

export const postsService = new PostsService();


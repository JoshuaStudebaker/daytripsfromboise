import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";
import { api } from "./AxiosService.js";

class PostsService {
  async getPost() {
    console.log("service")
    let obj = await api.get('posts')
    console.log(obj.data)
    ProxyState.posts= obj.data.map(p => new Post(p))
    console.log(ProxyState.posts)
  }
  async addPost(nPost) {
    let obj = await api.post('posts', nPost)
    let post = new Post(obj)
    ProxyState.posts = [...ProxyState.posts, post]
  }
   focusPost(_id) {
    ProxyState.activePost = ProxyState.posts.find(p => p._id == _id)
    console.log(ProxyState.activePost)
        }
  async removePost(_id) {
    await api.delete(`posts/${_id}`)
    ProxyState.posts= ProxyState.posts.filter(p => p._id == _id)
  
        }
}

export const postsService = new PostsService();


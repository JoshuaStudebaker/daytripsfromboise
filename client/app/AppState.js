import Post from "./Models/Post.js";
import Comment from "./Models/Comment.js";

import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  user = {};
  profile = {};
  /** @type {Post[]} */
  posts = [];

  /**@type {Comment[]} */
  comments = [];
  activePost = null;


  formstate = true;
  activeComments = [];

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, post) {
    isValidProp(target, prop);
    target[prop] = post;
    target.emit(prop, post);
    return true;
  },
});

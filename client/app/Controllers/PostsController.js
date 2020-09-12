import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";

//Private
function _draw() {
  let ptemp = '<div class="row justify-content-around" >';
  ProxyState.posts.forEach((p) => (ptemp += p.cardtemp));
  ptemp += "</div>";
  document.getElementById("post-cont").innerHTML = ptemp;
  console.log("drawing");
}

function _drawactive() {
  document.getElementById("post-cont").innerHTML = ProxyState.activePost.Active;
}

function _drawForm() {
  document.getElementById("post-cont").innerHTML = `
  <div class=" d-flex justify-content-center">
            <form class="form card col-10" onsubmit="app.postsController.addPost()">
                <div class="form-group">
                    <label for="title">title</label>
                    <input class="form-control" type="text" name="title"></input>
                </div>
                <div class="form-group">
                    <label for="imgUrl">imgURL</label>
                    <input class="form-control" type="url" name="imgUrl"></input>
                </div>
                <div class="form-group">
                    <label for="placeName">placename</label>
                    <input class="form-control" type="text" name="placeName"></input>
                </div>
                <div class="form-group">
                    <label for="description">description</label>
                    <input class="form-control" type="text" name="description"></input>
                </div>
                <div class="form-group">
                    <label for="distance">distance</label>
                    <input class="form-control" type="number" name="distance"></input>
                </div>
                <div class="form-group">
                    <label for="time">time</label>
                    <input class="form-control" type="text" name="time"></input>
                </div>
                <button type="submit" class="btn btn-primary"> go</button>
            </form>
        </div>
  `;
}

//Public
export default class PostsController {
  constructor() {
    this.getPost();
    ProxyState.on("posts", _draw);
  }

  getPost() {
    try {
      postsService.getPost();
    } catch (error) {
      console.error(error);
    }
  }
  addPost() {
    event.preventDefault();
    console.log("controller");
    let data = event.target;
    let nPost = {
      title: data.title.value,
      imgUrl: data.imgUrl.value,
      placeName: data.placeName.value,
      description: data.description.value,
      distance: data.distance.value,
      time: data.time.value,
      pVote: 0,
    };
    try {
      console.log(nPost);
      postsService.addPost(nPost);
    } catch (error) {
      console.error(error);
    }
  }

  removePost(_id) {
    try {
      postsService.removePost(_id);
    } catch (error) {
      console.error(error);
    }
  }

  focusPost(_id) {
    postsService.focusPost(_id);
    _drawactive();
    console.log("focus-comments", ProxyState.comments);
  }

  createpost() {
    ProxyState.formstate = !ProxyState.formstate;
    console.log("toggle-comments", ProxyState.comments);
    if (!ProxyState.formstate) {
      _drawForm();
    } else {
      _draw();
    }
  }

  reset() {
    ProxyState.formstate = true;
    _draw();
  }

  vote(value){
    postsService.vote(value)
    _drawactive()
  }
}

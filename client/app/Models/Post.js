export default class Post {
  constructor({
    title,
    imgUrl,
    placeName,
    description,
    distance,
    time,
    user,
    pVote,
    _id,
    posttime,
  }) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.placeName = placeName;
    this.description = description;
    this.distance = distance;
    this.time = time;
    this.user = user;
    this.pVote = pVote;
    this._id = _id;
    this.posttime = posttime;
  }
  get cardtemp() {
    return `
    <div class="card shadow text-white col-3 appcard m-1 card-img" style="background-image: url(${this.imgUrl})" onclick="app.postsController.focusPost('${this._id}')">
        <div class="card-img-overlay">
          <h4 class="card-title">${this.title}</h4>
          <p class="card-text">${this.user}</p>
        </div>
      </div>
    `;
  }

  get Active() {
    return `
    <section class="row p-2 justify-content-center ">
    <div class="col-5 text-center post-body">
      <div class="img-cont d-flex flex-column justify-content-end align-items-center" style="background-image: url('${this.imgUrl}');">
        <h3 class="text-center text-light">Distance: ${this.distance} ~ Time: ${this.time}</h3>
        <div class="d-flex justify-content-between align-items-center">
        <p class= "text-light"><i class="fas fa-arrow-alt-circle-up fa-lg"></i>${this.pVote}<i class="fas fa-arrow-alt-circle-down fa-lg"></i></p></div>
        </div>
    </div>
    <div class="col-5 card bg-secondary shadow">
      <i class="fa fa-trash text-right m-2" aria-hidden="true" onclick="app.postsController.removePost('${this._id}')"></i>
      <h1>${this.title}</h1>
      <p>${this.description}</p>
      <h3>${this.placeName}</h3>
      <h6>${this.user}</h6>
    </div>
    <form class="col-10 card px-2 py-1 mx-2 form-group" onsubmit="app.commentsController.addComment('${this._id}')">
        <textarea name="body" cols="10" rows="5"></textarea>
        <button type="submit" class="btn btn-outline-success">Add Comment</button>
      </form>
  </section>
  <section id="comments">placehold commits</section>
    `;
  }
}

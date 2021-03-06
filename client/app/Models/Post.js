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
    this.timeIcon = this.findicon()
  }
  findicon() {
    if(this.time == 'Short'){
      return `<i class="fas fa-hourglass-start"></i>`
    }
    if(this.time == 'Medium'){
      return `<i class="fas fa-hourglass-half"></i>`
    }
    if(this.time == 'Long'){
      return `<i class="fas fa-hourglass-end"></i>`
    }
  }
  get cardtemp(){
    let order = 0 - this.pVote
    return`
    <div class="card shadow text-white col-3 appcard text-shadow m-1 card-img order-${order}" style="background-image: url(${this.imgUrl})" onclick="app.postsController.focusPost('${this._id}')">

        <div class="card-img-overlay">
          <h4 class="card-title">${this.title}</h4>
          <p class="card-text">${this.user}</p>
        </div>
      </div>
    `;
  }

  get Active() {
    return `
    <section class="row p-2 justify-content-center">
    <div class="col-5 text-center post-body">
      <div class="img-cont d-flex flex-column justify-content-end align-items-center" style="background-image: url('${this.imgUrl}');">
        <h3 class="text-center text-light text-shadow">Distance: ${this.distance} ~ ${this.timeIcon}</h3>
        <div class="d-flex justify-content-between align-items-center">
        <p class= "text-light text-shadow"><i class="fas fa-arrow-alt-circle-up fa-lg" onclick="app.postsController.vote(1)"></i>${this.pVote}<i class="fas fa-arrow-alt-circle-down fa-lg" onclick="app.postsController.vote(-1)"></i></p></div>
        </div>
    </div>
    <div class="col-5 card bg-secondary text-light text-shadow shadow my-2 p-3">
      <i class="fa fa-trash text-right " aria-hidden="true" onclick="app.postsController.removePost('${this._id}')"></i>
      <h1><strong>${this.title}</strong></h1>
      <hr>
      <p>${this.description}</p>
      <h3 class="align-self-end mt-auto p-2 bd-highlight">${this.placeName}</h3>
      <hr>
      <h6 class="align-self-end mt-auto p-2 bd-highlight">${this.user}</h6>
    </div>
    <form class="col-10 card px-2 py-4 mx-2 form-group bg-primary  my-1" onsubmit="app.commentsController.addComment('${this._id}')">
        <textarea class="bg-light text-dark p-2"name="body" cols="10" rows="5"> Have you been there?</textarea>
        <button type="submit" class="btn btn-outline-success text-light">Add Comment</button>
      </form>
  </section>
  <section id="comments" class="row d-flex flex-column"></section>
    `;
  }
}

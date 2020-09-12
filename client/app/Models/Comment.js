export default class Comment {
  constructor({ body, cVote, user, _id, parentId }) {
    this.body = body;
    this.user = user;
    this.cVote = cVote;
    this._id = _id;
    this.id = _id;
    // this.commentTime = commentTime;
    this.parentId = parentId;
    // this.voters = voters;
  }

  get Template() {
    return `
    <div class="card bg-primary p-3 shadow my-2"> 
  <div class="card-body bg-light bg-light pr-2 pl-2 pt-2 pb-0">    
    <p class="card-text mb-3 p-3"><span class="text-muted"> ${this.user} commented:</span> ${this.body} </p>
    <hr/>
    <p onclick="app.commentsController.likeComment(1, '${this._id}')" class="card-text mb-1 heart-pointer"> 💕 Give Some Love 💕</p>
    <p><i class="fas fa-heart heart"></i>: ${this.cVote}${this.Exclamation}</p>
    <hr/>
    <p class="text-right"><i class="fa fa-trash text-right" aria-hidden="true" onclick="app.commentsController.deleteComment('${this._id}')"></i></p>
  </div>
</div>
    `;
  }

  get Exclamation() {
    if (this.cVote >= 5) {
      return `!`;
    } else {
      return ``;
    }
  }
}

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
    <div class="card"> 
  <div class="card-body">    
    <p class="card-text mb-3 shadow p-3"><span class="text-muted"> ${this.user} commented: ${this.body}  </p>
    <p onclick="app.commentsController.likeComment(1, '${this._id}')" class="card-text mb-1 heart-pointer"> 💕 Give Some Love 💕</p>
    <p><i class="fas fa-heart heart"></i>: ${this.cVote}${this.Exclamation}</p>
    <p class="text-right"><i class="fa fa-trash text-right m-2" aria-hidden="true" onclick="app.commentsController.deleteComment('${this._id}')"></i></p>
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

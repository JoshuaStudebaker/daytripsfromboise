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
  <div class="card-header">
   ${this.user}
  </div>
  <div class="card-body">    
    <p class="card-text mb-0">${this.body}</p>
    <p class="card-text mb-0"> <i class="fas fa-arrow-alt-circle-up fa-lg" onclick="app.commentsController.likeComment(1, '${this._id}')"></i> votes <i class="fas fa-arrow-alt-circle-down fa-lg"></i></p>
    <p><i class="fa fa-trash text-right m-2" aria-hidden="true" onclick="app.commentsController.deleteComment('${this._id}')"></i></p>
    <p>${this.cVote}</p>
  </div>
</div>
    `;
  }
}

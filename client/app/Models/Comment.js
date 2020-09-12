export default class Comment {
  constructor({ body, cVote, user, id, parentId }) {
    this.body = body;
    this.user = user;
    this.cVote = cVote;
    this.id = id;
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
    <p class="card-text mb-0"> <i class="fas fa-arrow-alt-circle-up fa-lg"></i> votes <i class="fas fa-arrow-alt-circle-down fa-lg"></i></p>
    <p><i class="fa fa-trash text-right m-2" aria-hidden="true" onclick="app.commentsController.deleteComment('${this.id}')"></i></p>
  </div>
</div>
    `;
  }
}

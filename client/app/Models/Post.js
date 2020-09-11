export default class Post{
  constructor(title, imgURL, placeName, description, distance, time, user, pVote, _id, posttime){
    this.title = title
    this.imgURL = imgURL
    this.placeName = placeName
    this.description = description
    this.distance = distance
    this.time = time
    this.user = user
    this.pVote = pVote
    this._id = _id
    this.posttime = posttime
  }
}
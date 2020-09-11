export default class Post{
  constructor(title, imgUrl, placeName, description, distance, time, user, pVote, _id, posttime){
    this.title = title
    this.imgUrl = imgUrl
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
import express from "express";
import BaseController from "../utils/BaseController";
import { postsService } from "../services/PostsService";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class PostsController extends BaseController {

  constructor() {
    super("api/posts");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let posts = await postsService.find()
      res.send(posts)
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let post = await postsService.findPostById(req.params.id)
      res.send(post)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      let newPost = await postsService.create(req.body)
      res.send(newPost);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      req.body.id = req.params.id
      let update = await postsService.edit(req.body)
      res.send(update)
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      req.body.id = req.params.id
      await postsService.delete(req.body)
      res.send("Deleted")
    } catch (error) {
      next(error);
    }
  }


}

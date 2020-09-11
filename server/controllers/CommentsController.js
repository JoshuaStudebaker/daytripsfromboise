import express from "express";
import BaseController from "../utils/BaseController";
import { commentsService } from "../services/CommentsService";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class CommentsController extends BaseController {

  constructor() {
    super("api/comments");
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
      let comments = await commentsService.find()
      res.send(comments)
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let comment = await commentsService.findCommentById(req.params.id)
      res.send(comment)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      req.body.user = req.userInfo.name
      let newComment = await commentsService.create(req.body)
      res.send(newComment);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      req.body.id = req.params.id
      let update = await commentsService.edit(req.body)
      res.send(update)
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      req.body.id = req.params.id
      await commentsService.delete(req.body)
      res.send("Deleted")
    } catch (error) {
      next(error);
    }
  }


}

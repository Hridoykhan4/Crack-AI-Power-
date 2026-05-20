const express = require("express");
const { postUserComment, getSingleComments } = require("../controllers/comment.controller");

const commentRouter = express.Router();

commentRouter.get('/:id', getSingleComments)
commentRouter.post("/generate", postUserComment);

module.exports = { commentRouter };

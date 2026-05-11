const express = require("express");
const { postUserComment } = require("../controllers/comment.controller");
const commentRouter = express.Router();

// commentRouter.get('/:id', )
commentRouter.post("/create", postUserComment);


module.exports = { commentRouter };

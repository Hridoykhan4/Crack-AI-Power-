const express = require("express");
const { generatePaint, getSinglePaint, getAllPaintings } = require("../controllers/painting.controller");
const paintingRouter = express.Router();

paintingRouter.get("/", getAllPaintings);
paintingRouter.get("/:id", getSinglePaint)
paintingRouter.post('/generate', generatePaint)

module.exports = { paintingRouter };

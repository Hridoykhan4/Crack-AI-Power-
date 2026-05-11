require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");
const express = require("express");
const cors = require("cors");
const logger = require("../middleware/logger");
const { imageRouter } = require("../routes/image.route");
const { commentRouter } = require("../routes/comment.route");
const app = express();
const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);


// Middleware
app.use(cors());
app.use(express.json());
app.use(logger)
//routes
app.use('/images', imageRouter)
app.use('/comments', commentRouter)


app.get("/", (req, res) => {
  res.send({ message: "Power of AI" });
});

module.exports = app
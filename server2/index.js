require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { run } = require("./utils/connectdb");
const logger = require("./middlewares/logger");
const { paintingRouter } = require("./routes/painting.route");
const { commentRouter } = require("./routes/comment.route");



const port = process.env.PORT || 5000;
const app = express();
// MiddleWares
app.use(express.json());
app.use(cors());
app.use(logger);
// ROUTES
app.get("/", (req, res) => {
  res.send({
    message: "Server is running",
  });
});


app.use("/paintings", paintingRouter);
app.use("/comments", commentRouter);

const startServer = async () => {
  try {
    await run();
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server", error.message);
  }
};

startServer();

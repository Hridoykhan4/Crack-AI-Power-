require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { run } = require("./utils/connectdb");
const logger = require("./middlewares/logger");
const { commentRouter } = require("./routes/comment.route");
const { paintingRouter } = require("./routes/painting.route");
const authRouter = require("./routes/auth.route");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 5000;
const app = express();
// MiddleWares
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true 
}));
app.use(cookieParser());
app.use(logger);
// ROUTES
app.get("/", (req, res) => {
  res.send({
    message: "Server is running",
  });
});

app.use("/auth", authRouter);
app.use("/paintings", paintingRouter);
app.use("/comments", commentRouter);

const startServer = async () => {
  try {
    await run();
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server", err.message);
  }
};

startServer();

const { db } = require("../utils/connectdb");

const commentCollection = db.collection('paintingComments')
const postUserComment = async (req, res) => {
  try {
    const { imageId, prompt, email, comment, username, userImg } = req.body;

    if (!imageId || !prompt || !email || !comment) {
      return res.status(400).json({
        status: 400,
        message: "Please provide imageId, prompt, email, and comment",
      });
    }

    const reply = await generateAIReply(prompt, comment);
    console.log(reply);

    const document = {
      imageId,
      prompt,
      email,
      username,
      userImg,
      comment,
      reply,
      createdAt: new Date().toISOString(),
    };

    const result = await commentCollection.insertOne(document);

    return res.status(201).json({
      status: 201,
      message: "Comment submitted successfully",
      insertedId: result.insertedId,
      reply,
    });
  } catch (error) {
    console.error("Comment Post Error:", error.message);

    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
};

module.exports = { postUserComment };

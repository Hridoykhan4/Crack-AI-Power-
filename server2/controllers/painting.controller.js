const { ObjectId } = require("mongodb");
const getImageBuffer = require("../utils/ai/getImageBuffer");
const getURL = require("../utils/ai/getImageURL");
const { db } = require("../utils/connectdb");
const paintCollection = db.collection('paintings')

const getAllPaintings = async (req, res) => {
  res.send(
    await paintCollection
      .find()
      .project({ _id: 1, title: 1, url: 1, type: 1, category : 1})
      .toArray(),
  );
};

const generatePaint = async (req, res) => {
  const { body } = req || {};
  const { prompt, email, category, type } = body || {};
  const buffer = await getImageBuffer(type, category, prompt);
  const imageData = await getURL(buffer, prompt);
  console.log(imageData, buffer);
  try {
    const document = {
      title: imageData?.data.title,
      prompt: prompt,
      email,
      category,
      type,
      thumb: imageData?.data?.thumb?.url,
      url: imageData?.data?.url,
      medium_url: imageData?.data.medium?.url,
    };

    const result = await paintCollection.insertOne(document);
    res.send({ ...result, url: document.uri });
  } catch (err) {
    console.log(err);
  }
};

const getSinglePaint = async (req, res) => {
  res.send(await paintCollection.findOne({ _id: new ObjectId(req.params.id) }));
};

module.exports = {  generatePaint, getSinglePaint, getAllPaintings };

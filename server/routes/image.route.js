const express = require('express')
const { insertAiImage, getAllImage, getSingleImage } = require('../controllers/image.controller')
const { imageCollection } = require('../utils/connectDB')


const imageRouter = express.Router()

imageRouter.get('/all', getAllImage)
imageRouter.get('/:id', getSingleImage)
imageRouter.post('/create', insertAiImage)

module.exports = {imageRouter}
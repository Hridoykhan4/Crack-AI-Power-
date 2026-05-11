const express = require('express')
const { insertAiImage, getAllImage, getSingleImage } = require('../controllers/image.controller')
const { imageCollection } = require('../utils/connectDB')


const imageRouter = express.Router()

imageRouter.post('/create', insertAiImage)
imageRouter.get('/all', getAllImage)
imageRouter.get('/:id', getSingleImage)

module.exports = {imageRouter}
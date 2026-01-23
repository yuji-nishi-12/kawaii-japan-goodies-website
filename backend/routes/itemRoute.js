import express from 'express'
import { addItem, removeItem, getItem, getAllItems } from '../controllers/itemController.js'
import upload from '../middleware/multer.js'

const itemRouter = express.Router()

itemRouter.post('/add', upload.fields([{name: "image1", maxCount: 1}, {name: "image2", maxCount: 1}, {name: "image3", maxCount: 1}]), addItem)
itemRouter.post('/remove', removeItem)
itemRouter.post('/single-item', getItem)
itemRouter.get('/item-all', getAllItems)

export default itemRouter
import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true},
    bestSeller: { type: Boolean, required: true },
    date: { type: Number, required: true }
})

const itemModel = mongoose.models.item || mongoose.model('item', itemSchema)

export default itemModel
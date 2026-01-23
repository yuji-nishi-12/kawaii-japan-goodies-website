import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectMongoDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import itemRouter from './routes/itemRoute.js'

// Create an Express application
const app = express()
const port = process.env.PORT || 5000
connectMongoDB()
connectCloudinary()

// Middlewares
app.use(express.json()) // Any incoming requests will be parsed as JSON
app.use(cors()) // Enable access to backend for all routes or any IPs

// API endpoints
app.use('/api/user', userRouter)
app.use('/api/item', itemRouter)

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.listen(port, () => console.log("Server running on PORT: " + port))
import mongoose from 'mongoose'

const connectMongoDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database Connected.")
        
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/KawaiiJapanGoodies`)

}

export default connectMongoDB
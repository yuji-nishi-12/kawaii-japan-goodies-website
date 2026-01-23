import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'


const createToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET)
}

// Route handler for user login
const userLogin = async (req, res) => {

    try {

        const { email, password } = req.body

        // Find user by email
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Invalid email or password" })
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid email or password" })
        }

        const token = createToken(user._id)
        res.json({ success: true, token })
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// Route handler for user registration
const userRegister = async (req, res) => {

    try {

        const { name, email, password, confirmPassword } = req.body

        // Check if user already exists
        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.json({ success: false, message: "User already exists" })
        }

        // Valitate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email format" })
        }

        // Validate password length
        if (password.length < 6) {
            return res.json({ success: false, message: "Password must be at least 6 characters long..." })
        }
        // Check if passwords match
        if (password !== confirmPassword) {
            return res.json({ success: false, message: "Passwords do not match" })
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

export { userLogin, userRegister }
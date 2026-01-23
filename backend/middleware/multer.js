import multer from 'multer'

// Set up multer storage configuration
const storage = multer.diskStorage({
    filename: function(req, file, callback) {
        callback(null, file.originalname)
    }
})

// Initialize multer with the defined storage
const upload = multer({ storage })

export default upload
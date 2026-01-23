

// Route handler for adding an item
const addItem = async (req, res) => {

    try {
        
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body

        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0]

        console.log(name, description, price, category, subCategory, sizes, bestSeller)
        console.log(image1, image2, image3)
        
        res.json({ success: true, message: "Item added successfully" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// Route handler for removing an item
const removeItem = async (req, res) => {

}

// Route handler for retrieving a single item info
const getItem = async (req, res) => {

}

// Route handler for fetching all items
const getAllItems = async (req, res) => {

}

export { addItem, removeItem, getItem, getAllItems }
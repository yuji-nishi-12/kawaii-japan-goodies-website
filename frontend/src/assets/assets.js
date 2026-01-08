// Asset Imports
// Importing icons used throughout the application
import kawaii_logo from './kawaii_logo.png'
import hero_img from './hero_img.jpg'
import shopping_cart_icon from './shopping_cart_icon.png'
import trash_bin_icon from './trash_bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import profile_icon from './profile_icon.png'
import search_icon from './search_icon.png'
import menu_icon from './menu_icon.png'
import close_icon from './close_icon.png'

// Importing product images used throughout the application
import p_img1 from './goods1.jpg'
import p_img2 from './goods2.jpg'
import p_img3 from './goods3.jpg'
import p_img4 from './goods4.jpg'
import p_img5 from './m_img1.jpg'
import p_img6 from './m_img2.jpg'
import p_img7 from './m_img3.jpg'
import p_img8 from './m_bag_img1.jpg'
import p_img9 from './m_bag_img2.jpg'
import p_img10 from './m_bag_img3.jpg'
import p_img11 from './shoes_img1.jpg'
import p_img12 from './shoes_img2.jpg'
import p_img13 from './shoes_img3.jpg'
import p_img14 from './shoes_img4.jpg'
import p_img15 from './shoes_img5.jpg'
import p_img16 from './shoes_img6.jpg'
import p_img17 from './w_bag_img1.jpg'
import p_img18 from './w_bag_img2.jpg'
import p_img19 from './w_bag_img3.jpg'
import p_img20 from './w_boots_img1.jpg'
import p_img21 from './w_img1.jpg'
import p_img22 from './w_img2.jpg'
import p_img23 from './w_img3.jpg'

// Assets Export
// Exporting icons for use in other parts of the application
export const icons = {
    kawaii_logo,
    hero_img,
    shopping_cart_icon,
    trash_bin_icon,
    dropdown_icon,
    profile_icon,
    search_icon,
    menu_icon,
    close_icon
}

// Exporting product images for use in other parts of the application
export const products = [
    {
        _id: "aa1",
        name: "Naruto Figurine Gift",
        description: "High-quality Naruto figurine perfect for fans and collectors.",
        price: 1780,
        image: [p_img1],
        category: "Gifts",
        subCategory: "Figurines",
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aa2",
        name: "Jujutsu Kaisen Yuta Okkotsu Figurine Gift",
        description: "Detailed Jujutsu Kaisen Yuta Okkotsu figurine for anime enthusiasts.",
        price: 1200,
        image: [p_img2],
        category: "Gifts",
        subCategory: "Figurines",
        date: 1716634345449,
        bestseller: false
    },
    {
        _id: "aa3",
        name: "Dolce Thor Sunny Grace 50mL 1.7FL.OZ Gift",
        description: "Elegant Dolce Thor Sunny Grace fragrance, perfect for gifting.",
        price: 2000,
        image: [p_img3],
        category: "Gifts",
        subCategory: "Body Care",
        date: 1716634345450,
        bestseller: true
    },
    {
        _id: "aa4",
        name: "CUTUV Sun Protect Aqua Essence SPF50+ PA++++ Gift",
        description: "Premium sun protection essence with high SPF for daily use.",
        price: 1500,
        image: [p_img4],
        category: "Gifts",
        subCategory: "Body Care",
        date: 1716634345451,
        bestseller: false
    },
    {
        _id: "aa5",
        name: "Men Comfy Collared Jacket",
        description: "Stylish and comfortable collared jacket for men.",
        price: 2250,
        image: [p_img5],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345452,
        bestseller: true
    },
    {
        _id: "aa6",
        name: "Men Blue Oversized Sweatshirt",
        description: "Cozy blue oversized sweatshirt, perfect for casual wear.",
        price: 100,
        image: [p_img6],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345453,
        bestseller: false
    },
    {
        _id: "aa7",
        name: "Men Gray Casual Sweatshirt",
        description: "Classic gray casual sweatshirt for everyday comfort.",
        price: 1000,
        image: [p_img7],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345454,
        bestseller: true
    },
    {
        _id: "aa8",
        name: "Men Blue Handbag Accessory",
        description: "Trendy blue handbag, perfect for everyday use.",
        price: 750,
        image: [p_img8],
        category: "Men",
        subCategory: "Accessories",
        date: 1716634345455,
        bestseller: true
    },
    {
        _id: "aa9",
        name: "Men Black Casual Bag Accessory",
        description: "Sleek black casual bag, ideal for carrying essentials.",
        price: 950,
        image: [p_img9],
        category: "Men",
        subCategory: "Accessories",
        date: 1716634345456,
        bestseller: false
    },
    {
        _id: "aa10",
        name: "Men Black Addidas Backpack Accessory",
        description: "Durable black Adidas backpack, perfect for travel and daily use.",
        price: 1500,
        image: [p_img10],
        category: "Men",
        subCategory: "Accessories",
        sizes: ["S", "M", "L"],
        date: 1716634345457,
        bestseller: true
    },
    {
        _id: "aa11",
        name: "New Balance Orange Running Shoes",
        description: "Comfortable and stylish orange running shoes from New Balance.",
        price: 4500,
        image: [p_img11],
        category: "Shoes",
        subCategory: "Footwear",
        sizes: ["S", "M", "L"],
        date: 1716634345458,
        bestseller: false
    },
    {
        _id: "aa12",
        name: "New Balance White Sneakers Shoes",
        description: "Comfortable and stylish white sneakers from New Balance.",
        price: 4550,
        image: [p_img12],
        category: "Shoes",
        subCategory: "Footwear",
        sizes: ["S", "M", "L"],
        date: 1716634345459,
        bestseller: false
    },
    {
        _id: "aa13",
        name: "Onitsuka Tiger Original Sneakers Shoes",
        description: "Classic Onitsika Tiger Original sneakers, combining style and comfort.",
        price: 6500,
        image: [p_img13],
        category: "Shoes",
        subCategory: "Footwear",
        sizes: ["S", "M", "L"],
        date: 1716634345460,
        bestseller: true
    },
    {
        _id: "aa14",
        name: "Onitsuka Tiger Gray Sneakers Shoes",
        description: "Stylish Onitsika Tiger gray sneakers, perfect for everyday wear.",
        price: 6000,
        image: [p_img14],
        category: "Shoes",
        subCategory: "Footwear",
        sizes: ["S", "M", "L"],
        date: 1716634345461,
        bestseller: false
    },
    {
        _id: "aa15",
        name: "Nike Triple White Sneakers Shoes",
        description: "Sleek Nike Triple White sneakers, combining performance and style.",
        price: 7200,
        image: [p_img15],
        category: "Shoes",
        subCategory: "Footwear",
        sizes: ["S", "M", "L"],
        date: 1716634345462,
        bestseller: false
    },
    {
        _id: "aa16",
        name: "Black Sandals Shoes",
        description: "Comfortable and stylish black sandals, perfect for casual wear.",
        price: 3500,
        image: [p_img16],
        category: "Shoes",
        subCategory: "Footwear",
        sizes: ["S", "M", "L"],
        date: 1716634345463,
        bestseller: false
    },
    {
        _id: "aa17",
        name: "Women Brown Casual Bag Accessory",
        description: "Elegant brown casual bag, perfect for everyday use.",
        price: 2250,
        image: [p_img17],
        category: "Women",
        subCategory: "Accessories",
        date: 1716634345464,
        bestseller: false
    },
    {
        _id: "aa18",
        name: "Women Michael Kors Brown-Beige Bag Accessory",
        description: "Stylish Michael Kors brown-beige bag, ideal for all occasions.",
        price: 8900,
        image: [p_img18],
        category: "Women",
        subCategory: "Accessories",
        date: 1716634345465,
        bestseller: true
    },
    {
        _id: "aa19",
        name: "Women All White Michael Kors Bag Accessory",
        description: "Chic all-white Michael Kors bag, perfect for a sophisticated look.",
        price: 10000,
        image: [p_img19],
        category: "Women",
        subCategory: "Accessories",
        date: 1716634345466,
        bestseller: true
    },
    {
        _id: "aa20",
        name: "Women Light Brown Boots Footwear",
        description: "Comfortable and stylish light brown boots, perfect for casual wear.",
        price: 4300,
        image: [p_img20],
        category: "Women",
        subCategory: "Footwear",
        sizes: ["S", "M", "L"],
        date: 1716634345467,
        bestseller: false
    },
    {
        _id: "aa21",
        name: "Women Beige All-Weather Jacket",
        description: "Versatile beige all-weather jacket, ideal for various weather conditions.",
        price: 3750,
        image: [p_img21],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345468,
        bestseller: false
    },
    {
        _id: "aa22",
        name: "Women Pink All-Weather Jacket",
        description: "Versatile pink all-weather jacket, ideal for various weather conditions.",
        price: 3750,
        image: [p_img22],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345469,
        bestseller: false
    },
    {
        _id: "aa23",
        name: "Women Knitted Buttoned Collared Topwear",
        description: "Elegant knitted buttoned collared topwear for women.",
        price: 2950,
        image: [p_img23],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345470,
        bestseller: false
    }
]
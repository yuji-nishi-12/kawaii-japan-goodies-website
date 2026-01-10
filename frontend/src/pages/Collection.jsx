import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import { icons } from '../assets/assets'
import TextContent from '../components/TextContent'
import StoreItem from '../components/StoreItem'

const Collection = () => {

  const { products, search, showSearch } = useContext(StoreContext)
  const [filter, setFilter] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortItem, setSortItem] = useState("all")

  // Handle category filter change
  const changeCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(previous => previous.filter(item => item !== e.target.value))
    } else {
      setCategory(previous => [...previous, e.target.value])
    }
  }

  // Handle sub-category filter change
  const changeSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(previous => previous.filter(item => item !== e.target.value))
    } else {
      setSubCategory(previous => [...previous, e.target.value])
    }
  }

  // Handle sort change
  const handleFilter = () => {
    let itemsCopy = products.slice()

    if (showSearch && search) {
      itemsCopy = itemsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      itemsCopy = itemsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      itemsCopy = itemsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilteredItems(itemsCopy)
  }

  // Handle sort items
  const sortItems = (e) => {
    let filteredCopy = filteredItems.slice()

    switch (sortItem) {
      case "price-low-to-high":
        setFilteredItems(filteredCopy.sort((a, b) => (a.price - b.price)))
        break;

      case "price-high-to-low":
        setFilteredItems(filteredCopy.sort((a, b) => (b.price - a.price)))
        break;

      default:
        handleFilter()
        break;
    }
  }

  // Apply filters when category, sub-category, search, or showSearch changes
  useEffect(() => {
    handleFilter()
  }, [category, subCategory, search, showSearch])

  // Apply sorting when sortItem changes
  useEffect(() => {
    sortItems()
  }, [sortItem])

  return (
    // Placeholder for Collection page
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

      {/* Left side - filter container and options */}
      <div className="min-w-60 mt-10">
        {/* Filter when screen small - dropdown filter options */}
        <p onClick={() => setFilter(!filter)} className="my-2 text-xl flex items-center cursor-pointer gap-2 font-semibold">
          FILTERS
          <img className={`h-3 sm:hidden ${filter ? "rotate-90" : ""}`} src={icons.dropdown_icon} alt="" />
        </p>

        {/* Filter options - category */}
        <div className={`border border-black pl-5 py-3 mt-6 ${filter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={changeCategory} />
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange={changeCategory} />
              Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Gifts"} onChange={changeCategory} />
              Gifts
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Shoes"} onChange={changeCategory} />
              Shoes
            </p>
          </div>
        </div>

        {/* Filter options - sub-category */}
        <div className={`border border-black pl-5 py-3 my-5 ${filter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">SUB-CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light">
            <p className="flex gap-2">
              <input type="checkbox" value={"Apparel"} onChange={changeSubCategory} />
              Apparel
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Accessories"} onChange={changeSubCategory} />
              Accessories
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Body Care"} onChange={changeSubCategory} />
              Body Care
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Figurines"} onChange={changeSubCategory} />
              Figurines
            </p>
          </div>
        </div>
      </div>

      {/* Right side - sort options and products display */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4 mt-10">
          <TextContent text1={"ENTIRE"} text2={"COLLECTION"} />
          {/* Sort options */}
          <select className="border border-black text-sm px-2" onChange={(e) => setSortItem(e.target.value)} >
            <option value="all">Sort by: all</option>
            <option value="price-low-to-high">Sort by: low to high</option>
            <option value="price-high-to-low">Sort by: high to low</option>
          </select>
        </div>

        {/* Products display grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            // Future implementation: randomize products display
            filteredItems.map((item, i) => (
              <StoreItem key={i} 
                         id={item._id}
                         name={item.name}
                         image={item.image}
                         price={item.price} 
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection

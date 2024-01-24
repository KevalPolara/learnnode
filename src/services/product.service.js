const { Products } = require("../models/index.")

const createProduct = (data) => {
    return Products.create(data)
}

const getProduct = () => {
    return Products.find()
}

const listedproduct = (id) => {
    return Products.findById(id).exec()
}

const deleteProduct = (id) => {
    return Products.findByIdAndDelete(id)
}

const editProduct = (data) => {
    return Products.findByIdAndUpdate(data.id ,{product_name : 'samsung_SAMSUNG Galaxy A14 (Light Green, 128 GB)',})
}

module.exports = {
    createProduct,
    getProduct,
    listedproduct,
    deleteProduct,
    editProduct
}

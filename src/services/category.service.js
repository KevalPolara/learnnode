const { Category } = require("../models/index.");

const createCategory = async(data) => {
    return Category.create(data)
}

const getCategory = async() => {
    return Category.find();
}

const deleteCategory = async(data) => {
    console.log(data);
    return Category.findByIdAndDelete(id)
}

const editCategory = async(data) => {
    console.log(data);
    return Category.findByIdAndUpdate(data.id,{category_name : 'Electronics'});
} 

const getCategoryById = async(id) => {
    return Category.findById(id).exec()
}

module.exports = {
    createCategory,
    getCategory,
    deleteCategory,
    editCategory,
    getCategoryById
}
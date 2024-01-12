const joi = require('joi');

const createCategory = {
  body: joi.object().keys({
        category_name: joi.string().required(),
        category_description : joi.string().required().trim()
    })
}

const getCategory = {
    query: joi.object().keys()
}

const getCategoryById = {
    params: joi.object().keys()
}

const deleteCategory = {
    params : joi.object().keys()
}

const editCategory = {
    params : joi.object().keys(),
    body : joi.object().keys({
        category_name : joi.string().required(),
        category_description : joi.string().required()
    })
}

module.exports = {
    createCategory,
    getCategory,
    deleteCategory,
    editCategory
}
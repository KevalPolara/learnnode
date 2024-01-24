const joi = require('joi');

const createSubCategory = {
    body : joi.object().keys({
        subcategory_name : joi.string().required(),
        subcategory_description : joi.string().required().trim(),
        category_id : joi.string().required()
    })
}

const getsubCategory = {
    query : joi.object().keys()
}
const getsubCategorybyId = {
    query : joi.object().keys()
}

const deleteSubCategory = {
    params : joi.object().keys()
}

const editSubCategory = {
    params : joi.object().keys(),
    body : joi.object().keys({
        subcategory_name : joi.string().required(),
        subcategory_description : joi.string().required().trim(),
        category_id : joi.string().required()
    })
}

module.exports = {
    createSubCategory,
    getsubCategory,
    deleteSubCategory,
    editSubCategory,
    getsubCategorybyId
}


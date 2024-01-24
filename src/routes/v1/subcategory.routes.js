const express = require('express');
const validate = require('../../middleware/validate');
const { subCategoryValidation } = require('../../validation');
const { createSubCategory, getsubCategory, deleteSubCategory, editSubCategory, getsubCategorybyId, getCategory, getlistCategory, getCountActiveCategories, getMostProduct, getCountProduct } = require('../../controller/subcategory.controller');

const router = express.Router();

router.post(
    "/create-subcategory",
    validate(subCategoryValidation.createSubCategory),
    createSubCategory
)

router.get(
    "/get-subcategory",
    validate(subCategoryValidation.getsubCategory),
    getsubCategory
)

router.get(
    "/parent-of-subcategory",
    validate(subCategoryValidation.getsubCategory),
    getCategory
)

router.get(
    "/most-products",
    validate(subCategoryValidation.getsubCategory),
    getMostProduct
)

router.get(
    "/count-products",
    validate(subCategoryValidation.getsubCategory),
    getCountProduct 
)

router.get(
    "/list-by-category",
    validate(subCategoryValidation.getsubCategory),
    getlistCategory
)

router.get(
    "/count-active-subcategories",
    validate(subCategoryValidation.getsubCategory),
    getCountActiveCategories
)

router.get(
    "/get-subcategorybyid/:id",
    validate(subCategoryValidation.getsubCategorybyId),
    getsubCategorybyId
)
router.delete(
    "/delete-subcategory/:id",
    validate(subCategoryValidation.deleteSubCategory),
    deleteSubCategory   
)

router.put(
    "/post-subcategory/:id",
    validate(subCategoryValidation.editSubCategory),
    editSubCategory

)
module.exports = router;
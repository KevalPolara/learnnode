const express = require("express");
const validate = require("../../middleware/validate");
const { categoryValidation } = require("../../validation");
const {
  createCategory,
  getCategory,
  deleteCategory,
  editCategory,
  getCategoryById
} = require("../../controller/category.controller");
const { categoryController } = require("../../controller");
const auth = require("../../middleware/auth");

const router = express.Router();

router.get(
  "/get-category",
  validate(categoryValidation.getCategory),
  categoryController.getCategory
);

router.get(
  "/count-active",
  validate(categoryValidation.getCategory),
  categoryController.getCountActive
)


router.get(
  "/most-products",
  validate(categoryValidation.getCategory),
  auth(['admin', 'seller']),
  categoryController.getMostProduct
)

router.get(
  "/count-subcategories",
  validate(categoryValidation.getCategory),
  categoryController.getCountSubCategories
)

router.get(
  "/average-productscatgory",
  validate(categoryValidation.getCategory),
  categoryController.getaverageProductsCategory
)

router.get(
  "/get-category/:id",
  validate(categoryValidation.getCategory),
  getCategoryById
)

router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  auth(['admin', 'seller']),
  createCategory
);

router.delete(
  "/delete-category/:id",
  validate(categoryValidation.deleteCategory),
  deleteCategory
  )

  router.put(
    "/edit-category/:id",
    validate(categoryValidation.editCategory),
    editCategory
  )

module.exports = router;

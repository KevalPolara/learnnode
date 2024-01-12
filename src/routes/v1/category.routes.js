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

const router = express.Router();

router.get(
  "/get-category",
  validate(categoryValidation.getCategory),
  categoryController.getCategory
);

router.get(
  "/get-category/:id",
  validate(categoryValidation.getCategory),
  getCategoryById
)

router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
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

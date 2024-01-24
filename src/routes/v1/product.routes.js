const express = require('express');
const validate = require('../../middleware/validate');
const { prouctValidation } = require('../../validation');
const { listedproduct, deleteProduct, getProduct, editProduct, createProduct } = require('../../controller/product.controller');

const router = express.Router();

router.post(
'/create-product', 
validate(prouctValidation.createProduct),
createProduct
)

router.get(
 "/listed-product/:id",
 validate(prouctValidation.getProduct),
 listedproduct
)

router.get(
"/get-product",
validate(prouctValidation.getProduct),
getProduct
)

router.delete(
'/delete-product/:id',
validate(prouctValidation.deleteProduct),
deleteProduct
)
    
router.put(
'/edit-product/:id',
validate(prouctValidation.editProduct),
editProduct
)

module.exports = router;
const express = require('express');

const router = express.Router();

const userRouter = require('./user.routes');
const productRouter = require('./product.routes');
const categoryRouter = require('./category.routes');
const subcategoryRouter = require('./subcategory.routes');

router.use('/user',userRouter);
router.use('/product',productRouter); 
router.use('/category',categoryRouter); 
router.use('/subcategory',subcategoryRouter)

module.exports = router;
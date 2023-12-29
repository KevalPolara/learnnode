const express = require('express');

const router = express.Router();

const userRouter = require('./user.routes');
const productRouter = require('./product.routes');

router.use('/user',userRouter);
router.use('/product',productRouter);  

module.exports = router;
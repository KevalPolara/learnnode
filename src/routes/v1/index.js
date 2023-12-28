const express = require('express');

const router = express.Router();

const userRoute = require('./user.routes');
const ProductRoute = require('./product.routes');

router.use('/user',userRoute);
router.use('/product',ProductRoute);

module.exports = router;
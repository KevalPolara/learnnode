const express = require('express');
const {orderController } = require('../../controller');

const router = express.Router();

router.get(
    '/orderlist',
    orderController.getOrder
)

module.exports = router;

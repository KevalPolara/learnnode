const express = require('express');
const validate = require('../../middleware/validate');
const { categoryValidation } = require('../../validation');

const router = express.Router();

router.get('/', (req,res) => {
    res.send('Category Api Get Called')
})

router.post('/', validate(categoryValidation.createCategory),(req,res) => {
    res.send('Category Post Api Called')
    console.log(req.body);
})

module.exports = router;
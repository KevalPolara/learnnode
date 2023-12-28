const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.send('Product Api Get Called')
})

router.put('/',(req,res) => {
    res.send('Product put Api Called')
})

module.exports = router;
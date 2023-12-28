const express = require('express');

const router = express.Router();

let count = 0;

const counterVist = (req,res,next) => {
    count++;
    next();
}

router.route('/')
    .all(counterVist)
    .get((req,res) => {
        res.send(`user get new api called ${count}`);
    })

    .put((req,res) => {
        res.send('user put api called');
    })

// router.get('/new',(req,res) => {
//     res.send('user get new api called');
// })

// router.get('/:id', (req,res) => {
//     res.send(`user get api called ${req.params.id}`);
// })


// router.put('/',counterVist,(req,res) => {    
//     res.send(`user get api called ${count}`);
// })

// router.put('/',(req,res) => {    
//     res.send('user Put api called');
// })

module.exports = router;
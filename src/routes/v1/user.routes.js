const express = require('express');
const zod = require('zod');
const validate = require('../../middleware/validate');
const { userRegisteValidation } = require('../../validation');
const { createUser, loginUser } = require('../../controller/user.controller');
const router = express.Router();


const userSchema = zod.object({
    id : zod.number(),
    age : zod.number().gte(18),
    name : zod.string().min(2),
    hobbies : zod.array(zod.string()),
    country : zod.literal("in").or(zod.literal("ca")).or(zod.literal("aus"))
})

router.get("/:userId",(req,res, ) => {
    res.send(`Then this function will be called After , ${req.user.name}`);
})

router.post(
    '/register',
    validate(userRegisteValidation.registerUser),
    createUser
)

router.post(
    '/login',
    validate(userRegisteValidation.loginUser),
    loginUser
)

// const data = [
//     { 
//         id: 1,
//         name : 'keval',
//     },

//     { 
//         id: 2,
//         name : 'aryan',
//     } 
// ]

// router.param("userId", (req,res,next,userId) => {
//     console.log(userId);

//     const fData = data.find((v) => v.id == userId);

//     req.user = fData;

//     next();
// })





// router.get('/', (req,res) => {
//     res.send("get api called");
// })

// router.put('/',(req,res) => {
//     res.send("put api called")
// })

// let count = 0;

// const counterVist = (req,res,next) => {
//     count++;
//     next();
// }

// router.route('/')
//     .all(counterVist)
//     .get((req,res) => {
//         res.send(`user get new api called ${count}`);
//     })

//     .put((req,res) => {
//         res.send('user put api called');
//     })

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
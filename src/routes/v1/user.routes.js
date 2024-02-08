const express = require("express");
const zod = require("zod");
const validate = require("../../middleware/validate");
const { userRegisteValidation } = require("../../validation");
const { createUser, loginUser, accessRefreshToken } = require("../../controller/user.controller");
const { userController } = require("../../controller");
const auth = require("../../middleware/auth");
const { upload } = require("../../middleware/upload");
const router = express.Router();
const passport = require("passport");
const { sendOtp, verifyOtp } = require("../../utils/twiilo");
const { sendMail } = require("../../utils/nodemailer");

const userSchema = zod.object({
  id: zod.number(),
  age: zod.number().gte(18),
  name: zod.string().min(2),
  hobbies: zod.array(zod.string()),
  country: zod.literal("in").or(zod.literal("ca")).or(zod.literal("aus"))
});

// router.get("/:userId",(req,res, ) => {
//     res.send(`Then this function will be called After , ${req.user.name}`);
// })


router.post(
  '/sendmail',
  sendMail,
 function (req,res) {
  res.status(200).json({message : "Email Send Succesfully"});
 }
)

router.post(
  "/register",
  upload.single("avatar"),
  validate(userRegisteValidation.registerUser),
  userController.createUser
);

router.post(
  "/login",
  validate(userRegisteValidation.loginUser),
  userController.loginUser
);

router.post(
  '/sendotp',
  sendOtp,
  function (req,res) {
    res.status(200).json({message : "Otp Send Succesfully"})
  } 
)

router.post(
  '/verifyotp',
  verifyOtp,
)




router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
 async function(req, res) {

    console.log(req.isAuthenticated , "isAuthenticated");
    console.log(req.user , "user" );
    console.log(req.session , "session");
    const {refreshToken} = await accessRefreshToken(user._id);
    res.cookie("RefreshToken" , refreshToken);
    // Successful authentication, redirect home.
    res.send("ok");
  }
);

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["user_friends", "manage_pages"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

router.post("/genterateNewToken", userController.genterateNewToken);

router.delete("/delete-image");




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

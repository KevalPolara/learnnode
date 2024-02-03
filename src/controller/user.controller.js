const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { userService } = require("../services");
const jwt = require("jsonwebtoken");
const { uploadFile } = require("../utils/cloudinary");

const accessRefreshToken = async userId => {
  const ExistUser = await User.findOne({ _id: userId });
  console.log(ExistUser);


  const accessToken = await jwt.sign(
    {
      _id: ExistUser.id,
      name: ExistUser.user_name,
      email_id: ExistUser.email_id,
      roll : ExistUser.roll
    },

    `${process.env.ACCESS_TOKEN_KEY}`,

    {
      expiresIn: `${process.env.ACCESS_TOKEN_EXPIRY}`
    }
  );

  const refreshToken = await jwt.sign(
    {
      _id: ExistUser.id
    },
    `${process.env.ACCESS_TOKEN_KEY}`,
    {
      expiresIn: `${process.env.ACCESS_TOKEN_EXPIRY}`
    }
  );

  ExistUser.refresh_token = refreshToken;
  ExistUser.save();

  return { accessToken, refreshToken };
};

const genterateNewToken = async (req,res) => {
  try {

    const Token = req.body?.refreshtoken || req.cookies?.refreshtoken

    console.log(Token);

    if(!Token){
     return res.status(401).json({
        message : "Token is Required"
      })
    }

    const user = await User.findOne({refresh_token : Token}).select("-password , -refresh_token");

    if(!user){
      return  res.status(404).json({
        message : "User Not Found!"
      })
    }

    const {accessToken ,refreshToken} = await accessRefreshToken(user._id)
    console.log(accessToken , refreshToken);

    const userData = await User.findOne(user._id).select("-password, -refresh_token");

    console.log(userData, "Keval Polara");

    if(userData){
      res.status(200).json({
        success : true,
        message : "New Token Genereted",
        data :  {...userData , access_token: accessToken}
      })
    }
 
  } catch (error) {

    return res.status(500).json({
      message : error.message
    })
    
  }

}

const createUser = async (req, res) => {
  try {
    const {email_id, password } = req.body;

    const uploadFileData = await uploadFile(req.file.path)

    const existUser = await User.findOne({
      $or: [{ email_id }, { password }]
    });

    if (existUser) {
      return res.status(500).json({
        message: "Already User Exist"
      });
    }    

    if(!uploadFileData){
      res.status(500).json({
        message : "Please Upload File"
      })
    }


    // encrypted password Bani Jay

    const bcryptPassword = await bcrypt.hash(password, 10);

    const response = await userService.createUser({
      ...req.body,
      password: bcryptPassword,
      public_id : uploadFileData.public_id,
      url : uploadFileData.url
    });

    console.log(response);

    if (!response) {
      return res.status(500).json({
        message: "Interal Server Error, Please Try Again"
      });
    } else {
      const filterOne = await User
        .findById(response._id)
        .select("-password -bcryptPassword");

      return res.status(200).json({
        sucess: true,
        message: "You Are SucessFully Registered",
        data: filterOne
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Interal Server Error, Please Try Again kkkk"
    });
  }
};



const loginUser = async (req, res) => {
  try {
    const { email_id, password } = req.body;

    const loginuser = await User.findOne({ email_id });

    console.log(loginuser);

    if (!loginuser) {
      return res.status(400).json({
        message: "User Not Found"
      });
    }

    const checkPassword = await bcrypt.compare(password, loginuser.password);
    console.log(checkPassword);

    if (!checkPassword) {
      return res.status(500).json({
        message: "Invalid Email  Or Password"
      });
    }

    const { accessToken, refreshToken } = await accessRefreshToken(
      loginuser._id
    );

    const userdata = await User
      .findOne({ _id: loginuser._id })
      .select("-password -refreshToken");

    const option = {
      httpOnly: true,
      secure: true
    };

    res
      .status(200)
      .cookie("accesstoken", accessToken, option)
      .cookie("refreshtoken", refreshToken, option)
      .json({
        sucess: true,
        message: "Login Succesfully",
        data: { ...userdata, access_token: accessToken }
      });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  genterateNewToken
};

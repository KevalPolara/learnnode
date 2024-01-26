const user = require("../models/user.model");
const bcrypt = require("bcrypt");
const { userService } = require("../services");
const jwt = require("jsonwebtoken");

const accessRefreshToken = async userId => {
  const ExistUser = await user.filterOne({_id: userId});

  const accessToken = jwt.sign(
    {
      _id: ExistUser.id,
      name: ExistUser.user_name,
      email_id: ExistUser.email_id
    },
    `${process.env.ACCESS_TOKEN_KEY}`,
    {
      expiresIn: `${process.env.ACCESS_TOKEN_EXPIRY}`
    }
  );

  const refreshToken = jwt.sign(
    {
      _id: ExistUser.id,
      name: ExistUser.name,
      email_id: ExistUser.email_id
    },
    `${process.env.ACCESS_TOKEN_KEY}`,
    {
      expiresIn: `${process.env.ACCESS_TOKEN_EXPIRY}`
    }
  );
  
  ExistUser.refresh_token = refreshToken
  ExistUser.save()


  return {accessToken ,refreshToken}
};

const createUser = async (req, res) => {
  try {
    const { mobile_no, email_id, password } = req.body;

    const existUser = await user.findOne({
      $or: [{ email_id }, { password }]
    });

    if (existUser) {
      return res.status(500).json({
        message: "Already User Exist"
      });
    }

    const bcryptPassword = await bcrypt.hash(password, 10);

    const response = await userService.createUser({
      ...req.body,
      password: bcryptPassword
    });

    console.log(response);

    if (!response) {
      return res.status(500).json({
        message: "Interal Server Error, Please Try Again"
      });
    } else {
      const filterOne = await user
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
    console.log(req.body);

    const loginuser = await user.findOne({
      $or: [{email_id, password}]
    });

    if (!loginuser) {
      res.status(500).json({
        message: "Invalid Email  Or Password"
      });
    }

    const checkPassword = bcrypt.compare(password, loginuser.password);

    if (!checkPassword) {
      res.status(500).json({
        message: "Invalid Email  Or Password"
      });
    }

  const  {accessToken ,refreshToken} = await accessRefreshToken(loginuser.id);

   console.log(accessToken ,refreshToken);

  } catch (error) {
    res.status(500).json({
      message : "Invalid Email Or Password"
    })
  }
};

module.exports = {
  createUser,
  loginUser
};

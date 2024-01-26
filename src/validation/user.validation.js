const joi = require('joi');


const registerUser = {
    body : joi.object().keys({
        user_name : joi.string().required().trim(),
        user_address : joi.string().required().trim(),
        mobile_no : joi.number().required(),
        password : joi.string().required(),
        email_id : joi.string().required().trim(),
        roll : joi.string().required().trim(),
        refresh_token : joi.string()
    })
}

const loginUser = {
    body : joi.object().keys({
        email_id : joi.string().required().trim(),
        password : joi.string().required(),
    })
}

module.exports = {
    registerUser,
    loginUser
}
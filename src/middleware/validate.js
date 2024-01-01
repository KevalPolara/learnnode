const Joi = require("joi");
const pick = require("../helper/pick");

const validate = (schema) => (req,res,next) => {
    const object = pick(req, Object.keys(schema));
    console.log(object);

    const {error, value} = Joi.compile(schema)
    .prefs({
        abortEarly : false,
        errors : {label : 'key'}
    })
    .validate(object)

    if(error){
        console.log(error);

        const messageError = error.details.map((v) => v.message).join(',');
        return next(new Error("Validation Error:" + messageError));
    }else{
        Object.assign(req,value);

         return next();
    }
  
}

module.exports = validate;
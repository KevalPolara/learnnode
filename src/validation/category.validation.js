const joi = require('joi');

const createCategory = {
  body: joi.object().keys({
        id: joi.number().required(),
        name : joi.string().required().trim()
    })
} 

module.exports = {
    createCategory
}
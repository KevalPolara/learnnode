const user = require("../models/user.model")

const createUser = (reqBody) => {
    return user.create(reqBody)
}

module.exports = {
    createUser
}
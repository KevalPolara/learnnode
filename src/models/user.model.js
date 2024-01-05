const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_name : {
        type : String,
        require : true,
        trim : true
    },
    user_address : {
        type : String,
        require : true,
        trim : true
    },
    mobile_no : {
        type :Number,
        require : true
    },
    email_id : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    refresh_token : {
        type : String
    },
    is_Active : {
        type : Boolean,
        default : true,
    }

},

{
    timestamps : true
}

)

const user = mongoose.model('user',userSchema);

module.exports = user;
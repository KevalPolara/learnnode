const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({
    seller_name : {
        type : String,
        require : true,
        trim : true
    },
    pickup_address : {
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
    gst_number : {
        type :Number,
        require : true
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

const Seller = mongoose.model('Seller',sellerSchema);

module.exports = Seller;
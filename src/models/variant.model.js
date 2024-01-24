const mongoose = require('mongoose');

const variantSchema = mongoose.Schema({
    color : {
        type : String,
        require : true,
    },
    size : {
      type :  String,
       require : true
    },
    price : {
        type :  Number,
        require : true
    },
    images : {
        type :  String,
        require : true 
    },

    stocks : {
        type : Number,
        require  :true
    },
    product_id : {
        type : mongoose.Types.ObjectId,
        ref : 'product'
    }
},

{
    timestamps : true
}

)

const variant = mongoose.model('Variant',variantSchema);

module.exports = variant;
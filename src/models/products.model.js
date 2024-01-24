const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    product_name : {
        type : String,
        require : true,
        trim : true
    },
    product_description : {
        type : String,
        require : true,
        trim : true
    },
    category_id : {
        type : mongoose.Types.ObjectId,
        ref : 'Category'
    },
    subcategory_id : {
        type : mongoose.Types.ObjectId,
        ref : 'subCategory'
    },
    variant : [
     {
        color : {
            type : String
        },
        size : {
            type : String
        },
        price : {
            type : Number,
            require : true
        },
        stock : {
            type : Number,
        },
        ram : {
            type : String
        },
        rom : {
            type : String
        },
        images : {
            type : String
        }
     },
]

},

{
    timestamps : true
}

)

const product = mongoose.model('product',productSchema);

module.exports = product;
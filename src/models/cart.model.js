const mongoose = require('mongoose');

const  itemsSchema = mongoose.Schema({
    cartid :{
        type : mongoose.Types.ObjectId,
        ref : 'cart'
    },

    qty : {
        type :Number,
        require : true
    }
}) 

const cartSchema = mongoose.Schema({

    cartImtems : [itemsSchema],
   
    customer_id : {
        type : mongoose.Types.ObjectId,
        ref : 'user'
    },
   
},

{
    timestamps : true
}

)

const cart = mongoose.model('cart',cartSchema);

module.exports = cart;
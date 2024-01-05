const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

        pid :{
            type : mongoose.Types.ObjectId,
            ref : 'product'
        },

        qty : {
            type : Number,
            require : true
        }
    
})

const orderSchema = mongoose.Schema({
   product : [productSchema],
   user_id : {
    type : mongoose.Types.ObjectId,
    ref : 'user'
   },

   seller_id : {
    type : mongoose.Types.ObjectId,
    ref : 'Seller'
   },

   payment_id : {
    type : mongoose.Types.ObjectId,
    ref : 'payment'
   },

   Status : {
    type : String,
    enum : ['pending','In_transit', 'delivered']
   },
   
   Discount : {
    type : Number,
    require : true
   },

   Shipping_Address : {
    type : String,
    require : true,
    trim : true
   }
},
{
    timeStamps : true

}
)

const order = mongoose.model('order',orderSchema);

module.exports = order;
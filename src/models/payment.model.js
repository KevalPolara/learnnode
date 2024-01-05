const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    paymentGateWay : {
        type : String,
        require : true,
    },
    status : {
        type : String,
        status : ['pending','completed','failed'],
        require : true,
    },
    order_id : {
        type : mongoose.Types.ObjectId,
        ref : 'order'
    },
},

{
    timestamps : true
}

)

const payment = mongoose.model('payment',paymentSchema);

module.exports = payment;
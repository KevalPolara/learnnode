const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    rating: {
        type : Number,
        require : true,
        trim : true
    },
    comments : {
        type : String,
    },
    user_id : {
        type : mongoose.Types.ObjectId,
        ref : 'user'
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

const review = mongoose.model('review',reviewSchema);

module.exports = review;
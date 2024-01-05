const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    subcategory_name : {
        type : String,
        require : true,
        trim : true
    },
    subcategory_description : {
        type : String,
        require : true,
        trim : true
    },
    category_id : {
        type : mongoose.Types.ObjectId,
        ref : 'Category'
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

const SubCategory = mongoose.model('subCategory',subCategorySchema);

module.exports = SubCategory;
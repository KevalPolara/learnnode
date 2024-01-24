const { Category } = require("../models/index.");

const createCategory = async(data) => {
    return Category.create(data)
}

const getCategory = async() => {
    return Category.find();
}

const getCountActive = async() =>{
    return Category.aggregate(
        [
          {
            $match: {
              is_Active : true
            }
          }
        ])
}

const getCountSubCategories = async() => {
  return Category.aggregate(
    [
      {
        $lookup: {
          from: "subcategories",
          localField: "_id",
          foreignField: "category_id",
          as: "SubCategory_Details"
        }
      },
      {
        $project: {
          _id : 1,
          category_name : 1,
          No_Of_SubCategory : {
            $size : "$SubCategory_Details"
          }
        }
      }
    ]
  ) 
}

const getMostProduct = async() =>{
    return Category.aggregate(
        [
            {
              $lookup: {
                from: "products",
                localField: "_id",
                foreignField: "category_id",
                as: "ProductName"
              }
            },
          
              {
                $sort: {
                 ProductName : -1
                }
              },
          
            {
              $limit: 1,
            },
          
            {
              $project: {
                _id : "$_id",
                category_name : 1,
                Product_name : {
                  $size : "$ProductName"
                }
              }
            }
          ]
    )          
}

const getaverageProductsCategory = () => {
    return Category.aggregate(
        [
            {
              $lookup: {
                from: "products",
                localField: "_id",
                foreignField: "category_id",
                as: "ProductName"
              }
            },
          
              {
                $project: {
                  _id : 1,
                category_name : 1,
                NoOfProducts : {
                  $size : "$ProductName"
                }
                }
              },
          ]
    )
}

const deleteCategory = async(data) => {
    console.log(data);
    return Category.findByIdAndDelete(id)
}

const editCategory = async(data) => {
    console.log(data);
    return Category.findByIdAndUpdate(data.id,{category_name : 'Electronics'});
} 

const getCategoryById = async(id) => {
    return Category.findById(id).exec()
}

module.exports = {
    createCategory,
    getCategory,
    getCountActive,
    getMostProduct,
    getaverageProductsCategory,
    deleteCategory,
    editCategory,
    getCategoryById,
    getCountSubCategories
}
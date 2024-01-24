const { SubCategory } = require("../models/index.")

const createSubCategory = (data) => {
    return SubCategory.create(data)
}

const getsubCategory = () => {
    return SubCategory.find()
}

const getsubCategorybyId = (id) => {
    return SubCategory.findById(id).exec()
}

const deleteSubCategory = (id) => {
    return SubCategory.findByIdAndDelete(id)
}

const editSubCategory = (data) => {
    return SubCategory.findByIdAndUpdate(data.id ,{subcategory_name : 'Shoes'})
}

const getCountActiveCategories = () => {
    return SubCategory.aggregate(
        [
            {
              $match: {
                is_Active : true
              }
            },
            {
              $count: 'Total Active SubCategories'
            }
        ]
    )
}

const getlistCategory = () => {
    return SubCategory.aggregate(
        [
            {
              $lookup: {
                from: "categories",
                localField: "category_id",
                foreignField: "_id",
                as: "Category"
              }
            },
          
            {
              $unwind: "$Category"
            },
          
            {
              $group: {
                _id: "$Category.category_name",
                subcategory_name : {
                  $addToSet : "$subcategory_name"
                }
              }
            },
          
            {
              $match: {
              _id : {
                  $in : ["women's fashion","grocery"]
                }
              }
            }
            
          ]
    )
}

const getCategory = () => {
    return SubCategory.aggregate(
        [
            {
              $lookup: {
                from: "categories",
                localField: "category_id",
                foreignField: "_id",
                as: "Category"
              }
            },
          
          {
            $unwind: "$Category"
          },
          
          {
            $group: {
              _id: "$subcategory_name",
              
              Category_name : {
                $addToSet : "$Category.category_name"
              }
            }
          }
          ]
    )
}

const getMostProduct = async() => {
  return SubCategory.aggregate(
    [
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "subcategory_id",
          as: "Products",
        },
      },
    
      {
        $sort: {
          Products: -1,
        },
      },
    
      {
        $limit: 1,
      },
    
      {
        $unwind:"$Products" 
      },
    
      {
        $group: {
          _id: "$_id",
          subcategory_name: {
            $addToSet: "$subcategory_name"
          }
        }
      }
    ]
  )
}

const getCountProduct = () => {
  return SubCategory.aggregate(
    [
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "subcategory_id",
          as: "Products",
        },
      },
    
      {
        $project: {
          _id : "$_id",
          subcategory_name : 1,
          NoOfProducts : {
            $size : "$Products"
          }
        }
      }
    ]
  )
}

module.exports = {
    createSubCategory,
    getsubCategory,
    getCategory,
    deleteSubCategory,
    editSubCategory,
    getCountProduct,
    getlistCategory,
    getCountActiveCategories,
    getMostProduct    
}
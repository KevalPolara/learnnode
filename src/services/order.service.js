const {Order} = require("../models/index.");

const getOrder =async () => {
  return await Order.aggregate([
    {
        '$unwind': '$products'
    },
    {
        '$lookup': {
            'from': 'product',
            'localField': 'products.product_id',
            'foreignField': '_id',
            'as': 'Product'
        }
    },
    {
        '$lookup': {
            'from': 'variant',
            'localField': 'Product.0.variant_id',
            'foreignField': '_id',
            'as': 'variant'
        }
    },
    {
        '$unwind': '$variant'
    },
    {
        '$project': {
            '_id': 1,
            'product_name': {
                '$first': '$Product.name'
            },
            'description': {
                '$first': '$Product.description'
            },
            'qty': '$products.quantity',
            'price': '$variant.attributes.Price'
        }
    },
    {
        '$group': {
            '_id': '$_id',
            'products': {
                '$push': {
                    'product_name': '$product_name',
                    'description': '$description',
                    'qty': '$qty',
                    'price': '$price'
                }
            }
        }
    }
]);
};

module.exports = {
  getOrder
};

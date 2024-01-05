const { model } = require('mongoose');

module.exports.Category = require('./category.model');
module.exports.SubCategory = require('./subcategory.model');
module.exports.Cart = require('./cart.model');
module.exports.Order = require('./order.model');
module.exports.Payment = require('./payment.model');
module.exports.Products = require('./products.model');
module.exports.Review = require('./review.model');
module.exports.Seller = require('./seller.model');
module.exports.User = require('./user.model');
module.exports.Variant = require('./variant.model');
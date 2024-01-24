const joi = require('joi');


const createProduct = {
    body: joi.object({
        product_name: joi.string().required(),
        product_description: joi.string().required().trim(),
        category_id: joi.string().required(),
        subcategory_id: joi.string().required(),
        variant: joi.array().items(
            joi.object({
                color: joi.string().allow(''),
                size: joi.string().allow(''),
                price: joi.number(),
                images: joi.string().allow(''),
                stock: joi.number(),
                ram: joi.string().allow(''),
                rom: joi.string().allow('')
            })
        )
    })
};


const deleteProduct = {
    params : joi.object().keys()
}

const getProduct = {
    query : joi.object().keys()
}

const editProduct = {
    query : joi.object().keys(),
    body: joi.object({
        product_name: joi.string().required(),
        product_description: joi.string().required().trim(),
        category_id: joi.string().required(),
        subcategory_id: joi.string().required(),
        variant: joi.array().items(
            joi.object({
                color: joi.string().allow(''),
                size: joi.string().allow(''),
                price: joi.number(),
                images: joi.string().allow(''),
                stock: joi.number(),
                ram: joi.string().allow(''),
                rom: joi.string().allow('')
            })
        )
    })
};


module.exports = {
    createProduct,
    deleteProduct,
    getProduct,
    editProduct
}


// const createProduct = {
//     body: joi.object({
//         product_name: joi.string().required(),
//         product_description: joi.string().required().trim(),
//         category_id: joi.string().required(),
//         subcategory_id: joi.string().required(),
//         variant: joi.array().items(
//             joi.object({
//                 color: joi.string().allow(''),
//                 size: joi.string().allow(''),
//                 price: joi.number(),
//                 images: joi.string().allow(''),
//                 stock: joi.number(),
//                 ram: joi.string().allow(''),
//                 rom: joi.string().allow('')
//             })
//         )
//     })
// };

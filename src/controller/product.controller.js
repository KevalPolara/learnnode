const   {productService}  = require("../services");

const createProduct = async(req,res) => {
    try{
        const response = await productService.createProduct(req.body);

        console.log(response);

        if(!response){
            throw new Error('Create product Error')
        }else{
            
            res.status(200).json({
                success : true,
                message : 'Create product',
                data : response
            })
        }
    }catch(error){
        console.log(error.message);
    }
}

const getProduct = async(req,res) => {
    try{
        const response = await productService.getProduct()
        console.log(response);

        if(!response){
            throw new Error('getProduct Error');
        }else{
            res.status(200).json({
                success : true,
                message : 'get Product',
                data : response,
            })
        }

    }catch(error){
        console.log(error.message);

    }
}

const listedproduct = async(req,res) => {
    try{
        const response = await productService.listedproduct(req.params.id)
        console.log(response);

        if(!response){
            throw new Error('get Particular Product Error');
        }else{
            res.status(200).json({
                success : true,
                message : 'get Particular Product',
                data : response,
            })
        }

    }catch(error){
        console.log(error.message);

    }
}

const deleteProduct = async(req,res) => {
    try{
        const response = await productService.deleteProduct(req.params.id)
        console.log(response);

        if(!response){
            throw new Error('deleteProduct Error');
        }else{
            res.status(200).json({
                success : true,
                message : 'delete Product',
                data : response,
            })
        }

    }catch(error){
        console.log(error.message);
    }
}

const editProduct = async(req,res) => {
    try{
        const response = await productService.editProduct({id:req.params.id, data : req.body})
        console.log(response);

        if(!response){
            throw new Error('edit Product Error');
        }else{
            res.status(200).json({
                success : true,
                message : 'edit SubCategory',
                data : response,
            })
        }

    }catch(error){
        console.log(error.message);
    }
}

module.exports = {
    createProduct,
    getProduct,
    deleteProduct,
    editProduct,
    listedproduct
}
const { subCategoryService } = require("../services");


const createSubCategory = async(req,res) => {
    try{
        const response = await subCategoryService.createSubCategory(req.body)

        if(!response){
            throw new Error('Create SubCategory Error')
        }else{
            
            res.status(200).json({
                success : true,
                message : 'Create SubCategory',
                data : response
            })
        }
    }catch(error){
        console.log(error.message);
    }

}


const getsubCategorybyId = async(req,res) => {
    try{
        const response = await subCategoryService.getsubCategorybyId(req.params.id)
        console.log(response);

        if(!response){
            throw new Error('get Particular SubCategory Error');
        }else{
            res.status(200).json({
                success : true,
                message : 'get Particular SubCategory',
                data : response,
            })
        }

    }catch(error){
        console.log(error.message);

    }
}

const getsubCategory = async(req,res) => {
    try{
        const response = await subCategoryService.getlistCategory()
        console.log(response);

        if(!response){
            throw new Error('getCategory Error');
        }else{
            res.status(200).json({
                success : true,
                message : 'get SubCategory',
                data : response,
            })
        }

    }catch(error){
        console.log(error.message);

    }
}

const getlistCategory = async(req,res) => {
    try{
        const response = await subCategoryService.getlistCategory()
        console.log(response);

        if(!response){
            throw new Error('getCategory Error');
        }else{
            res.status(200).json({
                success : true,
                message : 'get SubCategory',
                data : response,
            })
        }

    }catch(error){
        console.log(error.message);

    }
}

const getCountActiveCategories = async(req,res) => {
    try{
        const response = await subCategoryService.getCountActiveCategories()
        console.log(response);

        if(!response){
            throw new Error('getCountActiveCategories Error');
        }else{
            res.status(200).json({
                success : true,
                message : 'get getCountActiveCategories',
                data : response,
            })
        }

    }catch(error){
        console.log(error.message);

    }
}

const getCategory = async(req,res) => {
    try{
        const response = await subCategoryService.getCategory()
        console.log(response);

        if(!response){
            throw new Error('get Category Error');
        }else{
            res.status(200).json({
                success : true,
                message : 'get Category',
                data : response,
            })
        }

    }catch(error){
        console.log(error.message);

    }
}

const getMostProduct = async(req,res) => {
    try{
        const response = await subCategoryService.getMostProduct()
        console.log(response);

        if(!response){
            throw new Error('get Most Product Error');
        }else{
            res.status(200).json({
                success : true,
                message : 'get Most Product SubCategory',
                data : response,
            })
        }

    }catch(error){
        console.log(error.message);

    }
}

const getCountProduct = async(req,res) => {
    try{
        const response = await subCategoryService.getCountProduct()
        console.log(response);

        if(!response){
            throw new Error('get Count Product Error');
        }else{
            res.status(200).json({
                success : true,
                message : 'get Count Product SubCategory',
                data : response,
            })
        }

    }catch(error){
        console.log(error.message);

    }
}

const deleteSubCategory = async(req,res) => {
    try{
        const response = await subCategoryService.deleteSubCategory(req.params.id)
        console.log(response);

        if(!response){
            throw new Error('deletesubCategory Error');
        }else{
            res.status(200).json({
                success : true,
                message : 'delete SubCategory',
                data : response,
            })
        }

    }catch(error){
        console.log(error.message);
    }
}

const editSubCategory = async(req,res) => {
    try{
        const response = await subCategoryService.editSubCategory({id:req.params.id, data : req.body})
        console.log(response);

        if(!response){
            throw new Error('editubCategory Error');
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
    createSubCategory,
    getsubCategory,
    getCategory,
    deleteSubCategory,
    getCountProduct,
    getlistCategory,
    editSubCategory,
    getsubCategorybyId,
    getCountActiveCategories,
    getMostProduct
}
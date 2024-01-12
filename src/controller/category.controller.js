const { Category } = require("../models/index.");
const { categoryService } = require("../services");
const { createCategoryService, getCategoryService } = require("../services/category.service");

const createCategory = async(req,res) => {
    try{
        const response =  await categoryService.createCategory(req.body);

        if(!response){
            throw new Error('Create Category Error');
        }

        res.status(200).json({
            success : 'true',
            massage : 'Create Category'
        })
        
    }catch(error){
        console.log(error.message);
    }
}

const getCategory = async(req,res) => {
    try{
        const response = await categoryService.getCategory();
        console.log(response);

        if(!response){
            throw new Error('Get Category Error');
        }

        res.status(200).json({
            success : true,
            message :'get Category',
            data: response
        });

    }catch(error){
        console.log(error.message);
    }

}

const getCategoryById = async(req,res) => {

    try{

        const response = await categoryService.getCategoryById(req.params.id)
        console.log(response);
        
        if(!response){
            throw new Error('Get ParticularCategory Error')

        }else{
            res.status(200).json({
                success : true,
                message : 'get Particular Category',
                data : response
            })
        }

    }catch(error){
      console.log(error);  
    }
}

const deleteCategory = async(req,res) => {
    console.log(req.params, "keval Polara");
    console.log(req.params.id);

    try{
    const response = await categoryService.deleteCategory(req.params.id);

        if(!response){
            throw new Error('Delete Category Error')
        }else{

            res.status(200).json({
                success : true,
                message :'Delete Category',
                data: null
            })
    
        }

    }catch(error){
        console.log(error);
    }
    
}

const editCategory = async(req,res) => {
    console.log(req.params,req.body);

    const response = await categoryService.editCategory({id : req.params.id , data : req.body});
    console.log(response);

   try{
    if(!response){
        throw new Error('Edit Category Error')
    }else {
        res.status(200).json({
            success : true,
            message : 'Edit Category',
            data : response
        })
    }
   }catch(error){
    console.log(error.message);
   }

}

module.exports = {
    createCategory,
    getCategory,
    deleteCategory,
    editCategory,
    getCategoryById
}
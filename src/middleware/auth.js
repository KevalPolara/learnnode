const jwt = require('jsonwebtoken');
const user = require('../models/user.model');

const auth = (role) => async (req,res,next) => {
   
        if(req.isAuthenticated()){
            const userRole = role.some((r) => r === role);
            console.log(userRole);
            
            if(!userRole){
                return res.status(401).json({
                    message : "Please Authorised"
                })  
            }
        }else{
            try{
                const token = req.cookies.accesstoken || req.headers.authorization?.replace("Bearer ", "")
            
                console.log(token, "kkkkk");
            
                if(!token){
                   return res.status(401).json({
                        message : "Please Authorised"
                    })
                }
            
                    await jwt.verify(token ,`${process.env.ACCESS_TOKEN_KEY}`,async function(err,DecodeToken){
            
                        console.log(DecodeToken , role);
            
                        if(err || role.some((r) => !(r == DecodeToken.role))){
                            return res.status(400).json({
                                 message : "Access Denied"
                                 
                             })
                         }
            
                    const users = await user.findById(DecodeToken._id).select('-password -refresh-token');
                    console.log(users);
            
                    if(!users){
                        return res.status(404).json({
                            message : "User Not Found"
                        })
                    }
            
                    req.user = users;
                    next()
            
                    })
        
                }catch(error){
                   return res.status(401).json({
                        message : error.message
                    })
                }
        }
   

   
}

module.exports = auth;
const User = require('../models/user.model')


const UserController = {
    create: (req,res)=>{
        User.create(req.body)
        .then((user)=>{
            res.json({user:user})
        })
        .catch((err)=>{
            res.status(500).json({message:"something went wrong",error:err})
        })
    
    },
    getAll: (req,res)=>{
        User.find({})
        .then((all)=>{
            res.json({users:all})
        })
        .catch((err)=>{
            res.status(500).json({message:"something went wrong",error:err})
        })
        
    },
    getOne:(req,res)=>{
        // console.log(req.params.id)
        User.find({_id:req.params.id})
        .then((thisUser)=>{

            if(thisUser.length ==0 ){
                res.json({user:"User Not Found"})
            }
            res.json({user:thisUser})
        })
        .catch((err)=>{

            res.status(500).json({message:"something went wrong",error:err})
        })
        
    },
    updateOne:(req,res)=>{
        User.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((updatedUser)=>{
            res.json({updatedUser:updatedUser})
        })
        .catch((err)=>{
            res.status(500).json({message:"something went wrong",error:err})
        })
        
    },
    deleteOne:(req,res)=>{
        User.findOneAndDelete({_id:req.params.id})
        .then((deletedUser)=>{
            res.json({User:deletedUser})
        })
        .catch((err)=>{
            res.status(500).json({message:"something went wrong",error:err})
        })
        
    },
}

module.exports = UserController
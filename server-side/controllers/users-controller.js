const UserModel = require("../models/user_model");
const jwt = require('jsonwebtoken')



// adding user 
const  adduser = async (req,res) =>{
    try {
        const {name,email,password} = req.body
        const newUser = new UserModel({name,email,password})
        const newDoc =  await newUser.save();
        console.log(newDoc)
        res.status(200).json({msg:"data inserted successfully"})
    } catch (error) {
        console.log(`the erro is in user control ${error}`)
    }
}

// reading 
const usersList = async (req,res)=>{
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        console.log(error)
    }


};


// read by id
const getUserById = async (req,res) =>{
    try {
        const userEdit =  await UserModel.findById(req.params.id);
        res.json(userEdit);
    } catch (error) {
        console.log(error)
    }
}

// upate user
const updateUser = async (req,res) =>{
    const {name,email,password} = req.body;
    const update = await UserModel.findByIdAndUpdate(req.params.id,{name,email,password},{new:true});
    if(!update){
        return res.status(404).json({msg:"user not found"})
    }
    res.json(update);
}


// delete user
const deleteUser = async (req,res) =>{  
    
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({msg:"user not found"})
        }
        res.json({msg:"user deleted successfully"});
    } catch (error) {
        console.log(error);
    }
}

// for login in end poing 
const ToLogin  = async (req,res) =>{t
    const {email, password } = req.body
    try {
        const userin = await UserModel.findOne({email});
        if(!userin){
           return res.status(400).json({msg:"Email or password is incorrect"})
        }
        if(userin.password !== password){
           return res.status(400).json({msg:"Email or password is incorrect"})
        }



        // res.status(200).json({msg:"login in successfully"})

        res ={
        }
        
    } catch (error) {
        console.log(error)
    }

}



module.exports = {
    usersList,
    adduser,
    getUserById,
    updateUser,
    deleteUser,
    ToLogin

};


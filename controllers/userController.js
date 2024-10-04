const userModel = require('../models/userModel');

const register = (req, res)=>{
    const{username, password} = req.body;

    const existingUser = userModel.findUser(username);
    if(existingUser){
        return res.status(400).json({message: 'This username already exist'})
    }

    userModel.createUser(username, password);
    return res.status(201).json({message: 'User account successfully created'});

}


const login = (req, res)=>{
    const{username, password}= req.body;

    const user = userModel.findUser(username);

    if(!user){
        return res.status(401).json({message: 'User not found'});
    }

    if(userModel.verifyPassword(username,password)){
        return res.status(201).json({message: 'Login Sucessfully!'});
    }
}


module.export = {
    register, 
    login
};
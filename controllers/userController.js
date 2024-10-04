const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secretKey = 'hello123!';

const register = (req, res)=>{
    const{email,username, password} = req.body;

    const existingUser = userModel.findUser(username);
    if(existingUser){
        return res.status(400).json({message: 'This username already exist'})
    }

    userModel.createUser(username, password);
    return res.status(201).json({message: 'User account successfully created'});

}


const login = (req, res)=>{
    const{email, password}= req.body;

    const user = userModel.findUser(email);

    if(!user){
        return res.status(401).json({message: 'User not found'});
    }

    if(!userModel.verifyPassword(email, password)){
        return res.status(401).json({message: 'Credentials invalid'});

    }

    const token = jwt.sign({id:user.id, email:user.email}, secretKey,{expires: '1h'});
    return res.status(200).json({message: 'Login Sucessfully!',token});
};

const getProfile = (req, res)=>{
    const user = userModel.findUser(req.user.email);

    if(!user){
        res.status(404).json({message: 'User not found'});
    }

    req.status(201).json({
        id: user.id,
        email: user.email,
        username: user.username
    });
}


module.export = {
    register, 
    login,
    getProfile
};
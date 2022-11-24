const User = require('../models/User');
const { validationResult } = require('express-validator')

const signIn = (req, res) => {
    res.status(200).json({message: "User login is correct"})
}

const signUp = async (req, res) => {
    const errores = validationResult(req);
    if(errores.isEmpty()){
        const {name, email, password, roles} = req.body
        const newUser = new User({
            name,
            email,
            password: await User.hashPassword(password) ,
            roles
        })
        const createdUser = await newUser.save();
        res.status(200).json({message: "Usuario creado correctamente", body: createdUser})
    } else {
        res.status(404).json({errors: errores.array()})
    }
}

module.exports = {
    signIn,
    signUp
}
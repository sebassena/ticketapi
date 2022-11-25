const {User, Role} = require('../models');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const signIn = async (req, res) => {
    try {
        const {email} = req.body
        const checkEmail = await User.findOne({email})
        if (!checkEmail) return res.status(400).json({message: "Error valide su email"})
        const checkPass = await User.comparePassword(req.body.password, checkEmail.password)
        if(!checkPass) return  res.status(400).json({ message: "Clave incorrecta" })
    
        const token = jwt.sign(
            {id: checkEmail._id},
            process.env.SECRETA,
            {
                expiresIn: 3600
            }
        )
        res.status(200).json({token})
    } catch (e) {
        res.status(400).json({message: "Ha ocurrido un error al ingresar", error: e})
    }
}

const signUp = async (req, res) => {
    const errores = validationResult(req);
    if (errores.isEmpty()) {
        const { name, email, password, roles } = req.body
        const checkEmail = await User.findOne({ email });
        const getDefaultUserRole = await Role.find({name: "Usuario"});
        if (checkEmail === null) {
            const newUser = new User({
                name,
                email,
                password: await User.hashPassword(password),
                roles: [getDefaultUserRole[0]._id]
            })
            const createdUser = await newUser.save();
            const token = jwt.sign(
                {id: createdUser._id},
                process.env.SECRETA,
                {
                    expiresIn: 3600
                }
            )

            res.status(200).json({token})
        } else {
            return res.status(400).json({ message: "El email ya esta registrado" })
        }
    } else {
        res.status(404).json({ errors: errores.array() })
    }
}

module.exports = {
    signIn,
    signUp
}
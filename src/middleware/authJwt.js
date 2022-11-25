const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config()


const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        // Check si no hay token
        if (!token) return res.status(503).json({ message: "No token provided" })
        // Decodificar con JWT
        const decoded = jwt.verify(token, process.env.SECRETA)
        req.userId = decoded.id;
        // Check si el usuario existe
        const checkUser = await User.findById(req.userId)
        if (!checkUser._id) return res.status(400).json({ message: "User not found" })
        next()
    } catch (e) {
        return res.status(400).json({ message: "Usuario con problemas de autorización"})
    }

}

const isAdmin = async (req, res, next) => {

}

const checkPermisos = async (req, res, next) => {

}

module.exports = {
    verifyToken,
    isAdmin,
    checkPermisos

}
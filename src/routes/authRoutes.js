const { Router } = require('express');
const authController = require('../controllers/authController');
const { check } = require('express-validator');

const router = Router();

router.post('/login', authController.signIn);
router.post('/register',[
        check("email", "Email invalido").isEmail(),
        check("password", "Debe tener mínimo 8 caracteres").isLength({
            min: 8,
            max: 64
        })
    ], 
authController.signUp);

module.exports = router;

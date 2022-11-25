const { Router } = require("express");
const categoryController = require('../controllers/categoryController');
const {authJwt} = require('../middleware')

const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isAdmin] ,categoryController.createCategory);
router.get('/', [authJwt.verifyToken, authJwt.isAdmin] ,categoryController.getCategory);
router.get('/:categoryId', [authJwt.verifyToken, authJwt.isAdmin] ,categoryController.getCategoryById);
router.put('/:categoryId', [authJwt.verifyToken, authJwt.isAdmin] ,categoryController.updateCategory);
router.delete('/:categoryId', [authJwt.verifyToken, authJwt.isAdmin] ,categoryController.deleteCategory)

module.exports = router;
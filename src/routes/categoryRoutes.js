const { Router } = require("express");
const categoryController = require('../controllers/categoryController');
const {authJwt} = require('../middleware')

const router = Router();

router.post('/', authJwt.verifyToken ,categoryController.createCategory);
router.get('/', authJwt.verifyToken ,categoryController.getCategory);
router.get('/:categoryId', authJwt.verifyToken ,categoryController.getCategoryById);
router.put('/:categoryId', authJwt.verifyToken ,categoryController.updateCategory);
router.delete('/:categoryId', authJwt.verifyToken ,categoryController.deleteCategory)

module.exports = router;
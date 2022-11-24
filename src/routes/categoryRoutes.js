const { Router } = require("express");
const categoryController = require('../controllers/categoryController');

const router = Router();

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategory);
router.get('/:categoryId', categoryController.getCategoryById);
router.put('/:categoryId', categoryController.updateCategory);
router.delete('/:categoryId', categoryController.deleteCategory)

module.exports = router;
const Category = require('../models/Category');

const createCategory = async (req, res) => {
    const {name} = req.body;
    const newCategory = new Category({name});
    const categorySaved = await newCategory.save()
    res.status(201).json(categorySaved)
}

const getCategory = async (req, res) => {
    const categories = await Category.find();
    res.status(201).json(categories)

}

const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId)
        res.status(201).json(category)
    } catch (e) {
        res.status(404).json({message: "No se ha encontrado la categoria"})
    }
}

const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.categoryId)
        res.status(200).json(deletedCategory);
    } catch (error) {
        res.json({message: "Error al eliminar"})
    }
}

const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.categoryId, req.body, {
            new: true
        });
        res.status(200).json(updatedCategory);
    } catch (e) {
        res.status(404).json({message: "Error al actualizar"})
    }
}

module.exports = {
    createCategory,
    getCategory,
    getCategoryById,
    deleteCategory,
    updateCategory
}
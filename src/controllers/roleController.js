const Role = require('../models/Role');

const createRole = async (req, res) => {
    try {
        const { roleName, permisos } = req.body;
        const newRole = new Role({
            roleName,
            permisos
        })
        const roleCreated = await newRole.save()
        res.status(200).json({ message: roleCreated })
    } catch (e) {
        res.status(404).json({ message: e })
    }
}
const getRole = async (req, res) => {
    try {
        const roles = await Role.find().populate('permisos.categories')
        res.status(200).json(roles)
    } catch (e) {
        res.status(404).json({ message: `No se pudo obtener ${e}` })
    }

}

const getRoleById = async (req, res) => {
    try {
        const role = await Role.findById(req.params.roleId).populate('permisos.categories');
        res.status(200).json(role)
    } catch (e) {
        res.status(404).json({ message: e })
    }


}

const updateRole = async (req, res) => {
    try {
        const roleUpdated = await Role.findByIdAndUpdate(req.params.roleId, req.body, {
            new: true
        })

        res.status(200).json(roleUpdated)
    } catch (e) {
        res.status(404).json({ message: e })
    }
}

const deleteRole = async (req, res) => {
    try {
        const deletedRole = await Role.findById(req.params.roleId)
        if (deletedRole === null) {
            const errorMsg = "No se encuentra el rol a eliminar";
            res.status(404).json({ message: errorMsg })
        } else {
            const deleteRole = await Role.findByIdAndDelete(req.params.roleId)
            res.status(200).json({ message: "Role eliminado", deleteRole })
        }
    } catch (error) {
        res.status(404).json({ message: error })
    }
    
}


module.exports = {
    createRole,
    getRole,
    getRoleById,
    updateRole,
    deleteRole
}
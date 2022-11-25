const {Category, Role, User, Ticket} = require('../models');
const defaultCategoryName = "Soporte General";
const defaultRoleName = `Agente de ${defaultCategoryName}`;
const defaultUserRole = "Usuario";
const adminUserName = "Administrador"


const createGeneralCategory = async () => {
    // Check si existe la categoria general 
    const checkGeneralCategory = await Category.find({name: defaultCategoryName})
    // si existe pasar el id, si no existe crearla y pasar el id
    if(checkGeneralCategory.length === 0){
        try{
            const newCategory = await new Category({
                name: defaultCategoryName
            })
            const createdCategory = await newCategory.save();
            console.log(`La categoria ${defaultCategoryName} se ha creado correctamente.`)
            return createdCategory._id;
        } catch (e) {
            console.log(`Error al crear la categoria por default: ${e}`)
        }
        
    } else {
        return checkGeneralCategory[0]._id;
    }
}

const createRoleForCategory = async () => {
    const idDefaultCategory = await Category.find({name: defaultCategoryName})
    const checkDefaultCategoryRole = await Role.find({roleName: defaultRoleName})
    if(checkDefaultCategoryRole.length === 0){
        try {
            const newRole = new Role({
                roleName: defaultRoleName,
                permisos: {
                    categories: [
                        {
                            category: idDefaultCategory._id,
                            edit: false,
                            reply: true
                        }

                    ],
                    isAdmin: false
                }

            })
            const savedRole = await newRole.save();
            console.log(`El rol ${savedRole.roleName} se ha creado correctamente.`)
            return savedRole._id;

        } catch (error) {
            console.log(`Hubo un error al crear el rol para la categoria por defecto: ${error}`)
        }
    } 
    return idDefaultCategory[0]._id;
}

const createRoleForUser = async () => {
    const checkDefaultUserRole = await Role.find({roleName: defaultUserRole})
    if(checkDefaultUserRole.length  === 0){
        const newRole = new Role({
            roleName: defaultUserRole,
            permisos: {
                isAdmin: false,
                categories: []
            }
        })
        const newRoleSaved = await newRole.save();
        console.log(`El rol ${newRoleSaved.roleName} ha sido creado`)
        return newRoleSaved._id;
    }
    return checkDefaultUserRole[0]._id;
    
}


const createAdminRole = async () => {
    const checkAdminRole = await Role.find({name: adminUserName});
    if(checkAdminRole.length === 0){
        const newRole = new Role({
            roleName: adminUserName,
            permisos: {
                isAdmin: true,
                categories: []
            }
        })
        const newRoleSaved = await newRole.save();
        console.log(`El rol ${newRoleSaved.roleName} ha sido creado.`)
        return newRoleSaved._id;
    } 
    return checkAdminRole[0]._id;
}

const createAdminUser = async () => {
    const checkAdminUser = await User.find({name: adminUserName});
    const getAdminRoleId = await createAdminRole()
    if(checkAdminUser.length === 0){
        const newUser = new User({
            name: adminUserName,
            email: "admin@mail.com",
            password: await User.hashPassword("Admin1234"),
            roles: [getAdminRoleId]
        })

        const adminUserSaved = await newUser.save();
        console.log(`Administrador creado id: ${adminUserSaved._id}`)
        return adminUserSaved._id;
    } 
    return checkAdminUser;
}


const createDemoTicket = async () => {

}


module.exports = {
    createGeneralCategory,
    createRoleForCategory,
    createRoleForUser,
    createAdminRole,
    createAdminUser,
    createDemoTicket
}
const { Router } = require('express');
const roleController = require('../controllers/roleController');
const {authJwt} = require('../middleware')
const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], roleController.createRole);
router.get('/', [authJwt.verifyToken, authJwt.isAdmin], roleController.getRole);
router.get('/:roleId', [authJwt.verifyToken, authJwt.isAdmin], roleController.getRoleById);
router.put('/:roleId', [authJwt.verifyToken, authJwt.isAdmin], roleController.updateRole);
router.delete('/:roleId', [authJwt.verifyToken, authJwt.isAdmin], roleController.deleteRole)


module.exports = router;
const { Router } = require('express');
const roleController = require('../controllers/roleController');
const router = Router();

router.post('/', roleController.createRole);
router.get('/', roleController.getRole);
router.get('/:roleId', roleController.getRoleById);
router.put('/:roleId', roleController.updateRole);
router.delete('/:roleId', roleController.deleteRole)


module.exports = router;
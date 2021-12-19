const express = require('express');
const controller = require('../Controllers/userController')
const router = express.Router();

router.post('/register', controller.addUser);
router.get('/all', controller.returnAllUsers);
router.get('/id',controller.getById);
router.put('/id', controller.changeUser);
router.delete('/id',controller.deleteUser);

module.exports = router;
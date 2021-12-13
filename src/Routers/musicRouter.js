const express = require('express');
const controller = require('../Controllers/musicController')
const router = express.Router();

router.post('/add', controller.addMusic); 
router.put('/id',controller.changeMusic);
router.get('/id', controller.getById);
router.delete('/id', controller.deleteMusic);
router.get('/allMusic', controller.returnAllMusic);

module.exports = router;
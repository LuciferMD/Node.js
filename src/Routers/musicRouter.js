const express = require('express');
const controller = require('../Controllers/musicController')
const router = express.Router();
const validate = require("../Middleware/validation_schema");
const musicSchema = require("../Middleware/musicSchema");

router.post('/add/:id', validate(musicSchema.addMusic), controller.addMusic); 
router.put('/:id',  validate(musicSchema.changeMusic)  ,controller.changeMusic);
router.get('/:id', controller.getById);
router.delete('/:id', controller.deleteMusic);
router.get('/all', controller.returnAllMusic);

module.exports = router;
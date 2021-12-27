const express = require('express');
const controller = require('../Controllers/genreController')
const router = express.Router();
const validate = require("../Middleware/validation_schema");
const genreSchem = require("../Middleware/genreSchema");

router.post('/add/:id',validate(genreSchem.addGenre) ,controller.addGenre);
router.get('/all', controller.returnAllGenres);
router.put('/:id', validate(genreSchem.changeGenre), controller.changeGenre);
router.delete('/:id',controller.deleteGenre);

module.exports = router;
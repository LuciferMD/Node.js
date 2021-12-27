const express = require('express');
const controller = require('../Controllers/genreController')
const router = express.Router();

router.post('/add', controller.addGenre);
router.get('/all', controller.returnAllGenres);
router.put('/:id', controller.changeGenre);
router.delete('/:id',controller.deleteGenre);

module.exports = router;
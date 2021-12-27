const express = require('express');
const controller = require('../Controllers/playlistController')
const router = express.Router();
const validate = require("../Middleware/validation_schema");
const playlistSchema = require("../Middleware/playlistSchema")

router.post('/add/:id', validate(playlistSchema.addPlaylist), controller.addPlaylist); 
router.put('/:id', validate(playlistSchema.changePlaylist), controller.changePlaylist);
router.get('/:id',controller.getById);
router.delete('/:id', controller.deletePlaylist);
router.get('/all', controller.returnAllPlaylist);

module.exports = router;
const express = require('express');
const controller = require('../Controllers/playlistController')
const router = express.Router();

router.post('/add', controller.addPlaylist); 
router.put('/id',controller.changePlaylist);
router.get('/id',controller.getById);
router.delete('/id', controller.deletePlaylist);
router.get('/allPlaylists', controller.returnAllPlaylist);

module.exports = router;
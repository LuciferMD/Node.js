const express = require('express');
const controller = require('../Controllers/likeController')
const router = express.Router();

router.post('/add', controller.addLike); 
router.delete('/id', controller.deleteLike);
router.get('/allLike', controller.returnAllLike);

module.exports = router;
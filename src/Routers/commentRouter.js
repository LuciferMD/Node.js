const express = require('express');
const controller = require('../Controllers/commentController')
const router = express.Router();

router.post('/add', controller.addComment);
router.get('/all', controller.returnAllComments);
router.get('/id',controller.getById);
router.put('/id', controller.changeComment);
router.delete('/id',controller.deleteComment);

module.exports = router;
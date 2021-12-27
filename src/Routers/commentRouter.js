const express = require('express');
const controller = require('../Controllers/commentController')
const router = express.Router();
const validate = require("../Middleware/validation_schema");
const commentSchem = require("../Middleware/commentSchem");

router.post('/add/:id', validate(commentSchem.addComment), controller.addComment);
router.get('/all', controller.returnAllComments);
router.get('/:id',controller.getById);
router.put('/:id', validate(commentSchem.changeComment), controller.changeComment);
router.delete('/:id',controller.deleteComment);

module.exports = router;
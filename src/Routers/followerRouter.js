const express = require('express');
const controller = require('../Controllers/followerController')
const router = express.Router();

router.post('/add', controller.addFollower);
router.get('/all', controller.returnAllFollowers);
router.delete('/id',controller.deleteFollower);

module.exports = router;
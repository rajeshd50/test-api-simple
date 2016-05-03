var express = require('express');
var router = express.Router();

var ctrlUsers = require('../controllers/users');

router.get('/users',ctrlUsers.userGet);
router.post('/users', ctrlUsers.userAddNew);

router.get('/user/:userid',ctrlUsers.userSingleGet);

module.exports = router;
var express = require('express');
var router = express.Router();

var ctrlUsers = require('../controllers/users');

router.get('/users',ctrlUsers.userGet);
router.post('/users', ctrlUsers.userAddNew);

router.get('/user/:userid',ctrlUsers.userSingleGet);
router.delete('/user/:userid',ctrlUsers.userSingleDelete);

module.exports = router;
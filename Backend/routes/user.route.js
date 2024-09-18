const express = require('express');
const { getUsers, createUser, loginUser, deleteUser, checkIfUserExist,  } = require('../Controllers/users.controllers');
const router = express.Router();


router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', loginUser);
router.delete('/:id', deleteUser);
router.post('/check', checkIfUserExist);


module.exports = router;
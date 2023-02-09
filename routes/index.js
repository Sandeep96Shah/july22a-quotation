// import express
const express = require('express');
// import the router
const router = express.Router();

// import the controller
const userController = require('../controllers/user');

// create the signup api
router.post('/signup', userController.signUp);

// create the signin api
router.post('/signin', userController.signIn);

//export the router
module.exports = router;
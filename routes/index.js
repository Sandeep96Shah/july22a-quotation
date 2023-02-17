// import express
const express = require('express');
// import the router
const router = express.Router();

//import the passport
const passport = require('passport')

// import the controller
const userController = require('../controllers/user');
const quotationController = require('../controllers/quotation');

// create the signup api
router.post('/signup', userController.signUp);

// create the signin api
router.post('/signin', userController.signIn);

// create quotation api - Private api
router.post('/create-quotation', 
    passport.authenticate('jwt', {session: false}),
    quotationController.createQuotation
);

//export the router
module.exports = router;
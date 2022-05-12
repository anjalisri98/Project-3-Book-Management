const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const middleware = require ('../middleware/auth')

//*****Api for creating user*****//
router.post("/user", userController.registerUser)

//*****Api for login user*****//
router.post("/login", userController.loginUser)

//*****Api for posting books*********//
router.post("/books", bookController.createBook)

//*****Api for getting books by query params*****//
router.get('/books', middleware.authentication, bookController.getBooks)

//*****Api for getting books by path params*******//
router.get('/books/:userId', middleware.authentication, bookController.getBooksById)



module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require("../controllers/userController")

//*****Api for creating user*****//
router.post("/user", controller.userData)

//*****Api for login user*****//
router.post("/login", controller.loginUser)



module.exports = router;
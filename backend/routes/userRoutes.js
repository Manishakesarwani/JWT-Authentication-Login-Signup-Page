const express = require("express");
const { signupUpser, loginUser } = require("../controllers/UserControllers");
const userRoutes = express.Router();

userRoutes.post("/signup", signupUpser);
userRoutes.post("/login", loginUser);

module.exports=userRoutes;

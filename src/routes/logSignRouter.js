const express = require("express");
const ejs = require("ejs");
const logRouter = express.Router();
const signRouter = express.Router();

const router = nav =>{
	logRouter.get('/', (req,res) => {
			res.render("login",{
			nav,
			title:"login",
			head:"Log In"
		})
	});
	signRouter.get('/', (req,res) => {
			res.render("signup",{
			nav,
			title:"signup",
			head:"Sign-Up"
		})
	});
	return {logRouter,signRouter};
}

module.exports = router;

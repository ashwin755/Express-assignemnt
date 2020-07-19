const express = require("express");
const ejs = require("ejs");
const path = require("path");
const nav = [
	{
		link:"/",
		name:"HOME"
	},
	{
		link:"/books",
		name:"BOOKS"
	},
	{
		link:"/authors",
		name:"AUTHORS"
	},
	{
		link:"/login",
		name:"LOGIN"
	},
	{
		link:"/signup",
		name:"SIGNUP"
	},
	{
		link:"/new",
		name:"ADD-BOOK"
	}
];
const authorRouter =  require("./src/routes/authorRouter.js")(nav);//for authors
const bookRouter =  require("./src/routes/bookRouter.js")(nav);//for books
const addBookRouter =  require("./src/routes/addBookRouter.js")(nav);//for books
//login and sign up are encoded in a single module
const logSignRouter = require("./src/routes/logSignRouter.js")(nav);
const logRouter =  logSignRouter.logRouter;//for login
const signRouter =  logSignRouter.signRouter;//for signup
const app = new express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'src','views'));
app.use(express.static("./public"));
app.use('/books',bookRouter);
app.use('/authors',authorRouter);
app.use('/login',logRouter);
app.use('/signup',signRouter);
app.use('/new',addBookRouter);

app.get("/", (req,res) => {
	res.render("index",{
		nav,
		title:"Librarian Home",
		head:"LibrariaN",

	});
});

app.get("/:x", (req,res) => {
	res.status(404).render('404');
});


const port = 5000;
app.listen(port);
console.log("Server running on port :"+port);



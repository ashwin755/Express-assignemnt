const express = require("express");
const FileReader = require('filereader')
const ejs = require("ejs");
const formidable = require("formidable")
const addBookRouter = express.Router();
const fields = [
		{
			type:"text",
			id:"name",
			label:"BOOK NAME",
			accept:""
		},
		{
			type:"text",
			id:"author",
			label:"AUTHOR NAME",
			accept:""
		},
		{
			type:"text",
			id:"genre",
			label:"GENRE",
			accept:""
		},
		{
			type:"file",
			id:"authorImg",
			label:"IMAGE OF AUTHOR",
			accept:"image/*"
		}
	]

const router = nav =>{
	addBookRouter.get("/",(req,res) =>{
		res.render("addBook",{
			nav,
			fields,
			title:"add book",
			head:"New Book"
		})
		

	})
	addBookRouter.post('/book', function(req, res) {
		new formidable.IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error', err)
      throw err
    }   
		res.render('book',{
		nav,
		title:"new book",
		head :`Book `,
		books : {
		title : fields.name,
		author : fields.author,
		genre : fields.genre,
		img : ``
		}
		});
	})
  
	});
	addBookRouter.get("/:x", (req,res) => {
	res.status(404).render('404');
	});

	return addBookRouter;

};
module.exports = router;

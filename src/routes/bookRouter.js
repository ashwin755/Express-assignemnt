const express = require("express");
const bookRouter = express.Router();

const books = [
	{
		title : "Fidil",
		author : "Muttath Varkey",
		genre : "Novel",
		img :"book1.jpg"
	},
	{
		title : "Neermathalm pootha kalam",
		author : "Kamala surya",
		genre : "Biography",
		img :"book2.jpg"
	},
	{
		title : "Aadu jeevitham",
		author : "Benyamin",
		genre : "Novel",
		img :"book3.jpg"
	},
	{
		title : "Ummachu",
		author : "Uroob",
		genre : "Novel",
		img :"book4.jpg"
	}
];
const router = nav => {
	bookRouter.get("/",(req,res) =>{
	res.render("books",{
		books,nav,
		title:"Books",
		head :"BookS"
	})
	});
	bookRouter.get("/:id",(req,res) =>{
		if (res.statusCode==500) {
			console.log("dsds")
		}

		const title = req.params.id;
		const id = title.slice(4,title.length)//I used book1, book2 etc as index
		res.render("book",{
		nav,
		title,
		head :`Book ${id}`,
		books : books[id-1]
	})

		
	});
	

	return bookRouter;
}


module.exports = router;
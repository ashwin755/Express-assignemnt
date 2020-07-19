const express = require("express");
const authorRouter = express.Router();

const authors = [
	{
		name: "Muttathu Varkey",
		books: ["Paadaatha Painkili,Oru Kudayum Kunjupengalum,Inapravukal"],
		description:"Muttathu Varkey (28 April 1913 – 28 May 1989) was an Indian novelist, short story writer, and poet of Malayalam. He was best known for a genre of sentiment-filled romantic fiction known as painkili (janapriya) novel in Malayalam literature.",
		img:"author1.jpg"
	},
	{
		name: "Madhavikutyy",
		books: ["Summer in Culcutta, Neypayasam, Ente kadha"],
		description:"Kamala Surayya (born Kamala; 31 March 1934 – 31 May 2009), popularly known by her one-time pen name Madhavikutty and married name Kamala Das, was an Indian English poet as well as a leading Malayalam author from Kerala, India.",
		img:"author2.jpg"
	},
	{
		name: "Banyamin",
		books: ["Aadujeevitham","Manja Veyil Maranangal","Jasmin Days"],
		description:`Benyamin (born Benny Daniel in 1971) is an Indian novelist and short story writer in Malayalam language from Nhettur, Kulanada, near Pandalam of the south Indian state of Kerala. He lived in the Kingdom of Bahrain from 1992 to 2013, before returning to Kerala.[1] His works appear regularly in Malayalam publications in Kerala.Goat Days (Aadujeevitham), his most famous novel, portrays the life of an Indian labourer in Saudi Arabia. It is used as a textbook at Kerala University, Calicut University, Bharathiar University, Pondicherry University and 10th standard for Kerala State syllabus.`,
		img:"author3.jpg"
	}
];
const router = nav => {
	
	authorRouter.get("/",(req,res) => {
		res.render("authors",{
		authors,
		nav,
		title:"Authors",
		head :"AuthorS"
		});
	});
	authorRouter.get("/:id", (req,res) =>{	
		
		const title = req.params.id;
		const id = title.slice(6,title.length)//I used author1, author2 etc as index
		res.render("author",{
		nav,
		title,
		head :`Author ${id}`,
		authors : authors[id-1]
	})

	} )
	return authorRouter;
}

module.exports = router;
const path = require('path');
const express = require('express');

var reader = require("xlsx");
const Identification_produit = require('../models/Identification_produit');
let Marche_mondial = require('../models/marche_mondial');
const Principaux_importateurs_afrique=require('../models/Principaux_importateurs_africains');
const Principaux_importateurs_mondiaux=require('../models/Principaux_importateurs_mondiaux');
const Principaux_exportateurs_mondiaux=require('../models/Principaux_exportateurs_mondiaux');
const Principaux_exportateurs_afrique=require('../models/Principaux_exportateurs_africains');
const Marche_africain = require('../models/Marche_africain');
const Exportation_Maroc = require('../models/Exportation_Maroc');
const Positionnement_du_Maroc = require('../models/Positionnement_du_Maroc');
const Potentiel_exportation_Continent = require('../models/Potentiel_exportation_Continent');
const Potentiel_exportation_Afrique = require('../models/Potentiel_exportation_Afrique');
const Potentiel_exportation_Monde = require('../models/Potentiel_exportation_monde');
const Liste_Produits = require('../models/Liste_Produit');
const File = require('../models/file');
const { Z_NEED_DICT } = require('zlib');

const Router = express.Router();

Router.get('/produit', async (req, res) => {

	const file = reader.readFile('./BDD PRODUIT.xlsx')
	let data = []
	const sheets = file.SheetNames
	for(let i = 0; i < sheets.length; i++)
	{
	   const temp = reader.utils.sheet_to_json(
			file.Sheets[file.SheetNames[i]])
		if(i==0)(
	   temp.forEach((res) => {
	console.log(res)
		Identification_produit.insertMany(res, function(error, docs) {console.log(error)});;
		  data.push(res)
	   })
		)
		else if(i==1)(
			temp.forEach((res) => {
		 console.log(res)
			 Marche_mondial.insertMany(res, function(error, docs) {console.log(error)});;
			   data.push(res)
			})
			 )
		else if(i==2)(
				temp.forEach((res) => {
			 console.log(res)

			 Principaux_importateurs_mondiaux.insertMany(res, function(error, docs) {console.log(error)});;
				   data.push(res)
				})
				 )
				 else if(i==3)(
					temp.forEach((res) => {
				 console.log(res)
				 Principaux_exportateurs_mondiaux.insertMany(res, function(error, docs) {console.log(error)});;
					   data.push(res)
					})
					 )
					 else if(i==4)(
						temp.forEach((res) => {
					 console.log(res)
					 Marche_africain.insertMany(res, function(error, docs) {console.log(error)});;
						   data.push(res)
						})
						 )
						 else if(i==5)(
							temp.forEach((res) => {
						 console.log(res)
						 Principaux_importateurs_afrique.insertMany(res, function(error, docs) {console.log(error)});;
							   data.push(res)
							})
							 )

							 else if(i==6)(
								temp.forEach((res) => {
							 console.log(res)
							 Principaux_exportateurs_afrique.insertMany(res, function(error, docs) {console.log(error)});;
								   data.push(res)
								})
								 )

								 else if(i==7)(
									temp.forEach((res) => {
								 console.log(res)
								 Exportation_Maroc.insertMany(res, function(error, docs) {console.log(error)});;
									   data.push(res)
									})
									 )
									 else if(i==8)(
										temp.forEach((res) => {
									 console.log(res)
									 Positionnement_du_Maroc.insertMany(res, function(error, docs) {console.log(error)});;
										   data.push(res)
										})
										 )

											 else if(i==9)(
												temp.forEach((res) => {
											 console.log(res)
											 Potentiel_exportation_Afrique.insertMany(res, function(error, docs) {console.log(error)});;
												   data.push(res)
												})
												 )
												 else if(i==10)(
													temp.forEach((res) => {
												 console.log(res)
												 Potentiel_exportation_Monde.insertMany(res, function(error, docs) {console.log(error)});;
													   data.push(res)
													})
													 )}




})









Router.get('/test1', async (req, res) => {

	const file = reader.readFile('./BDD PRODUIT_391721.xlsx')
	let data = []
	const sheets = file.SheetNames
	for(let i = 0; i < sheets.length; i++)
	{
	   const temp = reader.utils.sheet_to_json(
			file.Sheets[file.SheetNames[i]])
		if(i==0)(
	   temp.forEach((res) => {
	console.log(res)
		Identification_produit.insertMany(res, function(error, docs) {console.log(error)});;
		  data.push(res)
	   })
		)
		else if(i==1)(
			temp.forEach((res) => {
		 console.log(res)
			 Marche_mondial.insertMany(res, function(error, docs) {console.log(error)});;
			   data.push(res)
			})
			 )
		else if(i==2)(
				temp.forEach((res) => {
			 console.log(res)

			 Principaux_importateurs_mondiaux.insertMany(res, function(error, docs) {console.log(error)});;
				   data.push(res)
				})
				 )
				 else if(i==3)(
					temp.forEach((res) => {
				 console.log(res)
				 Principaux_exportateurs_mondiaux.insertMany(res, function(error, docs) {console.log(error)});;
					   data.push(res)
					})
					 )
					 else if(i==4)(
						temp.forEach((res) => {
					 console.log(res)
					 Marche_africain.insertMany(res, function(error, docs) {console.log(error)});;
						   data.push(res)
						})
						 )
						 else if(i==5)(
							temp.forEach((res) => {
						 console.log(res)
						 Principaux_importateurs_afrique.insertMany(res, function(error, docs) {console.log(error)});;
							   data.push(res)
							})
							 )

							 else if(i==6)(
								temp.forEach((res) => {
							 console.log(res)
							 Principaux_exportateurs_afrique.insertMany(res, function(error, docs) {console.log(error)});;
								   data.push(res)
								})
								 )

								 else if(i==7)(
									temp.forEach((res) => {
								 console.log(res)
								 Exportation_Maroc.insertMany(res, function(error, docs) {console.log(error)});;
									   data.push(res)
									})
									 )
									 else if(i==8)(
										temp.forEach((res) => {
									 console.log(res)
									 Positionnement_du_Maroc.insertMany(res, function(error, docs) {console.log(error)});;
										   data.push(res)
										})
										 )

											 else if(i==9)(
												temp.forEach((res) => {
											 console.log(res)
											 Potentiel_exportation_Afrique.insertMany(res, function(error, docs) {console.log(error)});;
												   data.push(res)
												})
												 )
												 else if(i==10)(
													temp.forEach((res) => {
												 console.log(res)
												 Potentiel_exportation_Monde.insertMany(res, function(error, docs) {console.log(error)});;
													   data.push(res)
													})
													 )}




})





































Router.post('/choosen_produit',async function (req, res)  {


	try {





	  const file = reader.readFile(req.body.file_path)
	  let data = []
	  const sheets = file.SheetNames
	  for(let i = 0; i < sheets.length; i++)
	  {
		 const temp = reader.utils.sheet_to_json(
			  file.Sheets[file.SheetNames[i]])
		  if(i==0)(
		 temp.forEach((res) => {
	  res.Produit=res.Produit.trimStart();
	  res.Produit=res.Produit.trimEnd();
		  Identification_produit.insertMany(res, function(error, docs) {console.log(error)});;
			data.push(res)
		 })
		  )
		  else if(i==1)(
			  temp.forEach((res) => {
				res.Produit=res.Produit.trimStart();
				res.Produit=res.Produit.trimEnd();
		   console.log(res)
			   Marche_mondial.insertMany(res, function(error, docs) {console.log(error)});;
				 data.push(res)
			  })
			   )
		  else if(i==2)(
				  temp.forEach((res) => {
					res.Produit=res.Produit.trimStart();
					res.Produit=res.Produit.trimEnd();
			   console.log(res)

			   Principaux_importateurs_mondiaux.insertMany(res, function(error, docs) {console.log(error)});;
					 data.push(res)
				  })
				   )
				   else if(i==3)(
					  temp.forEach((res) => {
						res.Produit=res.Produit.trimStart();
						res.Produit=res.Produit.trimEnd();
				   console.log(res)
				   Principaux_exportateurs_mondiaux.insertMany(res, function(error, docs) {console.log(error)});;
						 data.push(res)
					  })
					   )
					   else if(i==4)(
						  temp.forEach((res) => {
							res.Produit=res.Produit.trimStart();
							res.Produit=res.Produit.trimEnd();
					   console.log(res)
					   Marche_africain.insertMany(res, function(error, docs) {console.log(error)});;
							 data.push(res)
						  })
						   )
						   else if(i==5)(
							  temp.forEach((res) => {
								res.Produit=res.Produit.trimStart();
								res.Produit=res.Produit.trimEnd();
						   console.log(res)
						   Principaux_importateurs_afrique.insertMany(res, function(error, docs) {console.log(error)});;
								 data.push(res)
							  })
							   )

							   else if(i==6)(
								  temp.forEach((res) => {
									res.Produit=res.Produit.trimStart();
									res.Produit=res.Produit.trimEnd();
							   console.log(res)
							   Principaux_exportateurs_afrique.insertMany(res, function(error, docs) {console.log(error)});;
									 data.push(res)
								  })
								   )

								   else if(i==7)(
									  temp.forEach((res) => {
										res.Produit=res.Produit.trimStart();
										res.Produit=res.Produit.trimEnd();
								   console.log(res)
								   Exportation_Maroc.insertMany(res, function(error, docs) {console.log(error)});;
										 data.push(res)
									  })
									   )
									   else if(i==8)(
										  temp.forEach((res) => {
											res.Produit=res.Produit.trimStart();
											res.Produit=res.Produit.trimEnd();
									   console.log(res)
									   Positionnement_du_Maroc.insertMany(res, function(error, docs) {console.log(error)});;
											 data.push(res)
										  })
										   )

											   else if(i==9)(
												  temp.forEach((res) => {
													res.Produit=res.Produit.trimStart();
													res.Produit=res.Produit.trimEnd();
											   console.log(res)
											   Potentiel_exportation_Afrique.insertMany(res, function(error, docs) {console.log(error)});;
													 data.push(res)
												  })
												   )
												   else if(i==10)(
													  temp.forEach((res) => {
														res.Produit=res.Produit.trimStart();
														res.Produit=res.Produit.trimEnd();
												   console.log(res)
												   Potentiel_exportation_Monde.insertMany(res, function(error, docs) {console.log(error)});;
														 data.push(res)
													  })
													   )}


													   File.updateMany({Produit:req.body.Produit}, {
														choosen:false,

													}, function(err, affected, resp) {
													  console.log(req.body.id)

													})
													console.log(req.body.id)
													await File.updateOne({_id:req.body.id}, {

														choosen:true,

													}, function(err, affected, resp) {
													  console.log(req.body.id)

													})


	  //Pays.insertMany(JSON.parse(test), function(error, docs) {});

	  res.send('file choosen successfully.');

	} catch (error) {
	  res.status(400).send('Error while try Choosin file. Try again later.');
	}


  },
  (error, req, res, next) => {
	if (error) {
	  res.status(500).send(error.message);
	}
  }

);





















Router.get('/Liste_produits', async (req, res) => {

	const file = reader.readFile('./Liste produits.xlsx')
	let data = []
	const sheets = file.SheetNames

	   const temp = reader.utils.sheet_to_json(
			file.Sheets[file.SheetNames[0]])

	   temp.forEach((res) => {
	console.log(res)

	Liste_Produits.insertMany(res, function(error, docs) {console.log(error)});;

		  data.push(res)
	   })







})
























Router.get('/test', async (req, res) => {

	const file = reader.readFile('./BDD PRODUIT_391739.xlsx')
	let data = []
	const sheets = file.SheetNames
	for(let i = 0; i < sheets.length; i++)
	{
	   const temp = reader.utils.sheet_to_json(
			file.Sheets[file.SheetNames[i]])
		if(i==0)(
	   temp.forEach((res) => {
	console.log(res)
		Identification_produit.insertMany(res, function(error, docs) {console.log(error)});;
		  data.push(res)
	   })
		)
		else if(i==1)(
			temp.forEach((res) => {
		 console.log(res)
			 Marche_mondial.insertMany(res, function(error, docs) {console.log(error)});;
			   data.push(res)
			})
			 )
		else if(i==2)(
				temp.forEach((res) => {
			 console.log(res)

			 Principaux_importateurs_mondiaux.insertMany(res, function(error, docs) {console.log(error)});;
				   data.push(res)
				})
				 )
				 else if(i==3)(
					temp.forEach((res) => {
				 console.log(res)
				 Principaux_exportateurs_mondiaux.insertMany(res, function(error, docs) {console.log(error)});;
					   data.push(res)
					})
					 )
					 else if(i==4)(
						temp.forEach((res) => {
					 console.log(res)
					 Marche_africain.insertMany(res, function(error, docs) {console.log(error)});;
						   data.push(res)
						})
						 )
						 else if(i==5)(
							temp.forEach((res) => {
						 console.log(res)
						 Principaux_importateurs_afrique.insertMany(res, function(error, docs) {console.log(error)});;
							   data.push(res)
							})
							 )

							 else if(i==6)(
								temp.forEach((res) => {
							 console.log(res)
							 Principaux_exportateurs_afrique.insertMany(res, function(error, docs) {console.log(error)});;
								   data.push(res)
								})
								 )

								 else if(i==7)(
									temp.forEach((res) => {
								 console.log(res)
								 Exportation_Maroc.insertMany(res, function(error, docs) {console.log(error)});;
									   data.push(res)
									})
									 )
									 else if(i==8)(
										temp.forEach((res) => {
									 console.log(res)
									 Positionnement_du_Maroc.insertMany(res, function(error, docs) {console.log(error)});;
										   data.push(res)
										})
										 )

											 else if(i==9)(
												temp.forEach((res) => {
											 console.log(res)
											 Potentiel_exportation_Afrique.insertMany(res, function(error, docs) {console.log(error)});;
												   data.push(res)
												})
												 )
												 else if(i==10)(
													temp.forEach((res) => {
												 console.log(res)
												 Potentiel_exportation_Monde.insertMany(res, function(error, docs) {console.log(error)});;
													   data.push(res)
													})
													 )}




})

Router.delete('/delete_produit', async (req, res) => {

	try {
		console.log(req.body.Produit);

		var fs = require('fs');

		File.deleteOne({_id: req.body.id }, function (err) {
			if(err) console.log(err);
			console.log("Successful deletion");
		  });
fs.unlink(req.body.file_path, async function (err) {
    if (err) throw err;
    // if no error, file has been deleted successfully
	console.log(req.body.Produit )

	Identification_produit.deleteMany({Produit:req.body.Produit},function (err, _) {
		if (err) {
			return console.log(err);
		}
	});


	Marche_mondial.deleteMany({Produit:req.body.Produit}, function (err, _) {
		if (err) {
			return console.log(err);
		}
	});
	Principaux_importateurs_mondiaux.deleteMany({Produit:req.body.Produit}, function (err, _) {
		if (err) {
			return console.log(err);
		}
	});



	Principaux_exportateurs_mondiaux.deleteMany({Produit:req.body.Produit}, function (err, _) {
		if (err) {
			return console.log(err);
		}
	});



	Marche_africain.deleteMany({Produit:req.body.Produit}, function (err, _) {
		if (err) {
			return console.log(err);
		}
	});

	Principaux_importateurs_afrique.deleteMany({Produit:req.body.Produit}, function (err, _) {
		if (err) {
			return console.log(err);
		}
	});

	Principaux_exportateurs_afrique.deleteMany({Produit:req.body.Produit}, function (err, _) {
		if (err) {
			return console.log(err);
		}
	});

	Exportation_Maroc.deleteMany({Produit:req.body.Produit}, function (err, _) {
		if (err) {
			return console.log(err);
		}
	});

	Positionnement_du_Maroc.deleteMany({Produit:req.body.Produit}, function (err, _) {
		if (err) {
			return console.log(err);
		}
	});



	Potentiel_exportation_Afrique.deleteMany({Produit:req.body.Produit}, function (err, _) {
		if (err) {
			return console.log(err);
		}
	});


	Potentiel_exportation_Monde.deleteMany({Produit:req.body.Produit}, function (err, _) {
		if (err) {
			return console.log(err);
		}
	});
































});

		console.log("success")
	} catch (error) {
	  res.status(400).send('Error while downloading file. Try again later.');
	}
  });




module.exports = Router;
const path = require('path');
const express = require('express');

var reader = require("xlsx");
const Identification_produit = require('../models/Identification_produit');
let Marche_mondial = require('../models/marche_mondial');
const Principaux_importateurs_afrique=require('../models/Principaux_importateurs_afrique');
const Principaux_importateurs_mondiaux=require('../models/Principaux_importateurs_mondiaux');
const Principaux_exportateurs_mondiaux=require('../models/Principaux_exportateurs_mondiaux');
const Principaux_exportateurs_afrique=require('../models/Principaux_exportateurs_Afrique');
const Marche_africain = require('../models/Marche_africain');
const Exportation_Maroc = require('../models/Exportation_Maroc');
const Positionnement_du_Maroc = require('../models/Positionnement_du_Maroc');
const Potentiel_exportation_Continent = require('../models/Potentiel_exportation_Continent');
const Potentiel_exportation_Afrique = require('../models/Potentiel_exportation_Afrique');
const Potentiel_exportation_Monde = require('../models/Potentiel_exportation_Monde');
identificationRoute=require("../Controllers/IdentificationController")

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
										 Potentiel_exportation_Continent.insertMany(res, function(error, docs) {console.log(error)});;
											   data.push(res)
											})
											 )
											 else if(i==10)(
												temp.forEach((res) => {
											 console.log(res)
											 Potentiel_exportation_Afrique.insertMany(res, function(error, docs) {console.log(error)});;
												   data.push(res)
												})
												 )
												 else if(i==11)(
													temp.forEach((res) => {
												 console.log(res)
												 Potentiel_exportation_Monde.insertMany(res, function(error, docs) {console.log(error)});;
													   data.push(res)
													})
													 )}




})
Router.get('/produit/marche',identificationRoute.identificationController)




module.exports = Router;
var express = require('express')
const mongoose =require('mongoose');
var reader = require("xlsx");
const MarcheSchema=require('./GraphQL/Marcheschema');
const {graphqlHTTP} = require('express-graphql')
var cors = require('cors');
var app = express()
const Identification_produit = require('./models/Identification_produit');
const Marche_mondial = require('./models/marche_mondial');
const Principaux_importateurs_afrique=require('./models/Principaux_importateurs_afrique');
const Principaux_importateurs_mondiaux=require('./models/Principaux_importateurs_mondiaux');
const Principaux_exportateurs_mondiaux=require('./models/Principaux_exportateurs_mondiaux');
const Principaux_exportateurs_afrique=require('./models/Principaux_exportateurs_Afrique');
const Marche_africain = require('./models/Marche_africain');
const Exportation_Maroc = require('./models/Exportation_Maroc');
const Positionnement_du_Maroc = require('./models/Positionnement_du_Maroc');
const Potentiel_exportation_Continent = require('./models/Potentiel_exportation_Continent');
const Potentiel_exportation_Afrique = require('./models/Potentiel_exportation_Afrique');
const Potentiel_exportation_Monde = require('./models/Potentiel_exportation_Monde');






app.use(cors())



app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});

// configuration
app.use(express.static(__dirname + '/public'));
app.use('/public/uploads',express.static(__dirname + '/public/uploads'));


mongoose.connect('mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

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
												 )








}

let test = JSON.stringify(data, null, 2);
const fs = require('fs');
fs.writeFile('output.json', test, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});



app.use('/graphql', graphqlHTTP({
	graphiql:true,
	schema:MarcheSchema
	}))

  app.listen(3400)




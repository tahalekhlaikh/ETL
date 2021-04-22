'use strict';
var express = require('express')
const mongoose =require('mongoose');
var reader = require("xlsx");
var xlstojson = require("xls-to-json");
const bodyParser=require('body-parser')
const {graphqlHTTP} = require('express-graphql')
var cors = require('cors');
var app = express()
let MongoClient=require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";
const excelToJson = require('convert-excel-to-json');
var { buildSchema } = require('graphql');
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

const file = reader.readFile('./BDD-Pays V2.xlsx')
let data = []
const sheets = file.SheetNames
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}

let test = JSON.stringify(data, null, 2);

const fs = require('fs');
fs.writeFile('output.json', test, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});


const dataPath = './output.json';


app.get('/pays', (req, res) => {
	fs.readFile(dataPath, 'utf8', (err, data) => {
	if (err) {
			throw err;
		}

	res.send(JSON.parse(data));
	});
})

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
const PaysSchema = new mongoose.Schema({
	Continent:String,
	Population:String,
	Superficie:String,
	Pays_partenaires_Trade_Map:String,
	Capitale:String,
	IDH:String,
	Monnaie:String,
	Regime_politique:String,
	Langue_officielle:String,
	Langue_du_Business:String,
	PIB_2009_USD:String,
	PIB_2011_USD:String,
	PIB_2012_USD:String,
	PIB_2013_USD:String,
	PIB_2015_USD:String,
	PIB_2017_USD:String,
	PIB_2019_USD:String,
	Croissance_du_PIB:String,
	PIB_par_habitant:String,

	PIB:String,
	Flux_entrants:String,
	Flux_sortants:String,
	Score_doing_Business:String,
	Importations_2019:String,
	Exportations_2019:String,
	Balance_commerciale:String,


	Taux_de_penetration_des_importations:String,
	Taux_douverture:String,


	Nature_daccord:String,
	Date_de_signature:String,
	Entree_en_vigueur:String,
	Champ_dapplication:String,
	Duree:String,
	Documents_necessaires_importation:String,
	Documents_necessaires_exportation:String,
	Indice_de_connectivite:String,
	Classement_indice:String,
	Classement_qualite:String,
	Connectivite_des_transports_maritimes_reguliers:String,
	Classement_connectivite:String,
	Qualite_infrastructure_commerciale_et_des_transports:String,
	Competence_qualite_services_logistiques:String,
	Classement_competence:String,
	Efficacite_processus_douanement:String,
	Classement_efficacite:String,
	Performance_globale:String,
	Classement_performance:String,
	Distance_culturelle:String,
	Distance_politique:String,
	Distance_reglementaire:String,
	Distance_geographique:String,
	Distance_economique:String,
	Distance_administrative:String,
	Accord:String,

	Exportations_Maroc_2012:String,
	Exportations_Maroc_2013:String,
	Exportations_Maroc_2014:String,
	Exportations_Maroc_2015:String,
	Exportations_Maroc_2016:String,
	Exportations_Maroc_2017:String,
	Exportations_Maroc_2018:String,
	Exportations_Maroc_2019:String,
	TCAM_2012_2019_des_exportations_marocaines:String,
	Importations_Maroc_2012:String,
	Importations_Maroc_2013:String,
	Importations_Maroc_2014:String,
	Importations_Maroc_2015:String,
	Importations_Maroc_2016:String,
	Importations_Maroc_2017:String,
	Importations_Maroc_2018:String,
	Importations_Maroc_2019:String,
	TCAM_2012_2019_des_importations_marocaines:String,









  });
  const Pays = mongoose.model('Pays',  PaysSchema);
 Pays.insertMany(JSON.parse(test), function(error, docs) {});


Pays.findOne({ Capitale: 'Rabat' }, function (err, adventure) {console.log(adventure)});


const{
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
	GraphQLID
} = require('graphql')


const CountryType =new GraphQLObjectType({
    name:'country',
    fields:()=>({
		id:{type:GraphQLID},






		Continent:{type:GraphQLNonNull(GraphQLString)},
		Population:{type:(GraphQLString)},
		Superficie:{type:GraphQLNonNull(GraphQLString)},
		Pays_partenaires_Trade_Map:{type:GraphQLNonNull(GraphQLString)},
		Capitale:{type:(GraphQLString)},
		IDH:{type:GraphQLNonNull(GraphQLString)},
		Monnaie:{type:GraphQLNonNull(GraphQLString)},
		Regime_politique:{type:GraphQLNonNull(GraphQLString)},
		Langue_officielle:{type:GraphQLNonNull(GraphQLString)},
		Langue_du_Business:{type:GraphQLNonNull(GraphQLString)},
        PIB_2009_USD:{type:(GraphQLString)},
		PIB_2011_USD:{type:(GraphQLString)},
		PIB_2012_USD:{type:(GraphQLString)},
		PIB_2013_USD:{type:(GraphQLString)},
		PIB_2015_USD:{type:(GraphQLString)},
		PIB_2017_USD:{type:(GraphQLString)},
		PIB_2019_USD:{type:(GraphQLString)},
		Croissance_du_PIB:{type:(GraphQLString)},
		PIB_par_habitant:{type:(GraphQLString)},
        PIB:{type:(GraphQLString)},
		Flux_entrants:{type:(GraphQLString)},
		Flux_sortants:{type:(GraphQLString)},
		Score_doing_Business:{type:(GraphQLString)},
		Importations_2019:{type:(GraphQLString)},
		Exportations_2019:{type:(GraphQLString)},
		Balance_commerciale:{type:(GraphQLString)},
       Accord:{type:(GraphQLString)},

		Taux_de_penetration_des_importations:{type:(GraphQLString)},
		Taux_douverture:{type:(GraphQLString)},


		Nature_daccord:{type:(GraphQLString)},
		Date_de_signature:{type:(GraphQLString)},
		Entree_en_vigueur:{type:(GraphQLString)},
		Champ_dapplication:{type:(GraphQLString)},
		Duree:{type:(GraphQLString)},
		Documents_necessaires_importation:{type:(GraphQLString)},
		Documents_necessaires_exportation:{type:(GraphQLString)},
		Indice_de_connectivite:{type:(GraphQLString)},
		Classement_indice:{type:(GraphQLString)},
		Classement_qualite:{type:(GraphQLString)},
		Connectivite_des_transports_maritimes_reguliers:{type:(GraphQLString)},
		Classement_connectivite:{type:(GraphQLString)},
		Qualite_infrastructure_commerciale_et_des_transports:{type:(GraphQLString)},
		Competence_qualite_services_logistiques:{type:(GraphQLString)},
		Classement_competence:{type:(GraphQLString)},
		Efficacite_processus_douanement:{type:(GraphQLString)},
		Classement_efficacite:{type:(GraphQLString)},
		Performance_globale:{type:(GraphQLString)},
		Classement_performance:{type:(GraphQLString)},
		Distance_culturelle:{type:(GraphQLString)},
		Distance_administrative:{type:(GraphQLString)},
		Distance_politique:{type:(GraphQLString)},
		Distance_reglementaire:{type:(GraphQLString)},
		Distance_geographique:{type:(GraphQLString)},
		Distance_economique:{type:(GraphQLString)},
		Exportations_Maroc_2012:{type:(GraphQLString)},
		Exportations_Maroc_2013:{type:(GraphQLString)},
		Exportations_Maroc_2014:{type:(GraphQLString)},
		Exportations_Maroc_2015:{type:(GraphQLString)},
		Exportations_Maroc_2016:{type:(GraphQLString)},
		Exportations_Maroc_2017:{type:(GraphQLString)},
		Exportations_Maroc_2018:{type:(GraphQLString)},
		Exportations_Maroc_2019:{type:(GraphQLString)},
		TCAM_2012_2019_des_exportations_marocaines:{type:(GraphQLString)},
		Importations_Maroc_2012:{type:(GraphQLString)},
		Importations_Maroc_2013:{type:(GraphQLString)},
		Importations_Maroc_2014:{type:(GraphQLString)},
		Importations_Maroc_2015:{type:(GraphQLString)},
		Importations_Maroc_2016:{type:(GraphQLString)},
		Importations_Maroc_2017:{type:(GraphQLString)},
		Importations_Maroc_2018:{type:(GraphQLString)},
		Importations_Maroc_2019:{type:(GraphQLString)},
		TCAM_2012_2019_des_importations_marocaines:{type:(GraphQLString)},

    })
})

const RootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'Root Query',
	fields: () => ({
	  countrySingle: {
		type: CountryType,
		description: 'A Single Country',
		args: {

			Pays_partenaires_Trade_Map:{ type: GraphQLString},

		},
		resolve: (parent, args,context,info) =>{return Pays.findOne({Pays_partenaires_Trade_Map:args.Pays_partenaires_Trade_Map})}
	  },
	  countryData: {
		type: new GraphQLList(CountryType),
		description: 'List of All Countries',
		resolve: () => countryData
	  },

	})
  })

  const schema =new GraphQLSchema({
    query:RootQueryType
})

  app.use('/graphql', graphqlHTTP({
	graphiql:true,
	schema:schema
}))






  app.listen(3400)

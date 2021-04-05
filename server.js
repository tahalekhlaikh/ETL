var express = require('express')
const mongoose =require('mongoose');
var reader = require("xlsx");
var xlstojson = require("xls-to-json");
const {graphqlHTTP} = require('express-graphql')
var cors = require('cors');
var app = express()

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
{/*
const file = reader.readFile('./BDD-Pays.xlsx')
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
});
*/}

const countryData =require('./output.json')
//const countryData =JSON.parse(test)
const{
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql')
const CountryType =new GraphQLObjectType({
    name:'country',
    fields:()=>({

        Continent:{type:GraphQLNonNull(GraphQLString)},
		Superficie:{type:GraphQLNonNull(GraphQLString)},
		Pays_partenaires_Trade_Map:{type:GraphQLNonNull(GraphQLString)},
		Capitale:{type:GraphQLNonNull(GraphQLString)},
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

        PIB:{type:(GraphQLString)},
		Flux_entrants:{type:(GraphQLString)},
		Flux_sortants:{type:(GraphQLString)},
		Score_doing_Business:{type:(GraphQLString)},
		Importations_2019:{type:(GraphQLString)},
		Exportations_2019:{type:(GraphQLString)},
		Balance_commerciale:{type:(GraphQLString)},


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
		Distance_politique:{type:(GraphQLString)},
		Distance_reglementaire:{type:(GraphQLString)},
		Distance_geographique:{type:(GraphQLString)},
		Distance_economique:{type:(GraphQLString)},













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
		resolve: (parent, args) => countryData.find(book => book.Pays_partenaires_Trade_Map === args.Pays_partenaires_Trade_Map)
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

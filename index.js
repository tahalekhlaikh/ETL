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
{/*mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
const kittySchema = new mongoose.Schema({
	name: String
  });
  const Kitten = mongoose.model('Kitten', kittySchema);
  const silence = new Kitten({ name: 'Pays' });
console.log(silence.name); // 'Silence'*/}


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

{/*const file = reader.readFile('./BDD-Pays.xlsx')
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

{/*const fs = require('fs');
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
})*/}

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
const PaysSchema = new mongoose.Schema({
	Pays_partenaires_Trade_Map:String,Continent:String,Region:String,Capitale:String,Superficie:String,Langue_officielle:String,Langue_du_Business:String,IDH:String,Monnaie:String,Conversion_USD:String,Regime_politique:String,PIB_2009_USD:String,
  });
  const Pays = mongoose.model('Pays',  PaysSchema);
 {/*Pays.insertMany(JSON.parse(test), function(error, docs) {});*/}

Pays.findOne({ Capitale: 'Berlin' }, function (err, adventure) {console.log(adventure)});


app.use('/graphql', graphqlHTTP({
	graphiql:true,

	schema:buildSchema(`
	type RootQuery{
		pays:[String!]!
	}
		schema{
			query:RootQuery
		}`
	),
	rootValue:{
		pays:()=>{
			return Pays.find()

		}
	}
}))










  app.listen(3402)

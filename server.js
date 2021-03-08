var express = require('express')
var app = express()
var reader = require("xlsx");
var xlstojson = require("xls-to-json");


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

app.get('/', function (req, res) {
  res.send('Hello World')
})
const file = reader.readFile('./BDD-Pays-V0.xlsx')
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
  
// Printing data 
console.log(data)

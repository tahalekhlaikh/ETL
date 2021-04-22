const express = require('express');
const path = require('path');

const {graphqlHTTP} = require('express-graphql')
const app = express();
const schema=require('./GraphQL/schema');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// For Express version less than 4.16.0
// ------------------------------------
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const cors = require('cors');
app.use(cors());




const fileRoute = require('./routes/file');
require('./db/db');




app.use(express.static(path.join(__dirname, '..', 'build')));





app.use(fileRoute);
app.use('/graphql', graphqlHTTP({
	graphiql:true,
	schema:schema
}))


app.listen(3400, () => {
  console.log('server started on port 3400');
});
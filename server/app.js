require('dotenv').config();
const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/',(req,res)=>{
  res.send('status ok');
});

require('./routes/index.js')(app);
require('./routes/products.js')(app);



app.listen(`${stage.port}`, () => {
console.log(`Server now listening at localhost:${stage.port}`);
});

module.exports = app;
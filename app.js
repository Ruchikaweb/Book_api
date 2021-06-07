const express = require('express');
const app = express();
const port = process.env.PORT || 9900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');

var mongourl = "mongodb+srv://ruchika:ruchika123@websites.djtcx.mongodb.net/Secondhsndbook?retryWrites=true&w=majority";

let db;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//health Check
app.get('/',(req,res) => {
    res.send("Health Ok");
});

//connection with mongo serer
MongoClient.connect(mongourl,(err,connection) => {
    if(err) console.log(err);
    db = connection.db('Secondhsndbook');
  
    app.listen(port,(err) => {
      if(err) throw err;
      console.log(`Server is running on port ${port}`)
    })
  })
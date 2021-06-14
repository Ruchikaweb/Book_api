const express = require('express');
const app = express();
const port = process.env.PORT || 9900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
var mongourl="mongodb+srv://ruchikaa:ruchika123@websites.djtcx.mongodb.net/Secondhsndbook?retryWrites=true&w=majority"

let db;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//health Check
app.get('/',(req,res) => {
    res.send("Health Ok");
});


//get Books api for All books//
app.get('/all_books',(req,res) => {
  db.collection('Books').find({}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//get Books api for availablebooks//
app.get('/available_books',(req,res) => {
  db.collection('Books').find({isActive:true}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//get Books api for out of stackbooks//
app.get('/out_of_stock_books',(req,res) => {
  db.collection('Books').find({isActive:false}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//post Bookss //
app.post('/post_books',(req,res)=>{
  db.collection('Books').insert(req.body,(err,result) => {
    if(err) throw err;
    res.send('data added');
  })
});

//get User request api//
app.get('/request',(req,res) => {
  db.collection('userrequest').find({}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//post User request api//
app.post('/post_request',(req,res)=>{
  db.collection('userrequest').insert(req.body,(err,result) => {
    if(err) throw err;
    res.send('data added');
  })
});


//get Donate book request api//
app.get('/donate_book_request',(req,res) => {
  db.collection('Donatereq').find({}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//post Donate book request api//
app.post('/post_donate_bk_request',(req,res)=>{
  db.collection('Donatereq').insert(req.body,(err,result) => {
    if(err) throw err;
    res.send('data added');
  })
});


//get Subscriber api for All books//
app.get('/all_subscriber',(req,res) => {
  db.collection('Subscribers').find({}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//get Subscribers api for availableSubscriber//
app.get('/available_subscriber',(req,res) => {
  db.collection('Subscribers').find({isActive:true}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//get Subscribers api for out of stackSubscribers//
app.get('/out_of_stock_subscriber',(req,res) => {
  db.collection('Subscribers').find({isActive:false}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//post Subscribers //
app.post('/post_subscriber',(req,res)=>{
  db.collection('Subscribers').insert(req.body,(err,result) => {
    if(err) throw err;
    res.send('data added');
  })
});


//get Books_order//
app.get('/books_order',(req,res) => {
  db.collection('Bookorder').find({}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//post  Book_order api//
app.post('/post_book_order',(req,res)=>{
  db.collection('Bookorder').insert(req.body,(err,result) => {
    if(err) throw err;
    res.send('data added');
  })
});


//get card_details//
app.get('/add_to_card',(req,res) => {
  db.collection('Carddetails').find({}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//post card_details api//
app.post('/post_add_to_card',(req,res)=>{
  db.collection('Carddetails').insert(req.body,(err,result) => {
    if(err) throw err;
    res.send('data added');
  })
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

  
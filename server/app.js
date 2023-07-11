// const express = require('express')
// const { connectToDb, getDb } = require('./db')
// const mongoose = require('mongoose');


// //init app and middleware

// const app = express()
// app.use(express.json());

// //db connection
// // let db
// // connectToDb((err) => {
// //   console.log(err)
// //   if(!err) {
// //     app.listen(3001, () => {
// //       console.log('app listening on port 3001')
// //     })

// //     db = getDb()
// //   }
// // })

// const port = 3001;


// const connection = mongoose.connect("mongodb://localhost:27017", {
//   useNewUrlParser: true, useUnifiedTopology: true
// });
// if (connection) {


//   console.log("database connected" );
// }
// else {
//   console.log("database connection error");
// }
// app.get("/", function (req, res) {
//   res.end("hello world");
// })

// app.listen(port,function(){
//   console.log("server is " + port);
// });

// app.get("/", function (req, res) {
//   return res.send({ error: true, message: "hello" });
// });

// //routes

// app.get('/users', (res, req) => {
//   let user = []

//   console.log('test', db)
//   db.collection('users').find()
//     .then(() => {
//       res.status(200).json(user)
//     })
//     .catch(() => {
//       res.status(500).json({ error: 'Could not fetch the documents' })
//     })
// })

const { MongoClient } = require('mongodb')
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const config = require('./database');
const connection = mongoose.connect(config.database, {
  useNewUrlParser: true, useUnifiedTopology: true
});

MongoClient mongoClient = new MongoClient();
MongoDatabase database = mongoClient.getDatabase("test");
if (connection) {
  console.log("database connected");
}
else {
  console.log("database connection error");
}
app.get("/", function (req, res) {
  res.end("hello world");
})


app.get('/users', (res, req) => {
  let user = []

  const collection = connection.collection("users");

  console.log('test', collection)

  // connection.collection('users').find()
  //   .then(() => {
  //     res.status(200).json(user)
  //   })
  //   .catch(() => {
  //     res.status(500).json({ error: 'Could not fetch the documents' })
  //   })
})


app.listen(port, function () {
  console.log("server is " + port);
});

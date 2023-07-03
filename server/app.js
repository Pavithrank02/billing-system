const express = require('express')
const { connectToDb, getDb} = require('./db')

//init app and middleware

const app = express()

//db connection
let db
connectToDb((err) => {
  if(!err) {
    app.listen(3000, () => {
      console.log('app listening on port 3000')
    })
    db = getDb()
  }
})




//routes

app.get('/reciept', (res, req) => {

  db.collection('reciept').find().then(() => {
    res.status(200).json().catch(()=> {
      res.status(500).json({error: "oo"})
    })
  })
  res.json({
    name: "your_Name",
    email: "your_Email",
    password: "hexed",
});
})
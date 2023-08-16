const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// MongoDB Connection
const uri = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();
console.log("db connected")
const db = client.db('formdb');

app.post('/login', async(req, res) => {
  try {
    const userEmail = req.body.email
    const password = req.body.email
    const collection = db.collection('userForm');
    const existingUser = await collection.findOne({ email: userEmail, password: password });
    const existingPassword = await collection.findOne({ password: password });
    if (existingUser === userEmail && existingPassword === password) {
      res.status(200).json("Login Successful");
    } else {
      
      res.status(500).json("Login Failed");
    
    }

    
  } catch (error) {
    console.error('Error submitting form data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

})

app.post('/api/submit', async(req, res) => {
  try {
    const userIdentifier = req.body.email
    const collection = db.collection('userForm');
    const existingUser = await collection.findOne({ email: userIdentifier });
    if (existingUser) {
      res.status(500).json(`User '${userIdentifier}' already exists`);
    } else {
      const result = collection.insertOne(req.body);

    if (result) {
      res.status(201).json({ message: 'Form data submitted successfully', result });
    } else {
      res.status(500).json({ message: 'Form data submission failed', Error });
    }
    }

    
  } catch (error) {
    console.error('Error submitting form data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/api/tasks', async(req, res) => {
  // console.log(res)
  try {

    const collectionName = 'userForm'; // Replace with your collection name

    const collection = db.collection(collectionName);

    // Find all documents in the collection

    const documents = await collection.find({}).toArray()
    if(documents!==0){

      res.status(201).json({ message: 'Documents in the collection:', documents })
    }
  } catch (error) {
    console.error('Error retrieving documents:', error);
  } 

}
);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


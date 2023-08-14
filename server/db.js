const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// MongoDB Connection
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/api/submit', async (req, res) => {
  try {
    await client.connect();
    console.log("db connected")
    const db = client.db('formdb');
    const collection = db.collection('formdata');
    const result = await collection.insertOne(req.body);

    if (result.insertedCount === 1) {
      res.status(201).json({ message: 'Form data submitted successfully' });
    } else {
      res.status(500).json({ message: 'Form data submission failed' });
    }
  } catch (error) {
    console.error('Error submitting form data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


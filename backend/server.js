const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
const port = 3000;

const uri = "mongodb+srv://user:password1234@cluster0.9p5fsv0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    app.get('/people', async (req, res) => {
      const collection = client.db('347-projectV2User').collection('People');
      const people = await collection.find({}).toArray();
      res.json(people);
    });

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });

  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  } finally {
    // Do not close the client here, it will be used by the Express routes
  }
}

run().catch(console.dir);
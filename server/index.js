const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000
dotenv.config()

app.use(cors())
app.use(express.json())

const uri = process.env.MY

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    try {
    await client.connect();

    const db = client.db("umayer")
    const userCollection = db.collection("users")
    const bookingData = db.collection("booking")

    app.get('/destination',async (req,res) => {
        const result = await userCollection.find().toArray()
        res.send(result)
    })

    app.get('/booking',async (req,res) => {
        const result = await bookingData.find().toArray()
        res.send(result)
    })

    app.get('/booking/:id',async (req,res) => {
        const {id} = req.params
        const query = {
            _id: new ObjectId(id)
        }
        const result = await bookingData.findOne(query)
        res.send(result)
    })

    app.get('/destination/:id', async (req,res) => {
        const id = req.params.id
        const query = {
            _id: new ObjectId(id)
        }
        const result = await userCollection.findOne(query)
        res.json(result)
    })

    app.post('/destination', async (req,res) => {
        const newUser = req.body
        const result = await userCollection.insertOne(newUser)
        res.send(result)
    })

    app.post('/booking', async (req,res) => {
        const b = req.body
        const result = await bookingData.insertOne(b)
        res.send(result)
    })

    app.put('/destination/:id', async (req,res) => {
        const id = req.params.id
        const filter = {
            _id: new ObjectId(id)
        }
        const m = req.body
        const updateDocument = {
            $set: m
        }
        const result = await userCollection.updateOne(filter,updateDocument)
        console.log(result)
        res.send(result)
    })

    app.delete('/destination/:id', async (req,res) => {
        const id = req.params.id
        const query = {
            _id: new ObjectId(id)
        }
        const result = await userCollection.deleteOne(query)
        res.send(result)
    })

    app.delete('/booking/:id', async (req,res) => {
        const id = req.params.id
        const query = {
            _id: new ObjectId(id)
        }
        const result = await bookingData.deleteOne(query)
        res.send(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World Umayer')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

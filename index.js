const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();


const uri = "mongodb+srv://DB_USER:DB_PASSWORD@cluster0.klpdq3q.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const collection = client.db("usedProductResale").collection("watches");
    }
    finally{

    }
}
run().catch(error => console.log(error))


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Product Resale Server Running');
})

app.listen(port, ()=>{
    console.log(`Product Resale server running on port ${port}`);
})
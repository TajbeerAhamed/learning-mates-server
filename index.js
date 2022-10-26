const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json')

const details = require('./data/Details.json')



app.get("/", (req, res) => {
  res.send("Web api running");
});

app.get('/categories', (req,res) =>{
    res.send(categories)
})

app.get('/details', (req ,res) =>{
  res.send(details)
})

app.listen(port, () =>{
    console.log('Server running',port)
})
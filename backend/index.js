const express = require('express')
const app = express()
const mongoose = require('mongoose');
const movies = require('./models/Movie')
mongoose.connect('mongodb://localhost:27017/seeds', {useNewUrlParser: true, useUnifiedTopology: true});
const seeds = require('./bin/seeds')

app.get('/seeds', (req, res)=>{
    res.json({ seeds })
})





app.listen(process.env.PORT || 5000)
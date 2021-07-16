//const movies = require ('./bin/seeds');
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true, useUnifiedTopology: true});
const express = require('express')
const app = express()
const Movie = require("./models/Movie")
const router = express.Router()
const cors = require("cors");
app.use(cors());

app.get('/listOfMovies', (req, res) => {
    Movie.find().then((movies) => {
        res.json(movies)
    })
})

app.get('/movieDetails/:dynamicId', (req, res) => {
    console.log(req.params);
    Movie.findOne({_id: req.params.dynamicId}).then((movies) => {
        res.json(movies);
    })
})

app.listen(5000)
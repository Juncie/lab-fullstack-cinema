//const movies = require ('./bin/seeds');
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://mahim:mahim@cluster0.r3bte.mongodb.net/mymovies?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const express = require("express");
const app = express();
const Movie = require("./models/Movie");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());

app.get("/listOfMovies", (req, res) => {
  Movie.find().then((movies) => {
    res.json(movies);
  });
});

app.get("/movieDetails/:dynamicId", (req, res) => {
  console.log(req.params);
  Movie.findOne({ _id: req.params.dynamicId }).then((movies) => {
    res.json(movies);
  });
});

app.post("/newmovie", (req, res) => {
  console.log("newmovie", req.body);
  Movie.create(req.body).then((movies) => {
    res.json(movies);
  });
});

app.listen(5000);

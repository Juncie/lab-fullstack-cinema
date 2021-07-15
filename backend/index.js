const movies = require ('./bin/seeds');
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('')
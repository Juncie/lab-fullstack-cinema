const movies = require ('./bin/seeds');
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


const mongoose = require('mongoose');
const Schema = mongoose.Schema


const moviesSchema = new Schema ({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]

})

module.exports = mongoose.model('Movie', moviesSchema)

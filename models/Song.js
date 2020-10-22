const mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
    title: {type: String, required: true }, 
    album: {type: String, required: true },
    duration: {type: String, required: true},
    artist: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Song', schema)
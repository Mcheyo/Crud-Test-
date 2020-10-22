const mongoose = require('mongoose')
let Schema = mongoose.Schema


let schema = new Schema({
    email: {type: String, required: true, unique: true  }, 
    username: {type: String, required: true },
    songs: [{type :Schema.Types.ObjectId, ref: 'Song'}]

})

module.exports = mongoose.model('User', schema)
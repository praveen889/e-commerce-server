const mongoose = require('mongoose')

const RnpsoftSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
})

const RnpsoftModel = mongoose.model('rnpsofts', RnpsoftSchema)
module.exports = RnpsoftModel
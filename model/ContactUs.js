const mongoose = require('mongoose')

const contactUsSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
})

const ContactUsModel = mongoose.model('contactus', contactUsSchema)
module.exports = ContactUsModel
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    companyname: String,
    address: String,
    country: String,
    region: String,
    city: String,
    zipcode: String,
    phone: String,
    email: String,
    cart: [
        {
            id: Number,
            cardheading: String,
            price: Number,
            quantity: Number
        }
    ],
    totalPrice: Number
})

const OrderModel = mongoose.model('orders', orderSchema)
module.exports = OrderModel
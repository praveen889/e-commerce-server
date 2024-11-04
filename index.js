const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RnpsoftModel = require('./model/RnPsoft')
const OrderModel = require('./model/Order')
const ContactUsModel = require('./model/ContactUs')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://praveen8935:Praveen8935@cluster0.em04h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


app.post('/login', (req, res) =>{
    const{ email, password } = req.body;
    RnpsoftModel.findOne({email : email})
    .then( user =>{
        if(user){
            if(user.password === password){
                res.json("Successfully Login")
            } else {
                res.json("The password is incorrect")
            }
        } else {
            res.json('User not found')
        }
    })
})

app.post('/signupdetails', (req, res) =>{
    RnpsoftModel.create(req.body)
    .then( rnpsofts => res.json(rnpsofts))
    .catch(err => res.json(err))
})

app.post('/orders', (req, res ) =>{
    OrderModel.create(req.body)
    .then ( orders => res.json(orders))
    .catch(err => res.json(err))
})

app.get('/getOrders', (req, res) =>{
    OrderModel.find()
    .then(orders => res.json(orders))
    .catch(err => res(err))
})

app.post('/contactus', (req, res) =>{
    ContactUsModel.create(req.body)
    .then ( contactus => res.json(contactus))
    .catch(err => res.json(err))
})


app.get('/profile/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const user = await RnpsoftModel.findOne({ email });
        if (user) {
            res.json(user);
            console.log(user)
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/orders', async (req, res) => {
    try {
        const email = req.query.email;
        const orders = await OrderModel.find({ email });
        console.log(orders)
        res.json(orders);
    } catch (error) {
        res.status(500).send(error.message);
    }
});




app.listen(3001, () =>{
    console.log('Server is running')
})
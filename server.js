const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 5000 || port.env.PORT
require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// connexion à mongodb
const url = process.env.MONGO_URL
mongoose.connect(url, {useNewUrlParser: true})
.then(() => console.log('Connexion réussie'))
.catch(err => console.log('erreur ' +err))

// utiliser les routes
const produitRoute = require('./routes/produit.route')
app.use('/produit', produitRoute)

app.listen(port,() => {
    console.log('nous utilisons le port'+port)
})
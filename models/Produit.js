const mongoose = require('mongoose')
const Schema = mongoose.Schema

const produitSchema = new Schema(
    {
        nom:{
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    }
)

const Produit = mongoose.model('Produit', produitSchema)
module.exports = Produit
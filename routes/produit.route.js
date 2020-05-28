const router = require('express').Router()
let Produit = require('../models/Produit')

// tous les produits
router.get('/', async (req,res) => {
    try {
        const produits = await Produit.find()
        res.status(200).json({
            status: 'success',
            results: produits.length,
            data: {
                produits
            }
        })
    } catch (err) {
        res.status(404).json({
            status:'echec',
            message:err
        })
    }
})

// un seul produit

router.get('/:id', async (req, res) => {
    try {
        const produit = await Produit.findById(req.params.id)
        res.status(200).json({
            status:'nice',
            data: produit
        })
    } catch (err) {
        res.status(404).json({
            status:'echec',
            message: err
        })
    }
})

// creation d'un produit
router.post('/create', async (req, res) => {
    try {
        const newProduct = await Produit.create(req.body)
        res.status(200).json({
            status: 'nice',
            data: newProduct
        })
    } catch (err) {
        res.status(404).json({
            status:'erreur',
            message:err
        })
    }
})

// modifier un produit
router.patch('/update/:id', async (req, res) => {
    try {
        const newProduct = await Produit.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json({
            status: 'nice cool',
            data: newProduct
        })
    } catch (err) {
        res.status(500).json({
            status:'dara doxoul',
            message:err
        })
    }
})

// supprimer un produit

router.delete('/delete/:id', async (req, res) => {
    try {
        await Produit.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:'cool',
            data: null 
        })
    } catch (err) {
        res.status(404).json({
            status:'dara doxoul',
            message: err
        })
    }
})

module.exports = router
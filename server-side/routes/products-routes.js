const express = require('express');
const productsRoutes  = express.Router()
const productsConroller = require('../controllers/products-controller')



// addproduct rout
productsRoutes.post('/add-products',productsConroller.addProducts)
productsRoutes.get('/products-list', productsConroller.getProducts)
productsRoutes.get('/edit-product/:id', productsConroller.getProById)
productsRoutes.put('/update-product/:id', productsConroller.updateProduct)
productsRoutes.delete('/delete-product/:id', productsConroller.delproduct)


module.exports = productsRoutes;


const express=require('express');
const Router=express.Router();

const importedRoutes=require('./controllers/product');

const productModel=require('./products');

Router.post('/',importedRoutes.expCreateProduct);
//the api endpoint to create requests
Router.delete('/:id',importedRoutes.expDeleteProduct)
//api endpoint to delete products 

Router.get('/',importedRoutes.expGetProducts);
//api endpoint to view all products 

Router.put('/:id',importedRoutes.expUpdateProduct);

module.exports=Router;
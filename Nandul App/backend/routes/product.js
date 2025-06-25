
import express from 'express';
const Router=express.Router();

import {
  createProduct,
  deleteProduct,
  updateProduct,
  getProducts
} from '../controllers/product.js';


import productModel from '../models/products.js';

Router.post('/',createProduct);
//the api endpoint to create requests
Router.delete('/:id',deleteProduct)
//api endpoint to delete products 

Router.get('/',getProducts);
//api endpoint to view all products 

Router.put('/:id',updateProduct);

export default Router;
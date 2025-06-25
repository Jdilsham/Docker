
import express from 'express';
const app=express();

import path from 'path';

import {dbConnect} from './db.js';

import productModel from '../backend/models/products.js';

import productRoutes from './routes/product.js';

//let the server listen for the get method/ adding a route 
app.get('/',(req,res)=>{
    res.send("HELLO! FROM THE SERVER");
});

import cors from 'cors';

app.use(cors());

app.use(express.json());
//allows to parse user inputing json data to parse and insert to the database 

app.use('/products',productRoutes);

app.listen(4000,()=>{

  
        dbConnect();
        console.log("SERVER IS STARTED");
})
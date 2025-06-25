
const express=require('express');
const app=express();

const {dbConnect}=require('./db');

const productModel=require('./products');

const productRoutes=require('./product');

//let the server listen for the get method/ adding a route 
app.get('/',(req,res)=>{
    res.send("HELLO! FROM THE SERVER");
});

const cors=require('cors');

app.use(cors());

app.use(express.json());
//allows to parse user inputing json data to parse and insert to the database 

app.use('/products',productRoutes);

app.listen(4000,()=>{


        dbConnect();
        console.log("SERVER IS STARTED");
})
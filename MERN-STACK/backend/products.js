
const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,   
    }
},{
    timestamps:true //for createdAt and updatedAt fields
});

const productModel=mongoose.model('Product',productSchema);
//each product should have these fields according to this schema and they will be stored products collection in the database

module.exports=productModel;

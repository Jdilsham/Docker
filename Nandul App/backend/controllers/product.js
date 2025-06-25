import productModel from '../models/products.js';

const createProduct=async(req,res)=>{
    
        const product=req.body;
        //user enterting product details will be saved on the constant
    
        if(!product.name ||!product.price||!product.image){
            return res.status(400).json({
                success:false,
                message:"PLEASE FILL OUT ALL THE FIELDS",
            })
        }
    
        const newProduct=new productModel(product);
    
        try{
            newProduct.save();
            res.status(201).json({
                success:true,
                data:newProduct,
            })
        } catch(err){
            console.log("ERROR INSERTING THE PRODUCT"+err.message);
            res.status(500).json({
                success:false,
                message:"SERVER IS DOWN",
            })
        }
    
}

const updateProduct=async(req,res)=>{

    const id=req.params.id;

    const product=req.body;

    try{
        const updatedProduct=await productModel.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({
            success:true,
            data:updatedProduct
        })
    }catch(err){
        res.status(500).json({
            success:false,
            messsage:"ERROR IN UPDATING THE PRODUCT"
        })
    }

}

const deleteProduct=async(req,res)=>{
    const id=req.params.id;

    try{
        const productToBeDeleted=await productModel.findById(id);

        await productModel.deleteOne(productToBeDeleted);

        res.status(200).json({
            success:true,
            message:"PRODUCT SUCCESSFULLY DELETED"
        });
        
    }catch(err){
        res.status(400).json({
            success:false,
            message:"PLEASE ENTER A VALID PRODUCT ID"
        })
    }
}

const getProducts=async(req,res)=>{

    try{
        const allProducts=await productModel.find({});
        res.status(200).json({
            success:true,
            data:allProducts
        })


    }catch(err){
        res.status(500).json({
            success:false,
            message:"ERROR LOADING PRODUCTS"
        })
    }
}

export {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts
};

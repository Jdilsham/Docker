
import {create} from 'zustand'
//import product from '../../../backend/controllers/product';

export const useProductStore=create((set)=>({
    
        products:[],
       setProducts:(products)=>{
        set({products})
       },
       createProduct:async (newProduct)=>{

        //validate the product details user entered
        if(!newProduct.name|| !newProduct.price|| !newProduct.image){
                return {
                        success:false,
                        message:"PLEASE ENTER ALL FIELDS"
                }
        }

        //find the relevand api endpoint to post json user data into the backend
        const res=await fetch("http://localhost:4000/products",{
                method:"POST", //to insert data
                headers:{ //inserting data type
                        "content-type":"application/json"
                },
                body:JSON.stringify(newProduct) //what we are inserting

        }); 
        /* res will contain the data that needs to be sent to the backend
                like the waiter/api endpoint sending data from frontend to backend
                waiter has this string of data 
        */

      

        const data=await res.json();
          /*what the waiter/api sending to the backend, after making it to json again 
         actual data on the backend
         */


        set((state)=>({
                products:[...state.products,data.data]
        }));
        // update the state of the product 

        return{
                success:true,
                message:"PRODUCT CREATED SUCCESSFULLY"
        };

       },

       fetchProduct:async()=>{
        const res=await fetch("http://localhost:4000/products");
        const data=await res.json();

        set({
                products:data.data
        });
       },
       deleteProduct:async(pid)=>{

        const res=await fetch(`http://localhost:4000/products/${pid}`,{
                method:"DELETE",   
        });

        const data=await res.json();

        if(!data.success){

                return {
                        success:false,
                        message:"DELETE OPERATION IS FAILED"
                }
        }
        
        set(state=>({
                products:state.products.filter(product=>product._id!==pid)
        }));

        return{
                success:true,
                message:data.message
        }

        
        
       }

    
}));
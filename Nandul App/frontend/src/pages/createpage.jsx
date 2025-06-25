import { Box, Button, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product';


function Createpage(){

    //keep track of details of the product (name,image,price)
    const [newProduct,setNewProduct]=useState({
        name:'',
        price:'',
        image:''
    });
    
          const toast=useToast();
    
    /*when the add product button is clicked , function 
        is invoked. It uses our global state from zustand
        store.

    */

    const {createProduct}=useProductStore();

    const handpleInputChange=async()=>{
        const {success,message}=await createProduct(newProduct);
        /*now the initial values of our user data(newProduct) will be passed to 
        our global store. 

        If validation is passed from what user has entered
        relevand data will be displayed to the terminal.

        */
       

  

        if(!success){
            toast({
                "title":"ERROR",
                "description":message,
                "status":"error"
            })
        }else{
             toast({
                "title":"SUCCESS",
                "description":message,
                "status":"success"
            });

            //notifying the user 
        }

        setNewProduct({
            name:"",
            image:"",
            price:""
        });

    };

    return(
        <div>
            <VStack spacing={10}>

                <Heading as={'h1'} textAlign={'center'}>
                    CREATE NEW PRODUCT
                </Heading>

                <Box>
                    
                    <VStack spacing={2}>


                        <Input
                            placeholder='Product Name'
                            name='name'
                            value={newProduct.name}
                            onChange={(e)=>setNewProduct({
                                ...newProduct,
                                name:e.target.value
                            })}
                            ></Input>


                        <Input
                            placeholder='Price'
                            name='price'
                            value={newProduct.price}
                            onChange={(e)=>setNewProduct({
                                ...newProduct,
                                price:e.target.value
                            })}></Input>
                            

                        <Input
                            placeholder='Image'
                            name='image'
                            value={newProduct.image}
                            onChange={(e)=>setNewProduct({
                                ...newProduct,
                                image:e.target.value
                            })}></Input>
                             

                        <Button as={'h1'} onClick={handpleInputChange}>ADD PRODUCT</Button>
                    </VStack>

                </Box>







            </VStack>
        </div>
    )
}

export default Createpage
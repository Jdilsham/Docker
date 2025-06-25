
import React, { useEffect } from 'react'
import { Box, Container, SimpleGrid, VStack ,Text, Button, Link, HStack} from "@chakra-ui/react"
import { BiCurrentLocation } from "react-icons/bi";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { Link as RouterLink } from "react-router-dom";
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';


function Homepage(){

    const {fetchProduct,products}=useProductStore();

    useEffect(()=>{
        fetchProduct();
    
    },[fetchProduct]);

    //console.log(products);

    return(
       
        <Container>
            <VStack spacing={100}>
                <Text
                    fontSize={"30"}
                    fontWeight={"bold"}
                    bgClip={"text"}
                    textAlign={"center"}
                    color={"gray.500"}
                    >
                    CURRENT PRODUCTS <BiCurrentLocation />
                </Text>

                <SimpleGrid
                    columns={{
                        base:1,
                        md:2,
                        lg:3
                    }}
                    spacing={10}
                    w={'full'}>
                        {products.map((product)=>(
                            <ProductCard key={product.id} product={product}></ProductCard>
                        ))}

                </SimpleGrid>

                <Text
                    fontSize={"xl"}
                    fontWeight={"bold"}
                    color={"gray.500"}
                    textAlign={"center"}>
                        No Products found! 
                            <Text as="span">
                                <HiOutlineEmojiSad />
                            </Text> 
                

                    <Button as={RouterLink} to="/create" >
                        <Text
                                as="span"
                                fontSize={"xl"}
                                fontWeight={"bold"}
                                color={"blue.500"}
                                textAlign={"center"}
                                _hover={{
                                    textDecoration:"underline"
                                }} >
                                ADD A NEW PRODUCT
                        </Text>
                    </Button>
                </Text>               
                
            </VStack>
        </Container>
    )
}

export default Homepage
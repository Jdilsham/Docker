import { transform } from 'framer-motion'
import React from 'react'
import { Box, Heading, HStack, IconButton, useToast } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'; 
import { Image,Text} from '@chakra-ui/react';
import { useProductStore } from '../store/product';


function ProductCard({product}){

    const {deleteProduct}=useProductStore();

    const toast=useToast();

    const handleDeleteProduct=async(pid)=>{

        const {success,message}=await deleteProduct(pid);

        if(!success){

            toast({
                title:'Error',
                status:'error',
                description:message

            })
        }

        else{
             toast({
                title:'Success',
                status:'success',
                description:message

            })
        }
    }

    return (

        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{
                transform:"translateY(-5px)",
                shadow:"xl"
            }}>
                <Image src={product.image} alt={product.name} h={100} w='full' objectFit='cover'/>

                <Box
                    p={4}>

                        <Heading
                            as="h3"
                            size="md"
                            mb={2}>
                                {product.name}
                        </Heading>

                        <Text
                            fontWeight='bold'
                            fontSize='xl'
                            color={'blue'}>
                                ${product.price}

                        </Text>

                </Box>

                <HStack spacing={2}>

                    <IconButton
                        icon={<EditIcon/>}
                        colorScheme='blue'>
                    </IconButton>

                    <IconButton
                        icon={<DeleteIcon/>}
                        colorScheme='red'
                        onClick={()=>handleDeleteProduct(product._id)}>
                    </IconButton>
                </HStack>

        </Box>
    )
}

export default ProductCard
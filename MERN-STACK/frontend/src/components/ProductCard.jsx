import { transform } from 'framer-motion'
import React from 'react'
import { Box, Heading, HStack, IconButton } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'; 
import { Image,Text} from '@chakra-ui/react';
function ProductCard({product}){
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
                <Image src={product.image} alt={product.name} h={50} w='full' objectFit='cover'/>

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
                        colorScheme='red'>
                    </IconButton>
                </HStack>

        </Box>
    )
}

export default ProductCard
import { Button, Container, Flex,HStack,Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlusSquare } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { LiaShoppingCartSolid } from "react-icons/lia";


function Navbar(){
    const {colorMode,toggleColorMode}=useColorMode();

    return(

       


        <Container maxW={"1140px"} px={4}>
            <Flex
               h={16}
               alignItems={"center"}
               justifyContent={'space-between'}
               flexDir={{
                base:"column",
                sm:"row"
               }} >
                <Text>
                   <Button as={Link} to="/" >
                        GO TO PRODUCT STORE  <LiaShoppingCartSolid />
                   </Button>
                </Text>

                <HStack spacing={2} alignItems={"center"}>

                        <Button as={Link} to="/create">
                            <FaPlusSquare  fontSize={20}/>
                        </Button>
                  
                        <Button  onClick={toggleColorMode}>
                            {colorMode=="light" ? <IoMoon></IoMoon> : <LuSun></LuSun>}

                        </Button>


                </HStack>
            </Flex>
        </Container>
    )
}
export default Navbar
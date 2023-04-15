import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    
    Stack,
    
    Button,
    Heading,
    
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
  
  export default function LoginChakra({GetEmail}) {
const [email,setEmail]=useState("")

const HandleEmail=(e)=>{
    setEmail(e.target.value)
}



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={HandleEmail} type="email" />
              </FormControl>
              
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  
                </Stack>
                <Button
                onClick={()=>GetEmail(email)}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                    
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
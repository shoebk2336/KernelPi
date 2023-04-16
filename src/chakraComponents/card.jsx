import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Card({firstName,lastName,phone,email,createdAt}) {
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
              
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
           {firstName}  {lastName}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {email}
          </Text>
          <Box
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            <Box>
            <Heading size="6px">
            Phone
            </Heading>
            <Text>{phone}</Text>
            </Box>
            <Box>
            <Heading size="6px">
            Date Of Creation
            </Heading>
            <Text>{createdAt}</Text>
            </Box> 
           
            
            
            
          </Box>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #music
            </Badge>
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
            
           
          </Stack>
        </Box>
      </Center>
    );
  }
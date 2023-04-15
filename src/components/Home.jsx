
import { useCookies } from "react-cookie"
import { useContext, useEffect } from "react"
import { Context } from "../contextapi/User"
import Card from "../chakraComponents/card"
import { useState } from "react"
import { Box, Grid, Heading, SimpleGrid, grid } from "@chakra-ui/react"
import { Link } from "react-router-dom"
const Home=()=>{
const {Auth}=useContext(Context)
console.log(Auth)
const [Cookies,setCookies]=useCookies(['Token'])


const [Data,setData]=useState()
const UserDetails=async()=>{
    const data=await fetch(`http://172.232.70.228:8080/api/gql/query`,{
        method:"POST",
        headers:{'Content-Type': 'application/json',
        "Authorization":Cookies.Token},
        body:JSON.stringify({
            query:`query {
                users(search:{limit:20}){users{
                  id
                  firstName
                  lastName
                  email
                  phone
                  createdAt
                  
                  
                
                }}
                
              }`

        })
    })
    const res=await data.json()
    const wholeData=res.data.users.users
    if(wholeData){setData(wholeData)}
    console.log(wholeData)
}

useEffect(()=>{

   
        UserDetails()
    
    

},[])



    
    


if(Auth){
    return(
        <>
        
        <SimpleGrid 
        columns={{sm:1,md:2}}
        spacingX={'50px'}
        spacingY={'20px'}
        
        
        >
        {Data?.map((el)=>
         <Box key={el.id}>
         <Card
 firstName={el.firstName}
 lastName={el.lastName}
 phone={el.phone}
 email={el.email}
 createdAt={el.createdAt}
 />
 
 
         
         
         </Box>
         )}
        
        
        </SimpleGrid >
    
        
        
       
         
         
         </>)

}else {
    return(<>
        <Link to='/login'>
        <Heading textAlign={'center'} m={"auto"}>Kindly Login to Continue</Heading>

        </Link>
        </>)
    }


    
    

    
}
export default Home
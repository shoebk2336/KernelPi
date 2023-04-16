
import { useCookies } from "react-cookie"

import Card from "../chakraComponents/card"

import { Box,  Heading, SimpleGrid,  } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import DispData from "../redux/actions/HomeAction"
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react"






const Home=()=>{
const {LoginReducer}=useSelector(store=>store)
const Auth=LoginReducer.Auth

const [Cookies]=useCookies(['Token'])




const dispatch=useDispatch()
const {HomeReducer}=useSelector(store=>store)
const Data=HomeReducer.Data
console.log(Data,'redux')
useEffect(()=>{

   dispatch(DispData(Cookies))
       
    
    

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




import { useSelector } from "react-redux"
import { Box,SimpleGrid } from "@chakra-ui/react"
import Card from "../chakraComponents/card"

const SortDisplay=()=>{
    const {FilterReducer}=useSelector(store=>store)
    
    const DataSort=FilterReducer.sort.data.users.users
        

   
       
    
   
    
    

    return(
        <>

               
<SimpleGrid 
columns={{sm:1,md:2}}
spacingX={'50px'}
spacingY={'20px'}


>
{DataSort?.map((el)=>
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




}
export default SortDisplay



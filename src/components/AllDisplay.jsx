
import { Box,SimpleGrid } from "@chakra-ui/react"
import Card from "../chakraComponents/card"
import { useSelector } from "react-redux"

const AllDisplay=()=>{
    
    const {HomeReducer}=useSelector(store=>store)

    const Data=HomeReducer.Data

    return(<>
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
}
export default AllDisplay
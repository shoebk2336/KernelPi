
import { useCookies } from "react-cookie"



import {   Button,  Flex,  Heading, Input, Select,  } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import DispData from "../redux/actions/HomeAction"
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react"
import { HandleFilter, HandleSort } from "../redux/actions/filter"
import AllDisplay from "./AllDisplay"
import FilterDisplay from "./Filter"
import SortDisplay from "./Sort"






const Home=()=>{
const {LoginReducer,}=useSelector(store=>store)
const Auth=LoginReducer.Auth

const [Cookies]=useCookies(['Token'])


const {FilterReducer}=useSelector(store=>store)




const dispatch=useDispatch()

useEffect(()=>{

   dispatch(DispData(Cookies))
       
    
    

},[])



    
    


if(Auth){
    return(
        <>
<Flex
justifyContent={'space-between'}
w={'full'}
border={'0px solid red'}
>
<Flex >
<Input
h={{base:"30px"}}

placeholder="search"/>
<Button
h={{base:"30px"}}
>Find</Button>

</Flex>
<Select
onChange={(e)=>dispatch(HandleFilter(Cookies,e))}
variant={"filled"}
h={'30px'}
w={{md:"30%"}}
>
<option >All</option>
<option value={'Active'}>Active</option>
<option value={'Draft'}>Draft</option>
<option value={'Accepted'}>Accepted</option>
<option value={'Archived'}>Archived</option>
</Select>





<Select
onChange={(e)=>dispatch(HandleSort(Cookies,e))}
variant={"filled"}
h={'30px'}
w={{md:"30%"}}
>

<option value={'Ascending'}>Ascending</option>
<option value={'Descending'}>Descending</option>

</Select>

</Flex>

   
{FilterReducer.filter.length===0 
    && FilterReducer.sort.length===0?
    <AllDisplay/>
    :FilterReducer.sort.length===0?<FilterDisplay/>:
    FilterReducer.filter.length===0?<SortDisplay/>:null
    
}



        
        
    
        
        
       
         
         
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
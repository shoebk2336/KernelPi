import { Children, createContext,useState } from "react";



export const Context=createContext()


const ContextProvider=({children})=>{

const [Auth,setAuth]=useState(false)




return(

<Context.Provider value={{Auth,setAuth}}>
{children}
</Context.Provider>

)


}
export default ContextProvider
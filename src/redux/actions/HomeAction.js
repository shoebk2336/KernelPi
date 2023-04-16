



const DispData=(Cookies)=>async(dispatch)=>{
   
    try{
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
        if(wholeData){
            dispatch({type:"DispData",payload:wholeData})
        }
        


    }catch(err){
        console.log(err)
    }



}
export default DispData
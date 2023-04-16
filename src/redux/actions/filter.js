

export const HandleFilter=(Cookies,e)=>async(dispatch)=>{
   

try{

    const Value={query:`
query{
    users(search:{limit:10,
      filter:${e.target.value},
      sortBy:Alphabetical,
      sortDir:Ascending})
    {users{
        id
        firstName
        lastName
        email
        phone
        createdAt
    }}
  }
`}


    const Data=await fetch(`http://172.232.70.228:8080/api/gql/query`,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
            "Authorization":Cookies.Token
        },
        body:JSON.stringify(Value)
    })
    const res=await Data.json()
    
    dispatch({type:'Filter',payload:res})
}catch(err){console.log(err)}



}

export const HandleSort=(Cookies,e)=>async(dispatch)=>{
    



try{

    const Value={query:`
query{
    users(search:{limit:10,
      filter:All,
      sortBy:Alphabetical,
      sortDir:${e.target.value}})
    {users{
        id
        firstName
        lastName
        email
        phone
        createdAt
    }}
  }
`}


    const Data=await fetch(`http://172.232.70.228:8080/api/gql/query`,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
            "Authorization":Cookies.Token
        },
        body:JSON.stringify(Value)
    })
    const res=await Data.json()
    
    dispatch({type:'Sort',payload:res})
}catch(err){console.log(err)}

}
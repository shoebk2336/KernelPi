



export const LoginOtp=(email)=>async(dispatch)=>{


    const Value={ query:`
    mutation{
        generateOTP(input:{email:"${email}"})
      }
    `}
    
        const data=await fetch(`http://172.232.70.228:8080/api/gql/query`,{
            method:"POST",
            headers:{ 'Content-Type': 'application/json'},
            body:JSON.stringify(
               Value
            )
        })
        const res=await data.json()
        console.log(res)
        dispatch({type:"LoginOtp",payload:res.data.generateOTP})
    
        const msg='Your Otp is '+res.data.generateOTP
        
        alert(msg)

    
}

//token request

export const LoginToken=(Otpvalue,Email)=>async(dispatch)=>{
        
    
        const Value={
            query:`
            mutation{
                login(input:{email:"${Email}",otp:${Otpvalue}}){sessionToken}
              }
            
            `
    
        }
    
        const data=await fetch(`http://172.232.70.228:8080/api/gql/query`,{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(Value)
        })
        const res=await data.json()
        console.log(res,'otppp')
    
        if(res.data!=null){
            const Token=res.data.login.sessionToken
        if(Token){
            dispatch({type:"TrueToken",payload:Token})
           alert("Logged in Successfully")
          
            
    
            
    
        }else if(res.data===null)
            {
                dispatch({type:'undefined',payload:null})
                alert("Invalid OTP")
                        }
        }
        else {dispatch({type:'undefined',payload:null})
        alert("Invalid OTP")
        }
    
    
    
    }
    export const  Logout=()=>{
        return({type:"Logout"})
    }

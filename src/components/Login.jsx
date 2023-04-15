import { useState } from "react"
import LoginChakra from "../chakraComponents/login"
import OtpChakra from "../chakraComponents/otp"
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom"
import { Context } from "../contextapi/User"
import { useContext } from "react"



const Login=()=>{
    const navigate=useNavigate()

    const {setAuth}=useContext(Context)
   

    const [Cookies,setCookies]=useCookies(['Token'])

    const [otp,setOtp]=useState("")

    





   
    console.log( otp,'OTP VALUE')

   const [Email,setEmail]=useState("")
const GetEmail=async(email)=>{
    setEmail(email)

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
    setOtp(res.data.generateOTP)

    const msg='Your Otp is '+res.data.generateOTP
    
    alert(msg)

   
   
   
 



}





const GetOtp=async(Otpvalue)=>{
    console.log('optbtn')

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

    if(res.data){
        const Token=res.data.login.sessionToken
    if(Token){
        setCookies('Token',Token)
        setAuth(true)
        

        alert("Logged in Successfully")
        navigate('/')

    }else if( Token===undefined)
        {alert('OTP is Invalid')}
    }
    else alert('OTP is Invalid')
    
    
    
    
    

    

}


    return(
        <>
        
        
        
        {otp!=null && otp.length===5?
            <OtpChakra
            GetOtp={GetOtp}
            />
        :
       
        <LoginChakra 
        GetEmail={GetEmail}/>
        
        }
        
        
        
        </>)
}
export default Login
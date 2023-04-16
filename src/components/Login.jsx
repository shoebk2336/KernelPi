import { useState } from "react"
import LoginChakra from "../chakraComponents/login"
import OtpChakra from "../chakraComponents/otp"
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import {  LoginOtp, LoginToken } from "../redux/actions/LoginAction"



const Login=()=>{

    const dispatch=useDispatch()
const {LoginReducer}=useSelector(store=>store)
const Token=LoginReducer.Token
const otp=LoginReducer.otp


    const navigate=useNavigate()

   
   

    const [,setCookies]=useCookies(['Token'])

    

    





   
    

   const [Email,setEmail]=useState("")



 const GetEmail=async(email)=>{
    dispatch(LoginOtp(email))

    setEmail(email)

   
   
 



}






const GetOtp=async(Otpvalue)=>{
    
    
    
    

         
            dispatch(LoginToken(Otpvalue,Email))
           

            
         
        
      

    
}
if(Token){
    setCookies('Token',Token)
    navigate('/')
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



const Init={
    otp:"",
    Token:'',
    Auth:false,

}

const LoginReducer=(state=Init,{type,payload})=>{
    switch(type){
        case "LoginOtp":return ({...state,otp:payload})
        case "TrueToken":return({...state,Token:payload,Auth:true})
        case "undefined":return({...state,Token:payload})
        case "Logout": return ({...state,Token:"",Auth:false,otp:""})
        default:return state
    }
}
export default LoginReducer

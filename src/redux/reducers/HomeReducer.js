


const Init={
    Data:[]
}

const HomeReducer=(state=Init,{type,payload})=>{

switch(type){
    case "DispData":return {...state,Data:payload}
    default:return state
    }
}


export default HomeReducer
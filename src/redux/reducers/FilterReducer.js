

const init={
    filter:[],
    sort:[]
}
  



const FilterReducer=(state=init,{type,payload})=>{
    switch(type){
case "Filter":return ({...state,filter:payload,sort:[]})
case "Sort":return ({...state,sort:payload,filter:[]})
case "Logout":return ({...state,filter:[],sort:[]}) 
 default:return state



    }
}
export default FilterReducer
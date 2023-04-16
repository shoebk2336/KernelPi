import {applyMiddleware, createStore,combineReducers} from 'redux'
import HomeReducer from './reducers/HomeReducer'
import LoginReducer from './reducers/LoginReducer'

import thunk from 'redux-thunk'


const Root=combineReducers({
    HomeReducer,
    LoginReducer
})


const store=createStore(

Root,
applyMiddleware(thunk)
)

export default store
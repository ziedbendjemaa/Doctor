import { LOGIN, LOGIN_FAIL, LOGIN_SUCCES, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCES } from "./actionType"
import axios from "axios"


export const signUpUser=(newUser)=>async(dispatch)=>{
    dispatch({
        type:SIGN_UP
        
    })
    try {
        let res=await axios.post("/user/signUp",newUser)
        dispatch({
            type:SIGN_UP_SUCCES,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:SIGN_UP_FAIL,
            payload:error.response.data
        })
    }
};
export const loginUser=(user)=>async(dispatch)=>{
    dispatch({
        type:LOGIN
    })
    try {
        let res=await axios.post("/user/login",user)
        localStorage.setItem("token",res.data.token)
        dispatch({
            type:LOGIN_SUCCES,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data
        })
    }
}
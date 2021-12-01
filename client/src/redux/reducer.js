import { LOGIN, LOGIN_FAIL, LOGIN_SUCCES, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCES } from "./actionType";


let init={
    user:null,
    loading:false,
    errors:null,
    token:localStorage.getItem("token"),
    isAuth:false
}

export const userReducer=(state=init,{type,payload})=>{
    switch (type) {
        case SIGN_UP:
            case LOGIN:
            return{
                ...state,loading:true
            }
            case SIGN_UP_SUCCES:
                return{
                    ...state,loading:false,user:payload
                }
                case SIGN_UP_FAIL:
                    case LOGIN_FAIL:
                    return{
                        ...state,loading:false,errors:payload
                    }
                    case LOGIN_SUCCES:
                        return{
                            ...state,
                            loading:false,
                            user:payload.theUser,
                            token:payload.token,
                            isAuth:true
                        }
        
    
        default:
            return state;
    }
}
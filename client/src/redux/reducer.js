import { ADD_ITEM, ADD_PRODUCT, ADD_PRODUCT_CART, ADD_PRODUCT_CART_FAIL, ADD_PRODUCT_CART_SUCCESS, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, DELETE_ITEM, DELETE_PRODUCT, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT, EDIT_PRODUCT_FAIL, EDIT_PRODUCT_SUCCESS, GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCES, LOGIN, LOGIN_FAIL, LOGIN_SUCCES, LOGOUT, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCES } from "./actionType";


let init={
    user:null,
    loading:false,
    errors:null,
    isAuth:false,
    products:null,
    token: localStorage.getItem("token"),
    items:[],
    carts:null

}

export const userReducer=(state=init,{type,payload})=>{
    switch (type) {
        case SIGN_UP:
            case LOGIN:
                case GET_PROFILE:
                    case GET_PRODUCT:
                        case ADD_PRODUCT:
                            case DELETE_PRODUCT:
                                case EDIT_PRODUCT:
                                    case ADD_PRODUCT_CART:
            return{
                ...state,loading:true
            }
            case SIGN_UP_SUCCES:
                return{
                    ...state,loading:false,user:payload
                }
                case SIGN_UP_FAIL:
                    case LOGIN_FAIL:
                        case GET_PROFILE_FAIL:
                            case GET_PRODUCT_FAIL:
                                case ADD_PRODUCT_FAIL:
                                    case DELETE_PRODUCT_FAIL:
                                        case EDIT_PRODUCT_FAIL:
                                            case ADD_PRODUCT_CART_FAIL:
                    return{
                        ...state,loading:false,errors:payload
                    }
                    case LOGIN_SUCCES:
                        return{
                            ...state,
                            loading:false,
                            user:payload.theUser,
                            token:payload.token,
                            isAuth:true,
                            errors:null
                        };
                        case GET_PROFILE_SUCCES:
                            return{
                                ...state,loading:false,user:payload,isAuth:true,errors:null
                            };
                            case LOGOUT:
                                return{
                                    ...state,
                                    user:null,
                                    token:null,items:[]

                                }
                
        case GET_PRODUCT_SUCCESS:
            return{
                ...state,products:payload,loading:false
            };
            case ADD_PRODUCT_SUCCESS:
                return{
                    ...state,products:[...state.products,payload]
                };
                case DELETE_PRODUCT_SUCCESS:
                    return{
                        ...state,products:state.products.filter(el=>el.id!==payload)
                    };
                    case EDIT_PRODUCT_SUCCESS:
                        return{
                            ...state,products:state.products.map((el)=>el.id===payload.id?({...el,...payload}):el)
                        }
    case ADD_ITEM:
       return{ ...state,items:[...state.items,payload]
    };
    case ADD_PRODUCT_CART_SUCCESS:
        return{
           ...state,carts:payload
        };
        case DELETE_ITEM:
            return{
                ...state,items:state.items.filter(el=>el.id!==payload)
            
            }
        default:
            return state;
    }
}
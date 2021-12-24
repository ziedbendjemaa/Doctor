import { ADD_ITEM, ADD_PRODUCT, ADD_PRODUCT_CART, ADD_PRODUCT_CART_FAIL, ADD_PRODUCT_CART_SUCCESS, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, DELETE_ITEM, DELETE_PRODUCT, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT, EDIT_PRODUCT_FAIL, EDIT_PRODUCT_SUCCESS, GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCES, LOGIN, LOGIN_FAIL, LOGIN_SUCCES, LOGOUT, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCES } from "./actionType"
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
};
export const getProfile=()=>async(dispatch)=>{
    dispatch({
        type:GET_PROFILE
    })
    let token=localStorage("token");
    let config={
        Headers:{
            Authorization:token
        }
    }
    try {
        let res=await axios.get("/user/get",config)
        dispatch({
            type:GET_PROFILE_SUCCES,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:GET_PROFILE_FAIL,
            payload:error.response.data
        })
    }
};
export const logout = () => {
    localStorage.removeItem("token")
    return {
        type: LOGOUT,
        payload:null
    }
}
export const getProduct=()=>async(dispatch)=>{
    dispatch({
        type:GET_PRODUCT
    })
    try {
        let res=await axios.get('/product/get_products')
        dispatch({
            type:GET_PRODUCT_SUCCESS,
            payload:res.data
        })
        
    } catch (error) {
        dispatch({
            type:GET_PRODUCT_FAIL,
            payload:error.response.data
        })
    }
};
export const addProduct=(newProduct)=>async(dispatch)=>{
    dispatch({
        type:ADD_PRODUCT
    })
    let token = localStorage.getItem("token");
    let config = {
      headers: {
          Authorization: token,
      }
    };
    try {
        let res=await axios.post('/product/add_products',newProduct,config)
        console.log(res)
        dispatch({
            type:ADD_PRODUCT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:ADD_PRODUCT_FAIL,
            payload:error.response.data
        })
    }
};
export const deleteProduct=(id)=>async(dispatch)=>{
    dispatch({
        type:DELETE_PRODUCT
    })
    let token = localStorage.getItem("token");
    let config = {
      headers: {
          Authorization: token,
      }
    };
    try {
        let res=await axios.delete(`/product/delete_products/${id}`,config)
        dispatch({
            type:DELETE_PRODUCT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:DELETE_PRODUCT_FAIL,
            payload:error.response.data
        })
    }
};
export const editProduct=(id,title,description,category,price,quantite,imageUrl)=>async(dispatch)=>{
    dispatch({
        type:EDIT_PRODUCT
    })
    let token = localStorage.getItem("token");
    let config = {
      headers: {
          Authorization: token,
      }
    };
    let newproduct={id,title,description,category,price,quantite,imageUrl}

    try {
        let res=await axios.put(`/product/edit_products/${id}`,newproduct,config)
        dispatch({
            type:EDIT_PRODUCT_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:EDIT_PRODUCT_FAIL,
            payload:error.response.data
        })
    }
};
export const addToCart = (id,qty) =>async(dispatch,getState)=> {
    const res = await axios.get(`/product/get_products/${id}`)
    dispatch({
        type: ADD_ITEM,
        payload:{
            id: res.data._id,
            title: res.data.title,
            price: res.data.price,
            imageUrl:res.data.imageUrl,
            qty
        }
    })
  
  }
  export const addProductsCart = (newcommande) => async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_CART });
    let token = localStorage.getItem("token");
  let config = {
    headers: {
        Authorization: token,
    }
  };
    try {
      const res = await axios.post("/cart/add_cart",newcommande,config);
      
      dispatch({
        type: ADD_PRODUCT_CART_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_CART_FAIL,
        payload: error.response.data,
      });
    }
  };
  export const deleteItem=(id)=>async(dispatch)=>{
      dispatch({
          type:DELETE_ITEM,
          payload:id
      })
     
  }
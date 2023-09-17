
import axios from 'axios';

import * as actionType from '../constants/cartConstant';

const URL ='http://localhost:8000';  //https://back-end-seven-tawny.vercel.app

export const addToCart =(id, quantity,username) => async(dispatch) =>{
 try{
   const {data} =   await axios.get(`${URL}/product/${id}`);
   dispatch({type: actionType.ADD_TO_CART, payload:{ ...data, quantity}});
   await axios.post(`${URL}/addTocart`,{id,quantity,username});
 }catch(error){
    dispatch({type: actionType.ADD_TO_CART_ERROR, payload:error.message});
 }

}

export const removeFromCart =(id) => (dispatch) =>{
    
dispatch({type:actionType.REMOVE_FROM_CART , payload:id});

}
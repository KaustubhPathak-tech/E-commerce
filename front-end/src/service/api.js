import axios from 'axios';
import { setCurrentUser } from '../redux/actions/setCurrentUser';

const URL ='http://localhost:8000';  //https://back-end-seven-tawny.vercel.app https://otivaindustries.com https://zetacart-server.vercel.app

export const authenticateSignup = async (Authdata,dispatch) =>{

    try{
        const response=await  axios.post(`${URL}/signup`, Authdata);
        const data=response?.data;
        dispatch({type:"SIGNUP",data});
        await dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
        return response;
    }catch(error){
        console.log('Error while calling signup api ', error);
    }

}


export const authenticateLogin= async (Authdata,dispatch) =>{

    try{
    const response=await  axios.post(`${URL}/login`, Authdata);
    const data=response?.data;
    dispatch({type:"LOGIN",data});
    await dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    return response;
    }catch(error){
        console.log('Error while calling login  api ', error);
        return error.response;
    }

}

export const payUsingPaytm =async(data)=>{
    try{
        let response=await axios.post(`${URL}/payment`,data);
        return response.data;
    }catch(error){
        console.log("Error while calling payment api " , error);
    }
}
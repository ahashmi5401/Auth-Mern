import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import  axios from 'axios'
const signup = createAsyncThunk('auth/signup' , async (userForm , {rejectWithValue}) => {
    try {
        const res = await axios.post(` https://auth-be-five.vercel.app/api/auth/signup`, userForm)
        console.log("BACKEND RESPONSE:", res);
        return res.data; //ye banta hai jakai payload
    }catch (error){
        console.log( "error is " , error);
        return  rejectWithValue(error.response.data.message) //ye banta hai jakai payload
    }
} )
const verifyOtp = createAsyncThunk('auth/verify-otp' , async (userForm , {rejectWithValue}) => {
    try{
        const res = await axios.post('https://auth-be-five.vercel.app/api/auth/verify-otp' , userForm)
        return res.data
    }catch (error){
        return rejectWithValue(error)
    }
})

const login = createAsyncThunk('auth/login' , async (userForm , {rejectWithValue}) => {
    try{
        const  res = await axios.post('https://auth-be-five.vercel.app/api/auth/login' , userForm);
        return res.data;
    }catch (error){
        console.log("Login error:", error);
        return rejectWithValue(
    error.response?.data?.message || "Login failed"
  );
    }
})



export {signup , verifyOtp , login}
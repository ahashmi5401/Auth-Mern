import React, { use, useState } from 'react'
import Input from '../../components/Input'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { signup } from '../../redux/features/auth/authThunk'

const Signup = () => {
  const [userForm , setUserForm ]= useState({
    userName : '',
    email : '',
    password : '',
    age : ''
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    console.log(e.target);
    const {name , value} = e.target
    console.log(name , value);
    
    setUserForm({ 
      ...userForm, 
      [name]: value
     });
  }
  const handleSubmit = async  (e) => {
    e.preventDefault();
    const {username , email , password} = userForm;
    if(username == '' || email == '' || password == ''){
      console.warn("All Field Are Required");
      return ;
    }
    try {
  let res = await dispatch(signup(userForm)).unwrap();
  console.log("res", res);
    if (res?.status) {
      navigate("/verifyOtp");
        }else{
          console.log("Signup failed", res?.message || "Unknown error");
          
        }

} catch (error) {
  console.log("error is", error);
}
  }
return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">

    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 space-y-5"
    >

      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Create Account
        </h1>
        <p className="text-sm text-white/70">
          Welcome to the Signup page!
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <Input
          field={"userName"}
          placeholder="Enter your username"
          value={userForm.username}
          handler={handleInputChange}
        />

        <Input
          field={"email"}
          placeholder="Enter your email"
          value={userForm.email}
          handler={handleInputChange}
        />

        <Input
          field={"password"}
          placeholder="Enter your password"
          value={userForm.password}
          handler={handleInputChange}
        />

        <Input
          field={"age"}
          placeholder="Enter your age"
          value={userForm.age}
          handler={handleInputChange}
        />
      </div>

      {/* Button */}
      <div className="pt-2">
        <Button text="Sign Up" dispatch={dispatch} />
      </div>

      {/* Footer */}
      <p className="text-sm text-center text-white/80">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-white font-semibold hover:underline"
        >
          Login
        </Link>
      </p>

    </form>
  </div>
);
}

export default Signup
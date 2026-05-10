import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/features/auth/authThunk";
import { toast, Toaster } from "react-hot-toast";

export default function Login() {
  const [userForm, setUserForm] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser, loading } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserForm({
      ...userForm,
      [name]: value
    });
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submit handler login chl raha hai');
    

    try {
      let res = await dispatch(login(userForm)).unwrap();
      console.log(res);
      

     if(res.status == true){
        toast.success(res.message || "Login successful");
        setTimeout(() => {
    navigate("/dashboard")
        },1000)
      }
    } catch (error) {
      toast.error(error.message || "Login failed");
    }
  };

  return (
   <form
  onSubmit={submitHandler}
  className="w-full max-w-md mx-auto mt-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 space-y-6"
>
  {/* Header */}
  <div className="text-center space-y-2">
    <h1 className="text-3xl font-bold text-white tracking-tight">
      Welcome Back
    </h1>
    <p className="text-sm text-white/70">
      Login to continue your journey
    </p>
  </div>

  {/* Inputs */}
  <div className="space-y-4">
    <Input
      field={"email"}
      placeholder={"Enter Your Email"}
      value={userForm.email}
      handler={handleInputChange}
    />

    <Input
      field={"password"}
      placeholder={"Enter Your Password"}
      value={userForm.password}
      handler={handleInputChange}
    />
  </div>

  {/* Button */}
  <div className="pt-2">
    <Button text={loading ? "Loading..." : "Login"} />
  </div>

  {/* Footer */}
  <p className="text-center text-sm text-black/80">
    Don’t have an account?{" "}
    <span className="font-semibold text-blue hover:underline cursor-pointer">
      <Link to="/">Sign Up</Link>
    </span>
  </p>
  <Toaster/>
</form>
  );
}
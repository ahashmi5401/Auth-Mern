import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { verifyOtp } from '../../redux/features/auth/authThunk'
import { toast  , Toaster} from 'react-hot-toast'

const VerifyOtp = () => {
  const [userForm, setUserForm] = useState({
    email: "",
    otp: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChanges = (e) => {
    const { name, value } = e.target;

    setUserForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await dispatch(verifyOtp(userForm)).unwrap();
      console.log("done", res);

      if (res.status) {
          toast.success("OTP verified successfully");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      toast.error(error || "OTP verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4">

      {/* Glass Card */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 space-y-6"
      >

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">
            Verify OTP
          </h1>
          <p className="text-sm text-white/70">
            Enter the OTP sent to your email
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <Input
            field={"email"}
            handler={handleInputChanges}
            placeholder="Enter your email"
          />

          <Input
            field={"otp"}
            handler={handleInputChanges}
            placeholder="Enter OTP"
          />
        </div>

        {/* Button */}
        <div className="pt-2">
          <Button text={"Verify OTP"} />
        </div>

        {/* Footer hint */}
        <p className="text-center text-sm text-white/60">
          Didn’t receive OTP? check spam or try again
        </p>

      </form>
    </div>
  );
};

export default VerifyOtp;
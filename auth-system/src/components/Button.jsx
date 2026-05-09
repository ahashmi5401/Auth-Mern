import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className="w-full h-12 rounded-xl bg-white text-indigo-600 font-semibold cursor-pointer hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      {text}
    </button>
  );
};

export default Button;
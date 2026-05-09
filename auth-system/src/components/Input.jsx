const Input = ({ field, placeholder, value, handler }) => {
  return (
    <input
      id={field}
      name={field}
      value={value}
      placeholder={placeholder}
      onChange={handler}
      className="w-full px-4 h-12 text-gray-800 bg-gray-100 border border-gray-300 rounded-xl outline-none placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all"
    />
  );
};

export default Input;
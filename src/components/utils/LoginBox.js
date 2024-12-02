import React from "react";
import { FaApple, FaFacebook } from "react-icons/fa";

const Login = ({ onSwitchToSignup }) => {
  return (
    <div className="bg-white rounded-[50px] z-50 xl:w-[450px] h-auto 2xl:w-[500px] 2xl:h-[600px] mx-auto  mt-36 mb-8 p-8 flex flex-col items-start space-y-4 shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-black">
        Sign in or create an account
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded-[50px] p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded-[50px] p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button className="w-full bg-red-500 text-white rounded-[50px] p-4 font-semibold hover:bg-red-600 transition">
        Login
      </button>
      <div className="w-full text-right ">
        <a href="#" className="text-red-500 text-sm hover:underline">
          Forgotten Password?
        </a>
      </div>
      <p className="text-base  text-black ">
        Don't have an account?
        <span className="mr-2"></span>
        <button
          onClick={onSwitchToSignup}
          className="text-red-500 font-semibold hover:underline"
        >
          Sign up
        </button>
      </p>

      {/* Social Login */}
      <div className="text-center my-2 mx-auto">
        <p className="text-base my-4  text-black text-center">
          or use one of these options
        </p>
        <div className="flex justify-center space-x-16 mt-2">
          <FaFacebook className="text-blue-600 text-4xl cursor-pointer hover:opacity-80" />
          <img src="/google.png" className="w-9 h-9 cursor-pointer " />
          <FaApple className="text-black text-4xl cursor-pointer" />
        </div>
      </div>

      {/* Terms and Conditions */}
      <p className="text-xs text-gray-500 text-center mt-4 px-4">
        By signing in or creating an account, you agree with our
        <a href="#" className="text-red-500 hover:underline">
          Terms & conditions
        </a>
        &nbsp;and&nbsp;
        <a href="#" className="text-red-500 hover:underline">
          Privacy statement.
        </a>
      </p>
    </div>
  );
};

export default Login;

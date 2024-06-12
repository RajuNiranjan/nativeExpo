import OAuth from "@/components/OAuth/OAuth";
import Link from "next/link";
import React, { useState } from "react";

const SignUP = () => {
  const [signUpFormData, setSignUpFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setSignUpFormData({
      ...signUpFormData,
      [name]: value,
    });
  };

  const handleSubmitSignUpForm = (e) => {
    e.preventDefault();
    try {
      console.log(signUpFormData);
      setSignUpFormData({
        userName: "",
        email: "",
        password: "",
      });
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <form onSubmit={handleSubmitSignUpForm} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="user name"
          name="userName"
          value={signUpFormData?.userName}
          onChange={onChangeInput}
          className="border border-gray-500 p-2 rounded-md focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="mail@gmail.com"
          name="email"
          value={signUpFormData?.email}
          onChange={onChangeInput}
          className="border border-gray-500 p-2 rounded-md focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="*********"
          name="password"
          value={signUpFormData?.password}
          onChange={onChangeInput}
          className="border border-gray-500 p-2 rounded-md focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-gray-500 font-bold text-white p-2 rounded-md hover:bg-gray-600 transition-all duration-700">
          Sign Up
        </button>
        <OAuth />
      </form>
      <p>
        already have an account ?{" "}
        <Link
          href="/sign-in"
          className="font-semibold text-gray-500 hover:text-gray-700 transition-all duration-300">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUP;

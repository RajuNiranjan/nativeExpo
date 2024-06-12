import OAuth from "@/components/OAuth/OAuth";
import Link from "next/link";
import React, { useState } from "react";

const SignIn = () => {
  const [SignInFormData, setSignInFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setSignInFormData({
      ...SignInFormData,
      [name]: value,
    });
  };

  const handleSubmitSignInForm = (e) => {
    e.preventDefault();
    try {
      console.log(SignInFormData);
      setSignInFormData({
        email: "",
        password: "",
      });
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <form onSubmit={handleSubmitSignInForm} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="mail@gmail.com"
          name="email"
          value={SignInFormData?.email}
          onChange={onChangeInput}
          className="border border-gray-500 p-2 rounded-md focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="*********"
          name="password"
          value={SignInFormData?.password}
          onChange={onChangeInput}
          className="border border-gray-500 p-2 rounded-md focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-gray-500 font-bold text-white p-2 rounded-md hover:bg-gray-600 transition-all duration-700">
          Sign In
        </button>
        <OAuth/>
      </form>
      <p>
        don't have an account ?{" "}
        <Link
          href="/sign-up"
          className="font-semibold text-gray-500 hover:text-gray-700 transition-all duration-300">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;

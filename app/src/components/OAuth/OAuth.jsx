import React from "react";

const OAuth = () => {
  const handleContinueWithGoogle = () => {};
  return (
    <button
      onClick={handleContinueWithGoogle}
      type="button"
      className="bg-red-500 font-bold text-white p-2 rounded-md hover:bg-gray-600 transition-all duration-700">
      Continue With Google
    </button>
  );
};

export default OAuth;

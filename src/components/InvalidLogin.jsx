import React from "react";
import { useNavigate } from "react-router-dom";

const InvalidLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col gap-4 w-112 p-8 shadow-slate-400 shadow-md">
          <h1 className="text-2xl font-bold">Dear User,</h1>
          <p className="text-gray-600 text-md">
            Thank you for visiting our website. We noticed that you are not
            currently logged in to your account. We encourage you to sign in or
            create an account to access the full range of features and benefits
            our platform has to offer.
          </p>
          <p>
            Log In{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-cyan-600"
            >
              here
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default InvalidLogin;

import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col gap-4 w-112 p-8 shadow-slate-400 shadow-md">
          <h1 className="text-2xl font-bold">Error 404: Page Not Found</h1>
          <p className="text-gray-600 text-md">
            Sorry, the page you are looking for does not exist.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="flex justify-start text-cyan-600"
          >
            Return to Login Page
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

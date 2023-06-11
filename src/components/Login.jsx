import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters"),
  });

  const handleLogin = (values) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/sign-in`, values)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        if (
          localStorage.getItem("token") &&
          localStorage.getItem("token") !== "undefined"
        ) {
          localStorage.setItem("username", response.data.user.username);
        }
        navigate("/home");
      });
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form className="absolute flex flex-row h-112 shadow-slate-400 shadow-lg rounded-xl">
            <div className="relative flex flex-col w-80 h-112 p-8">
              <h1 className="mb-3 text-2xl font-bold">Sign In</h1>
              <p className="mb-14 text-gray-500 text-xs">
                Sign in to your account to upload and explore books.
              </p>
              <Field
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="p-2 focus:outline-none shadow-slate-400 shadow-md border-none rounded-lg placeholder:text-gray-400 placeholder:text-md text-gray-500"
              />
              <div className="flex items-center h-6">
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="p-2 focus:outline-none shadow-slate-400 shadow-md border-none rounded-lg placeholder:text-gray-400 placeholder:text-md text-gray-500"
              />
              <div className="flex items-center h-6">
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
              <button
                type="submit"
                className="p-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 duration-300"
              >
                Submit
              </button>
              <p className="absolute bottom-5 left-2/4 -translate-x-2/4 w-48 text-gray-500 text-xs ">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate("/register")}
                  className="text-cyan-600 hover:text-cyan-700 duration-300"
                >
                  Sign Up
                </button>
              </p>
            </div>
            <div className="w-80 h-112 hidden md:block">
              <div
                alt="Login"
                className="w-full h-full rounded-r-xl bg-form-pattern"
              ></div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;

import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirmation Password is required"),
  });

  const handleRegister = (values) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/create-user`, values)
      .then(navigate("/login"));
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form className="absolute flex flex-row h-128 shadow-slate-400 shadow-lg rounded-xl">
            <div className="relative flex flex-col w-80 h-128 p-8">
              <h1 className="mb-3 text-2xl font-bold">Sign Up</h1>
              <p className="mb-7 text-gray-500 text-xs">
                Create an account to upload and explore books. Join now!
              </p>
              <Field
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="p-2 focus:outline-none shadow-slate-400 shadow-md border-none rounded-lg placeholder:text-gray-400 placeholder:text-md text-gray-500"
              />
              <div className="flex items-center h-6">
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>
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
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirmation Password"
                className="p-2 focus:outline-none shadow-slate-400 shadow-md border-none rounded-lg placeholder:text-gray-400 placeholder:text-md text-gray-500"
              />
              <div className="flex items-center h-6">
                <ErrorMessage
                  name="confirmPassword"
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
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-cyan-600 hover:text-cyan-700 duration-300"
                >
                  Sign In
                </button>
              </p>
            </div>
            <div className="w-80 h-128 hidden md:block">
              <div
                alt="Register"
                className="w-full h-full rounded-r-xl bg-form-pattern"
              ></div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Register;

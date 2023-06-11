import React from "react";
import Layout from "./Layout";
import Books from "./Books";
import Header from "./Header";
import InvalidLogin from "./InvalidLogin";

const Home = () => {
  return (
    <>
      {localStorage.getItem("token") &&
      localStorage.getItem("token") !== "undefined" ? (
        <Layout>
          <Header />
          <Books />
        </Layout>
      ) : (
        <InvalidLogin />
      )}
    </>
  );
};

export default Home;

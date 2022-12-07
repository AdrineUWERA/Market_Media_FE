import SignUpForm from "../src/Components/SignUpAndLogin/SignUpForm";
import React from "react";
import Navbar from "../src/Components/UI/Navbar";
import Footer from "../src/Components/UI/Footer";

const Login = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SignUpForm />
      <Footer />
    </React.Fragment>
  );
};

export default Login;

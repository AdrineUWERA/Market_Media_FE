import LoginForm from "../src/Components/SignUpAndLogin/LoginForm";
import React from "react";
import Navbar from "../src/Components/UI/Navbar";
import Footer from "../src/Components/UI/Footer";

const Login = () => {
  return (
    <React.Fragment>
      <Navbar />
      <LoginForm />
      <Footer />
    </React.Fragment>
  );
};

export default Login;

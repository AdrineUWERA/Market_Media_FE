import Router from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { setCookie, destroyCookie, parseCookies } from "nookies";
import { LOGIN_QUERY } from "../Queries/AuthenticationQueries";
import { useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { SIGNUP_MUTATION } from "../Mutations/AuthenticationMutation";

const getInitialState = () => {};

export const UserContext = createContext(getInitialState);

const UserProvider = ({ children, ...props }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginQuery] = useLazyQuery(LOGIN_QUERY, {
    variables: {
      email,
      password,
    },
  });

  const [addUser] = useMutation(SIGNUP_MUTATION);

  let isAuthenticated = !user;

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setUserRole(JSON.parse(localStorage.getItem("userRole")));
  }, []);

  const login = async ({ email, password }) => {
    setEmail(email);
    setPassword(password);
    await loginQuery({
      onCompleted: (data) => {
        setCookie(undefined, "auth_token", data.login.token, {
          maxAge: 60 * 60 * 1, // 1 hour
        });

        isAuthenticated = true;

        localStorage.setItem("user", JSON.stringify(data.login.userId)); //resolve a user
        localStorage.setItem("userRole", JSON.stringify(data.login.userRole)); //resolve a user

        setUser(JSON.parse(localStorage.getItem("user")));

        // console.log("user from login: ");
        // console.log("role: ", data.login.userRole);
        setUserRole(JSON.parse(localStorage.getItem("userRole")));

        if (userRole == "Admin") {
          Router.push("/adminDashboard/all-products");
        } else if (userRole == "Seller") {
          Router.push("/SellerDashboard/stock");
        } else {
          Router.push("/");
        }
      },
    });

    return isAuthenticated;
  };

  const signup = async ({ name, email, password, phoneNumber }) => {
    const { data } = addUser({
      variables: { name, email, phoneNumber, password },
    });

    console.log(email, password);

    // setCookie(undefined, "auth_token", data.login.token, {
    //   maxAge: 60 * 60 * 1, // 1 hour
    // });

    // isAuthenticated = true;

    // localStorage.setItem("user", JSON.stringify(data.login.userId)); //resolve a user

    // setUser(JSON.parse(localStorage.getItem("user")));

    // console.log("user from login: ", user);

    Router.push("/login");
    // login(email,password);
  };

  const logout = async () => {
    destroyCookie(undefined, "auth_token");
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");
    setUser(null);
    setUserRole(null);
    isAuthenticated = false;
    Router.push("/"); 
  };
  
  return (
    <UserContext.Provider
      {...props}
      value={{ isAuthenticated, user, userRole, login, signup, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
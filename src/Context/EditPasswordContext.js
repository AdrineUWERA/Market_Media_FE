import Router from "next/router";
import { useMutation } from "@apollo/client";
import { CHANGE_PASSWORD } from "../Mutations/UserMutations";
import React, { createContext } from "react";
import { GET_USER_DETAILS } from "../Queries/UserQueries";

const getInitialState = () => {};

export const ChangePasswordContext = createContext(getInitialState);

const ChangePasswordProvider = ({ children, ...props }) => {
  const [changePassword] = useMutation(CHANGE_PASSWORD);

  const changeUserPassword = async (id, newPassword) => {
    const { data } = changePassword({
      variables: { id, newPassword },
      onCompleted: () => Router.push("/my-account/account-settings"),
      refetchQueries: [{ query: GET_USER_DETAILS }],
    });
  };

  return (
    <ChangePasswordContext.Provider {...props} value={{ changeUserPassword }}>
      {children}
    </ChangePasswordContext.Provider>
  );
};

export default ChangePasswordProvider;

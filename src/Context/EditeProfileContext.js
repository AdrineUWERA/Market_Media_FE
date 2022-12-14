import Router from "next/router";
import { useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { EDIT_USER } from "../Mutations/UserMutations";
import React, { createContext, useEffect, useState } from "react";
import { GET_USER_DETAILS } from "../Queries/UserQueries";
 
const getInitialState = () => {};
 
export const EditProfileContext = createContext(getInitialState);
 
const EditProfileProvider = ({ children, ...props }) => {
 
const [updateUser] = useMutation(EDIT_USER);

 
const updatingUser = async (id,name,phoneNumber) => {
    const { data } = updateUser({
        variables: {id,name,phoneNumber},
        onCompleted:() => Router.push("/my-account/my-profile"),
        refetchQueries: [{ query: GET_USER_DETAILS }],
    });
}
 
return (
    <EditProfileContext.Provider
      {...props}
      value={{ updatingUser }}
    >
      {children}
    </EditProfileContext.Provider>
  );
};
 
export default EditProfileProvider;
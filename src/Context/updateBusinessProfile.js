import Router from "next/router";
import { useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { UPDATE_BUSINESS,CREATE_BUSINESS } from "../Mutations/business";
import React, { createContext, useEffect, useState } from "react";
import { GET_BUSINESS_INFO } from "./../Queries/BusinessInfo";
import PopUp from "../Components/UI/popUp";

const getInitialState = () => {};

export const BusinessContext = createContext(getInitialState);

const BusinessProvider = ({ children, ...props }) => {

// const [addProduct] = useMutation(ADD_PRODUCT);
const [updateBusiness] = useMutation(UPDATE_BUSINESS);
const [createBusiness] = useMutation(CREATE_BUSINESS);
const [showModal, setShowModal] = useState(false);


const updatingBusiness = async ({image,name,description,webLink,socialMediaLink,email,phoneNumber,province,district,streetAddress,otherAddressDescription}) => {
    const { data } = updateBusiness({
        variables: {image,name,description,webLink,socialMediaLink,email,phoneNumber,province,district,streetAddress,otherAddressDescription},
        onCompleted:() => Router.push("/SellerDashboard/account"),
        refetchQueries: [{ query: GET_BUSINESS_INFO }],
    });
}

const creatingBusiness = async ({image,name,description,webLink,socialMediaLink,email,phoneNumber,province,district,streetAddress,otherAddressDescription, legalDocument}) => {
  const { data } = createBusiness({
      variables: {image,name,description,webLink,socialMediaLink,email,phoneNumber,province,district,streetAddress,otherAddressDescription,legalDocument},
      onCompleted:() =>{
        setShowModal(true)      
      },
      // refetchQueries: [{ query: GET_BUSINESS_INFO }],
  });
}

return (
    <BusinessContext.Provider
      {...props}
      value={{ updatingBusiness,creatingBusiness,showModal,setShowModal }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export default BusinessProvider;
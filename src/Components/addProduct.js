import Router from "next/router";
import { useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { ADD_PRODUCT,EDIT_PRODUCT } from "./../Mutations/product";
import React, { createContext, useEffect, useState } from "react";
import { GET_BUSINESS_PRODUCTS } from "./../Queries/BusinessProducts";

const getInitialState = () => {};

export const ProductContext = createContext(getInitialState);

const ProductProvider = ({ children, ...props }) => {

const [addProduct] = useMutation(ADD_PRODUCT);
const [updateProduct] = useMutation(EDIT_PRODUCT);


const addingProduct = async ({image,name,description,categoryId,unit,quantity,price,manufacturer,dateAdded}) => {
    console.log(image);
    const { data } = addProduct({
        variables: { image,name,description,categoryId,unit,quantity,price,manufacturer,dateAdded },
    });
    Router.push("/SellerDashboard/stock");
}

const updatingProduct = async ({id,image,name,description,categoryId,unit,quantity,price,manufacturer,dateAdded}) => {
  quantity =quantity.toString();
  price = price.toString();
  const { data } = updateProduct({
      variables: { id,image,name,description,categoryId,unit,quantity,price,manufacturer,dateAdded },
      onCompleted:() => Router.push("/SellerDashboard/stock"),
        refetchQueries: [{ query: GET_BUSINESS_PRODUCTS }],
  });
  
}

return (
    <ProductContext.Provider
      {...props}
      value={{ addingProduct,updatingProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
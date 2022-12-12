import Router from "next/router";
import { useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { ADD_PRODUCT } from "./../Mutations/product";
import React, { createContext, useEffect, useState } from "react";


const getInitialState = () => {};

export const ProductContext = createContext(getInitialState);

const ProductProvider = ({ children, ...props }) => {

const [addProduct] = useMutation(ADD_PRODUCT);

const addingProduct = async ({image,name,description,categoryId,unit,quantity,price,manufacturer,dateAdded}) => {
    console.log(image);
    const { data } = addProduct({
        variables: { image,name,description,categoryId,unit,quantity,price,manufacturer,dateAdded },
    });
    // Router.push("/SellerDashboard/stock");
}

return (
    <ProductContext.Provider
      {...props}
      value={{ addingProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
import { ADD_PRODUCT } from "./../../../src/Mutations/product";
import { useQuery, useMutation, gql } from "@apollo/client";


export const useAddProduct = () => {
    return useMutation(product);
}

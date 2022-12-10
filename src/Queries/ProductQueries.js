import { gql } from "@apollo/client";

const GET_PRODUCT_DETAILS = gql`
  query ($id: ID!) {
    product(id: $id) {
      id
      image
      name
      description
      category {
        name
      }
      unit
      quantity
      price
      business {
        id
        name
      }
    }
  }
`;

const GET_ALL_PRODUCTS = gql`
  query getAllProducts{
    products {
      id
      image
      name
      description
      category {
        name
      } 
      price
      business {
        id
        name
      }
      dateAdded
    }
  }
`;

export { GET_PRODUCT_DETAILS, GET_ALL_PRODUCTS };

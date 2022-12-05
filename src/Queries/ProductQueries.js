import { gql } from "@apollo/client";

const GET_PRODUCT_DETAILS = gql`
  query ($id: ID!) {
    product(id: $id) {
      id
      image
      name
      description 
      category{
        name
      }
      unit
      quantity
      price
      business{
        id
        name
      }
    }
  }
`;

export { GET_PRODUCT_DETAILS };

import { gql } from "@apollo/client";

const GET_PRODUCT_SELLERS = gql`
  query getProducts {
    products {
        business {
            id
            image
            name
        }
    }
  }
`;

export { GET_PRODUCT_SELLERS };
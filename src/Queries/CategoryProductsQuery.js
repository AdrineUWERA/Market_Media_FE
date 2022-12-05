import { gql } from "@apollo/client";

const GET_CATEGORY_PRODUCTS = gql`
  query ($id: ID!) {
    category(id: $id) {
      id
      name
      products {
        id
        name
        image
      }
    }
  }
`;

export { GET_CATEGORY_PRODUCTS };

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
    categories {
      id
      name
    }
  }
`;

const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      name
    }
  }
`;

export { GET_CATEGORY_PRODUCTS, GET_CATEGORIES };

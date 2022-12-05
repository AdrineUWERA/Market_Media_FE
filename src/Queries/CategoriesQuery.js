import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      image
      name
    }
  }
`;

export { GET_CATEGORIES };

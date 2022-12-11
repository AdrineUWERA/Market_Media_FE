import { gql } from "@apollo/client";

const GET_SELLERS = gql`
  query getBusinesses {
    businesses {
      id
      image
      name
      streetAddress
    }
  }
`;

export { GET_SELLERS };

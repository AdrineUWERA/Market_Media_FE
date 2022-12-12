import { gql } from "@apollo/client";

const LOGIN_QUERY = gql`
  query ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      userRole
      token
      tokenExpiration
    }
  }
`;

export {
    LOGIN_QUERY
}
import { gql } from "@apollo/client";

const EDIT_USER = gql`
  mutation updateUser($id: ID!, $name: String!, $phoneNumber: String!) {
    updateUser(id: $id, name: $name, phoneNumber: $phoneNumber) {
      id
    }
  }
`;

export { EDIT_USER };

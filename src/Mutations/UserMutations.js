import { gql } from "@apollo/client";

const EDIT_USER = gql`
  mutation updateUser($id: ID!, $name: String!, $phoneNumber: String!) {
    updateUser(id: $id, name: $name, phoneNumber: $phoneNumber) {
      id
    }
  }
`;
const CHANGE_PASSWORD = gql`
  mutation changePassword($id: ID!, $newPassword: String!) {
    changePassword(id: $id, newPassword: $newPassword) {
      id
    }
  }
`;

export { EDIT_USER, CHANGE_PASSWORD };

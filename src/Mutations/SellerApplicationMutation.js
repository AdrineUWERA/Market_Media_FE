import { gql } from "@apollo/client";

const ACCEPT_APPLICATION = gql`
  mutation updateBusiness($id: ID!) {
    updateBusiness(id: $id, applicationStatus: approved) {
      id
    }
  }
`;

const REJECT_APPLICATION = gql`
  mutation updateBusiness($id: ID!) {
    updateBusiness(id: $id, applicationStatus: rejected) {
      id
    }
  }
`;


export { ACCEPT_APPLICATION, REJECT_APPLICATION };

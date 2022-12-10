import { gql } from "@apollo/client";

const GET_APPLICATION_DETAILS = gql`
  query ($id: ID!) {
    business(id: $id) {
      id
      image
      name
      description
      webLink
      socialMediaLink
      email
      phoneNumber
      province
      district
      streetAddress
      otherAddressDescription
      legalDocument
      applicationStatus
      owner {
        id
        name
      }
      dateSubmitted
    }
  }
`;

const GET_ALL_APPLICATIONS = gql`
  query getAllApplications {
    businesses {
      id
      image
      name
      applicationStatus
      dateSubmitted
    }
  }
`;

export { GET_APPLICATION_DETAILS, GET_ALL_APPLICATIONS };

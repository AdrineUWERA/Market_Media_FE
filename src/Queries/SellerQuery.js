import { gql } from "@apollo/client";

const GET_SELLER_DETAILS = gql`
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
      reviewsReceived {
        id
        user {
          name
        }
        rating
        comment
      }
    }
  }
`;

const GET_SELLER_PRODUCTS = gql`
  query ($id: ID!) {
    businessProducts(businessId: $id) {
      id
      image
      name
      business {
        name
      }
    }
  }
`;

const GET_ALL_SELLERS = gql`
  query {
    businesses {
      name
      id
      image
    }
  }
`;

export { GET_SELLER_DETAILS, GET_SELLER_PRODUCTS, GET_ALL_SELLERS };

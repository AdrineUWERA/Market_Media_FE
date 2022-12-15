import { gql } from "@apollo/client";

const GET_BUSINESS_PRODUCTS = gql`
  query getBusinessProducts {
    businessProducts(businessId: "638e4167c2ded250f8ef9408") {
      id
      name
      image
      unit
      quantity
      price
      dateAdded
    }
  }
`;

const GET_OWNER_BUSINESS = gql`
  query getBusiness($ownerId: ID!) {
    getBusiness(ownerId: $ownerId) {
      id
    }
  }
`;

export { GET_BUSINESS_PRODUCTS, GET_OWNER_BUSINESS };

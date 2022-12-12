import { gql } from "@apollo/client";

const GET_BUSINESS_PRODUCTS = gql`
query getBusinessProducts{
  businessProducts(businessId:"638e4167c2ded250f8ef9408"){
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

export { GET_BUSINESS_PRODUCTS };

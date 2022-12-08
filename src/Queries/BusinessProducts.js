import { gql } from "@apollo/client";

const GET_BUSINESS_PRODUCTS = gql`
query getBusinessProducts{
  businessProducts(businessId:"63836fd9a0481d0d5a667d90"){
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

import { gql } from "@apollo/client";

const ADD_ORDER = gql`
  mutation addOrder(
    $userId: ID!
    $productId: ID!
    $quantity: String!
    $businessId: ID!
    $phoneNumber: String!
    $shippingAddress: String!
    $shippingMethod: String!
  ) {
    addOrder(
      userId: $userId
      productId: $productId
      quantity: $quantity
      businessId: $businessId
      phoneNumber: $phoneNumber
      shippingAddress: $shippingAddress
      shippingMethod: $shippingMethod
    ) {
      id
      user {
        id
      }
    }
  }
`;

export { ADD_ORDER };

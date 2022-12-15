import { gql } from "@apollo/client";

const GET_USER_DETAILS = gql`
  query ($id: ID!) {
    user(id: $id) {
      id
      name
      email
      phoneNumber
      password
      category
    }
  }
`;

const GET_USER_ORDERS = gql`
  query ($userId: ID!) {
    userOrders(userId: $userId) {
      product {
        id
        name
        price
        image
      }
      quantity
      business {
        id
        name
      }
      shippingAddress
      shippingMethod
    }
  }
`;

export { GET_USER_DETAILS, GET_USER_ORDERS };

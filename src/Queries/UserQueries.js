import { gql } from "@apollo/client";

const GET_USER_DETAILS = gql`
  query {
    user(id: "638a1b79c8afb589adf654f3") {
      id 
      name
      email
      phoneNumber
      password
    }
  }
`;


const GET_USER_ORDERS = gql`
  query {
    userOrders(userId: "638a1b79c8afb589adf654f3"){
    product{
      id
      name
      price
      image
    }
    quantity
    business{
      id
      name
    }
    shippingAddress
    shippingMethod
  }
  }
`;


export { GET_USER_DETAILS, GET_USER_ORDERS };

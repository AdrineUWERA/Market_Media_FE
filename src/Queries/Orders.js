import { gql } from "@apollo/client";

const GET_ORDERS = gql`
query getOrders{
  businessOrders(businessId:"63836fd9a0481d0d5a667d90"){
    id
    user{
      name
      email
      phoneNumber
    }
    product{
        name
    }
    quantity
    shippingAddress
    shippingMethod
    orderDate
    status
  }
}
`;




export { GET_ORDERS };

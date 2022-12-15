import { gql } from "@apollo/client";

const GET_ORDERS = gql`
query getOrders{
  businessOrders(businessId:"638e4167c2ded250f8ef9408"){
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

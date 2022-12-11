import { gql } from "@apollo/client";

const GET_ALL_ORDERS = gql`
  query getOrders {
    orders {
        id
        product{
            name
            image
            price
        }
        business{
            name
        }
        orderDate
    }
  }
`;

export { GET_ALL_ORDERS };
import { gql } from '@apollo/client';

const GET_ORDERS = gql`
    query ($id: ID!) {
        order(id: $id) {
            id
            user{
                name
            }
            quantity
            product{
                name
                image
                price
            }
            business{
                name
            }
            phoneNumber
            shippingAddress
            shippingMethod
            orderDate
        }
    }
`;

export default GET_ORDERS;
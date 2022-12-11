import { gql } from 'apollo-booster';

const GET_USER = gql`
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

export { GET_USER };
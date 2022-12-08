import { gql } from '@apollo/client';

const GET_REVIEW = gql`
    query ($id: ID!) {
        reviews(id: $id) {
            user {
                id
                name
            }
            business {
                id
                name
            }
            rating
            comment
        }
    }
`;

export { GET_REVIEW };

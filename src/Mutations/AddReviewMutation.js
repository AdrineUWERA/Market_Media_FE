import { gql } from "@apollo/client";

const ADD_REVIEW = gql`
  mutation addReview($userId: ID!, $businessId: ID!, $rating: String!, $comment:String!) {
    addReview(userId: $userId, businessId: $businessId, rating: $rating, comment: $comment ) {
      id
    }
  }
`;

export { ADD_REVIEW };

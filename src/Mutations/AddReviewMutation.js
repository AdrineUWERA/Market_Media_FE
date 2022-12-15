import { gql } from "@apollo/client";

const ADD_REVIEW = gql`
  mutation addReview($userId: ID!, $businessId: ID!, $rating: String!, $comment:String!, $dateAdded: String!) {
    addReview(userId: $userId, businessId: $businessId, rating: $rating, comment: $comment, dateAdded:$dateAdded ) {
      id
    }
  }
`;

export { ADD_REVIEW };

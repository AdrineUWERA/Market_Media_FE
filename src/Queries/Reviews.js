import { gql } from "@apollo/client";

const GET_REVIEWS = gql`
query getReviews{
  businessReviews(businessId:"63836fd9a0481d0d5a667d90"){
    id
    user{
      name
      image
    }
    rating
    comment
    dateAdded
  }
}
`;

export { GET_REVIEWS };

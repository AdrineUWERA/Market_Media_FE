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

const GET_REVIEWS_COUNT = gql`
query getReviewsCount{
  businessReviewsCount(businessId:"63836fd9a0481d0d5a667d90")
}
`;

const GET_AVERAGE_RATING = gql`
query getAverageRating{
  businessAverageRating(businessId:"63836fd9a0481d0d5a667d90")
}
`;

export { GET_REVIEWS,GET_REVIEWS_COUNT,GET_AVERAGE_RATING};

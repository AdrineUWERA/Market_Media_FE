import { gql } from "@apollo/client";

const GET_REVIEWS = gql`
query getReviews{
  businessReviews(businessId:"638e4167c2ded250f8ef9408"){
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
  businessReviewsCount(businessId:"638e4167c2ded250f8ef9408")
}
`;

const GET_AVERAGE_RATING = gql`
query getAverageRating{
  businessAverageRating(businessId:"638e4167c2ded250f8ef9408")
}
`;

export { GET_REVIEWS,GET_REVIEWS_COUNT,GET_AVERAGE_RATING};

import { GET_REVIEWS_COUNT } from "./../../Queries/Reviews";
import LoadingAnimation from "./../../Components/UI/LoadingAni";
import { useQuery } from "@apollo/client";


export default function ReviewCount() {
  const { loading, error, data } = useQuery(GET_REVIEWS_COUNT);
  if (loading) return <LoadingAnimation />;
  if (error) {
    return <p>Something Went Wrong</p>;
  };
  return (
    <p className="text-[#838383]">{data.businessReviewsCount} Reviews</p>
)
}
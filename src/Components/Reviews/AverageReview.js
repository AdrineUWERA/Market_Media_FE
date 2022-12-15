import { GET_AVERAGE_RATING } from "./../../Queries/Reviews";
import LoadingAnimation from "./../../Components/UI/LoadingAni";
import { useQuery } from "@apollo/client";


export default function AverageReview() {
  const { loading, error, data } = useQuery(GET_AVERAGE_RATING);
  if (loading) return <LoadingAnimation />;
  if (error) {
    return <p>Something Went Wrong</p>;
  };
  return (
    <h1 className="font-bold text-[34px] ">{data.businessAverageRating.toFixed(1)}</h1>
  )
}
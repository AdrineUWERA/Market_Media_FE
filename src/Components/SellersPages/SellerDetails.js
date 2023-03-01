import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GET_SELLER_DETAILS } from "../../Queries/SellerQuery";
import LoadingAnimation from "../UI/LoadingAni";
import { useQuery } from "@apollo/client";
import { FaUserCircle } from "react-icons/fa";
import AddReviewModal from "./AddReviewModal";
import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const SellerDetails = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const id = router.query.id;
  console.log("id", id);
  const [showModal, setShowModal] = useState(false);
  const { loading, error, data } = useQuery(GET_SELLER_DETAILS, {
    variables: { id },
  });
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
  }
  console.log(data);
  const business = data.business;
  return (
    <>
      {!loading && !error && (
        <div className="flex flex-col pt-20">
          <div className="flex flex-row px-32">
            <div className="flex flex-col justify-between mb-7 w-[40%]">
              <div className="w-[100%] h-[100%] relative">
                <Image layout="fill" src={business.image} objectFit="cover" objectPosition="center" />
              </div>
              <div className="mt-[1.5rem]">
                <Link
                  href={{
                    pathname: "/sellers/products/[id]",
                    query: { id: business.id },
                  }}
                >
                  <button className="btn px-5 py-3 bg-[#DBA61F] text-xl text-white rounded-md">
                    See list of products
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col pl-20 justify-center">
              <h1 className="text-5xl font-bold pb-12">{business.name}</h1>
              <p className="text-2xl pb-5">
                <span className="font-bold">Email: </span>
                {business.email}
              </p>
              <p className="text-2xl pb-5">
                <span className="font-bold">Phone Number: </span>
                {business.phoneNumber}
              </p>
              {business.webLink && (
                <p className="text-2xl pb-5">
                  <span className="font-bold">Website Link: </span>
                  <a className="underline" href={business.webLink}>
                    {business.webLink}
                  </a>
                </p>
              )}
              {business.socialMediaLink && (
                <p className="text-2xl pb-5">
                  <span className="font-bold">Website Link: </span>
                  <a className="underline" href={business.socialMediaLink}>
                    {business.socialMediaLink}
                  </a>
                </p>
              )}
              <p className="text-2xl pb-5">
                <span className="font-bold">Province: </span>
                {business.province}
              </p>
              <p className="text-2xl pb-5">
                <span className="font-bold">District: </span>
                {business.district}
              </p>
              <p className="text-2xl pb-5">
                <span className="font-bold">Street Address: </span>
                {business.streetAddress}
              </p>
            </div>
          </div>
          <div className="flex flex-col px-32 pt-16">
            <h3 className="text-2xl font-bold pb-6">Business description</h3>
            <p className="text-[18px] text-justify">{business.description}</p>
          </div>
          <div className="flex flex-col px-32 pb-20 pt-16">
            <div className="flex items-center justify-between pb-5">
              <h3 className="text-2xl font-bold pb-6">Reviews</h3>
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#DBA61F] text-white px-10 py-2 rounded-md hover:bg-[#e8b841]"
              >
                + Add review
              </button>
            </div>
            <div className="">
              {business.reviewsReceived.map((review) => (
                <div
                  key={review.id}
                  className="shadow-lg px-12 py-10 mb-10 rounded-lg border-2 border-[gray-200]"
                >
                  <div className="flex flex-row items-center gap-5 pb-6">
                    <FaUserCircle size={55} />
                    <p className="text-[#243C74] font-bold">
                      {review.user.name}
                    </p>
                  </div>
                  <div>
                    <span className="text-[18px] text-[#DBA61F] font-bold">
                      Rating:{" "}
                    </span>
                    <span className="text-[18px] font-bold text-[#DBA61F]">
                      {review.rating}
                    </span>
                    <p className="pt-4">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AddReviewModal
            user={user}
            businessId={business.id}
            isVisible={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      )}
    </>
  );
};

export default SellerDetails;

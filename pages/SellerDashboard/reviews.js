import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../src/Components/UI/Navbar";
import Footer from "../../src/Components/UI/Footer";
import Sidebar from "../../src/Components/SellerDashboardbComponents/sidebar";
import Image from 'next/legacy/image'
import { useQuery } from "@apollo/client";
import Rate from './../../src/Components/UI/Rating'
import { GET_REVIEWS,GET_REVIEWS_COUNT,GET_AVERAGE_RATING } from "./../../src/Queries/Reviews";
import LoadingAnimation from "./../../src/Components/UI/LoadingAni";
import AverageReview from "./../../src/Components/Reviews/AverageReview"
import NumberOfReviews from "./../../src/Components/Reviews/NumberOfReviews"


export default function reviews() {

  const { loading, error, data } = useQuery(GET_REVIEWS);
  
  if (loading) return <LoadingAnimation />;
  if (error) {
    return <p>Something Went Wrong</p>;
  };

  return (
    <>
    {!loading && !error && (
    <React.Fragment>
      <Head>
        <title>Market Media</title>
        <meta name="description" content="Welcome to market media" />
      </Head>
      <>
        <Navbar />
        <hr className="mt-1.5"></hr>
        <div className='flex flex-row justify-start'>
          <Sidebar />
          <div className='flex-1 mt-14 mb-14 ml-10 mr-14 relative'>
            <div className="flex flex-row justify-between">
              <h1 className="font-bold text-[28px] pl-5">CUSTOMER REVIEWS</h1>
            </div>
            <div class="overflow-x-auto relative mt-7 ml-14">
              <h1 className="font-bold text-[20px]">Average Rating</h1>
              <div className="mt-4 mb-7 flex items-center">
                <div className="flex items-center mr-24">
                  <AverageReview/>
                </div>
                <div className="">
                <NumberOfReviews/>
                </div>
              </div>
              <div>
              {data.businessReviews.map((review) => {
                return(
                <div className="overflow-x-auto shadow-lg sm:rounded-lg mb-14 border mr-20">
                  <div className="flex items-center relative ml-8 mt-8 mb-8 mr-14 justify-between">
                    {/* <div className=""> */}
                    <div className="flex items-center">
                      <div className="w-20 h-20 relative mr-8">
                        <Image
                          src={review.user.image}
                          alt="Picture of the author"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                        ></Image>
                      </div>
                      <div>
                        <p className="font-bold text-[18px]">{review.user.name}</p>
                        <Rate rate={review.rating} />
                      </div>
                    </div>
                    {/* </div> */}
                    <div className="">
                      <p className="text-[#838383]">{review.dateAdded}</p>
                    </div>
                  </div>
                  <p className="ml-14 mr-14 mb-16">{review.comment}</p>
                </div>
                )
              })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </React.Fragment >
    )}
    </>
  );
}
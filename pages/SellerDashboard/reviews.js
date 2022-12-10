import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../src/Components/UI/Navbar";
import Footer from "../../src/Components/UI/Footer";
import Sidebar from "../../src/Components/SellerDashboardbComponents/sidebar";
import Image from 'next/legacy/image'
import ReactStars from 'react-stars'
import Rate from './../../src/Components/UI/Rating'

export default function reviews() {

  return (
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
              <div className="flex mt-4 mb-7">
                <div className="flex items-center w-[30%]	">
                  <h1 className="font-bold text-[34px] ">3.7</h1>
                </div>
                <div className="flex items-center w-[70%]	">
                  <p className="text-[#838383]">3 Reviews</p>
                </div>
              </div>
              <div>
                <div className="overflow-x-auto shadow-lg sm:rounded-lg mb-14 border mr-20">
                  <div className="flex items-center relative ml-8 mt-8 mb-8">
                    {/* <div className=""> */}
                      <div className="flex items-center w-[30%]">
                        <div className="w-20 h-20 relative mr-8">
                          <Image
                            src={"https://res.cloudinary.com/doxc03jzw/image/upload/v1670495179/yxrhdyjpe39honaiozc7.jpg"}
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          ></Image>
                        </div>
                        <Rate rate="3" />
                      </div>
                    {/* </div> */}
                    <div className="">
                      <p className="text-[#838383]">Aug 7, 2022 12:20 PM</p>
                    </div>
                  </div>
                  <p className="ml-14 mr-14 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="overflow-x-auto shadow-lg sm:rounded-lg mb-14 border mr-20">
                  <div className="flex items-center relative ml-8 mt-8 mb-8">
                    {/* <div className=""> */}
                      <div className="flex items-center w-[30%]">
                        <div className="w-20 h-20 relative mr-8">
                          <Image
                            src={"https://res.cloudinary.com/doxc03jzw/image/upload/v1670495179/yxrhdyjpe39honaiozc7.jpg"}
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          ></Image>
                        </div>
                        <Rate rate="3" />
                      </div>
                    {/* </div> */}
                    <div className="">
                      <p className="text-[#838383]">Aug 7, 2022 12:20 PM</p>
                    </div>
                  </div>
                  <p className="ml-14 mr-14 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="overflow-x-auto shadow-lg sm:rounded-lg mb-14 border mr-20">
                  <div className="flex items-center relative ml-8 mt-8 mb-8">
                    {/* <div className=""> */}
                      <div className="flex items-center w-[30%]">
                        <div className="w-20 h-20 relative mr-8">
                          <Image
                            src={"https://res.cloudinary.com/doxc03jzw/image/upload/v1670495179/yxrhdyjpe39honaiozc7.jpg"}
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          ></Image>
                        </div>
                        <Rate rate="3" />
                      </div>
                    {/* </div> */}
                    <div className="">
                      <p className="text-[#838383]">Aug 7, 2022 12:20 PM</p>
                    </div>
                  </div>
                  <p className="ml-14 mr-14 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </React.Fragment >
  );
}
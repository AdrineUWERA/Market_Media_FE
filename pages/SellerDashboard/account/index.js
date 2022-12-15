import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "./../../../src/Components/UI/Navbar";
import Footer from "./../../../src/Components/UI/Footer";
import Sidebar from "./../../../src/Components/SellerDashboardbComponents/sidebar";
import Image from "next/image";
import Button from "./../../../src//Components/UI/Button"
import { GET_BUSINESS_INFO } from "./../../../src/Queries/BusinessInfo";
import LoadingAnimation from "./../../../src/Components/UI/LoadingAni";
import { useQuery } from "@apollo/client";

export default function account() {
  const { loading, error, data } = useQuery(GET_BUSINESS_INFO);
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
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
              {/* {data.business.map((business) => {
                return ( */}
                  <div className='flex-1 mt-14 mb-14 ml-10 mr-14 relative'>
                    <div className="flex flex-row justify-between mr-14">
                      <div className="flex items-center">
                        <div className="w-48 h-48 relative mb-4 mr-8">
                          <Image
                            src={data.business.image}
                            alt="logo"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          ></Image>
                        </div>
                        <h1 className="font-bold text-[28px]">{data.business.name}</h1>
                      </div>
                      <div className="items-center flex">
                        <Button className="btn btn-primary w-fit h-fit px-7 py-2 flex-1 flex items-center"><a href="/SellerDashboard/account/editBusiness">Edit</a></Button>
                      </div>
                    </div>
                    <div class="overflow-x-auto relative mt-7 flex justify-start">
                      <div>
                        <div className="mb-7">
                          <h1 className="font-bold text-[20px] pl-5 mb-3">Business Information</h1>
                          <h1 className="font-bold text-[18px] pl-5">Owner name</h1>
                          <p className="text-[16px] pl-5 mb-2">{data.business.owner.name}</p>
                          <h1 className="font-bold text-[18px] pl-5">Business description</h1>
                          <p className="text-[16px] pl-5 mb-2">{data.business.description}</p>
                          <h1 className="font-bold text-[18px] pl-5">Website link</h1>
                          <p className="text-[16px] pl-5 mb-2">{data.business.webLink}</p>
                          <h1 className="font-bold text-[18px] pl-5">Social media link</h1>
                          <p className="text-[16px] pl-5 mb-2">{data.business.socialMediaLink}</p>
                        </div>
                        <div className="mb-7">
                          <h1 className="font-bold text-[20px] pl-5 mb-3">Business Contacts</h1>
                          <h1 className="font-bold text-[18px] pl-5">Email</h1>
                          <p className="text-[16px] pl-5 mb-2">{data.business.email}</p>
                          <h1 className="font-bold text-[18px] pl-5">Phone</h1>
                          <p className="text-[16px] pl-5 mb-2">{data.business.phoneNumber}</p>
                        </div>
                        <div className="mb-7">
                          <h1 className="font-bold text-[20px] pl-5 mb-3">Business Location</h1>
                          <h1 className="font-bold text-[18px] pl-5">Province</h1>
                          <p className="text-[16px] pl-5 mb-2">{data.business.province}</p>
                          <h1 className="font-bold text-[18px] pl-5">District</h1>
                          <p className="text-[16px] pl-5 mb-2">{data.business.district}</p>
                          <h1 className="font-bold text-[18px] pl-5">Street address</h1>
                          <p className="text-[16px] pl-5 mb-2">{data.business.streetAddress}</p>
                          <h1 className="font-bold text-[18px] pl-5">Other description</h1>
                          <p className="text-[16px] pl-5 mb-2">{data.business.otherAddressDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* )
                })} */}
              </div>
            <Footer />
          </>
        </React.Fragment>
      )}
    </>
  );
}
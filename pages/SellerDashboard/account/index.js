import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "./../../../src/Components/UI/Navbar";
import Footer from "./../../../src/Components/UI/Footer";
import Sidebar from "./../../../src/Components/SellerDashboardbComponents/sidebar";
import Image from "next/image";
import Button from "./../../../src//Components/UI/Button"

export default function account() {

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
              <div className="flex items-center w-[40%]	justify-between	">
                <Image
                  src={"https://res.cloudinary.com/doxc03jzw/image/upload/v1670495179/yxrhdyjpe39honaiozc7.jpg"}
                  className="mb-4 w-48 h-48 rounded-full"
                  width={96}
                  height={96}
                ></Image>
                <h1 className="font-bold text-[28px] pl-5">Account name</h1>
              </div>
              <div className="items-center flex">
                <Button className="btn btn-primary w-fit h-fit px-7 py-2 flex-1 flex items-center"><a href="/SellerDashboard/account/editBusiness">Edit</a></Button>
              </div>
            </div>
            <div class="overflow-x-auto relative mt-7 flex justify-start">
              <div>
                <div className="mb-7">
                  <h1 className="font-bold text-[20px] pl-5 mb-3">Business Information</h1>
                  <h1 className="font-bold text-[18px] pl-5">Business name</h1>
                  <p className="text-[16px] pl-5 mb-2">Xyz Ltd</p>
                  <h1 className="font-bold text-[18px] pl-5">Business description</h1>
                  <p className="text-[16px] pl-5 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis sollicitudin congue. Fusce ut eros non mauris sagittis.</p>
                  <h1 className="font-bold text-[18px] pl-5">Website link</h1>
                  <p className="text-[16px] pl-5 mb-2">Xyzltd.com</p>
                  <h1 className="font-bold text-[18px] pl-5">Social media link</h1>
                  <p className="text-[16px] pl-5 mb-2">Xyzltd</p>
                </div>
                <div className="mb-7">
                  <h1 className="font-bold text-[20px] pl-5 mb-3">Business Contacts</h1>
                  <h1 className="font-bold text-[18px] pl-5">Email</h1>
                  <p className="text-[16px] pl-5 mb-2">Xyzltd.com</p>
                  <h1 className="font-bold text-[18px] pl-5">Phone</h1>
                  <p className="text-[16px] pl-5 mb-2">078888888888</p>
                </div>
                <div className="mb-7">
                  <h1 className="font-bold text-[20px] pl-5 mb-3">Business Location</h1>
                  <h1 className="font-bold text-[18px] pl-5">Province</h1>
                  <p className="text-[16px] pl-5 mb-2">Kigali</p>
                  <h1 className="font-bold text-[18px] pl-5">District</h1>
                  <p className="text-[16px] pl-5 mb-2">Kicukiro</p>
                  <h1 className="font-bold text-[18px] pl-5">Street address</h1>
                  <p className="text-[16px] pl-5 mb-2">KK 509 St</p>
                  <h1 className="font-bold text-[18px] pl-5">Other description</h1>
                  <p className="text-[16px] pl-5 mb-2">Near Nobleza Hotel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </React.Fragment>
  );
}
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../src/Components/UI/Navbar";
import Footer from "../../src/Components/UI/Footer";
import Sidebar from "../../src/Components/SellerDashboardbComponents/sidebar";

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
          <div className='flex-1'>
            Account
          </div>
        </div>              
        <Footer />
      </>
    </React.Fragment>
  );
}
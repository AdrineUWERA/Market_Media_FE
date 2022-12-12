import React, { useState,useContext } from "react";
import Head from "next/head";
import Navbar from "../../src/Components/UI/Navbar";
import Footer from "../../src/Components/UI/Footer";
import Sidebar from "../../src/Components/MyAccount/Sidebar";
import { GET_USER_ORDERS } from "../../src/Queries/UserQueries";
import { useQuery } from "@apollo/client";
import LoadingAnimation from "../../src/Components/UI/LoadingAni";
import Image from "next/image";
import {UserContext} from "../../src/Context/UserContext";

export default function AllProducts() {
  const { user } = useContext(UserContext);
  console.log(user);
  const { loading, error, data } = useQuery(
    GET_USER_ORDERS,
    {variables: { userId: user }}
  );
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
    return <p>Something Went Wrong</p>;
  }
  console.log(data);
  const orders = data.userOrders;
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
            <div className="flex flex-row justify-start relative">
              <Sidebar />
              <div className="flex-1 mt-14 mb-14 ml-10 mr-14 relative">
                <div className="flex flex-row justify-between">
                  <h1 className="font-bold text-[28px] pl-5">MY ORDERS</h1>
                </div>

                {orders.map((order) => (
                  <div class="overflow-x-auto ml-5 sm:rounded-lg mt-7 relative flex flex-row gap-y-1">
                    <div className="border-gray-200 border-2">
                      <Image
                        src={order.product.image}
                        width={200}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-col justify-center ml-10">
                      <div>
                        <span className="font-bold mr-3">Product name:</span>
                        <span className="pt-2 text-[#DBA61F] font-bold">
                          {order.product.name}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold mr-3">Seller Name:</span>
                        <span className="pt-2 text-[#DBA61F] font-bold">
                          {order.business.name}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold mr-3">Price:</span>
                        <span className="pt-2 text-[#DBA61F] font-bold">
                          {order.product.price} RWF
                        </span>
                      </div>
                      <div>
                        <span className="font-bold mr-3">Quantity:</span>
                        <span className="pt-2 text-[#DBA61F] font-bold">
                          {order.quantity}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold mr-3">
                          Shipping Address:
                        </span>
                        <span className="pt-2 text-[#DBA61F] font-bold">
                          {order.shippingAddress}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold mr-3">Shipping Method:</span>
                        <span className="pt-2 text-[#DBA61F] font-bold">
                          {order.shippingMethod}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Footer />
          </>
        </React.Fragment>
      )}
    </>
  );
}

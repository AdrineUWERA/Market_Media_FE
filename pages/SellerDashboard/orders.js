import React from "react";
import Head from "next/head";
import Navbar from "./../../src/Components/UI/Navbar";
import Footer from "./../../src/Components/UI/Footer";
import Sidebar from "./../../src/Components/SellerDashboardbComponents/sidebar";
import { BsFillCheckCircleFill } from "react-icons/bs"
import { RiCloseCircleFill } from "react-icons/ri"
import { GET_ORDERS } from "./../../src/Queries/Orders";
import LoadingAnimation from "./../../src/Components/UI/LoadingAni";
import { useQuery } from "@apollo/client";
import OrderStatusComplete from "./../../src/Components/OrderStatusComplete"
import OrderStatusIncomplete from "./../../src/Components/OrderStatusIncomplete"


export default function Orders() {
  const { loading, error, data } = useQuery(GET_ORDERS);
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
    return <p>Something Went Wrong</p>;
  };
  console.log(data);
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
            <div className='flex flex-row justify-start relative z-[1]'>
              <Sidebar />
              <div className='flex-1 mt-14 mb-14 ml-10 mr-14 relative'>
                <div className="flex flex-row justify-between">
                  <h1 className="font-bold text-[28px] pl-5">ORDERS</h1>
                </div>

                <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-7 relative">
                  <table class="w-full text-sm text-center  text-gray-500 border relative ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                      <tr>
                        <th scope="col" class="py-3 px-6">
                          No
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Customer name
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Email
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Phone
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Product
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Quantity
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Address
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Shipping method
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Order date
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Complete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.businessOrders.map((order, index) => {
                        return (index % 2 ? (
                          <>
                            <tr class="bg-gray-100 border-b">
                              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {index + 1}
                              </th>
                              <td class="py-4 px-6 flex justify-center">
                                {order.user.name}
                              </td>
                              <td class="py-4 px-6">
                                {order.user.email}
                              </td>
                              <td class="py-4 px-6">
                                {order.user.phoneNumber}
                              </td>
                              <td class="py-4 px-6">
                                {order.product.name}
                              </td>
                              <td class="py-4 px-6">
                                {order.quantity}
                              </td>
                              <td class="py-4 px-6">
                                {order.shippingAddress}
                              </td>
                              <td class="py-4 px-6">
                                {order.shippingMethod}
                              </td>
                              <td class="py-4 px-6">
                                {order.orderDate}
                              </td>
                              <td class="py-4 px-6 flex justify-center">
                              {order.status === "complete" ?
                                  // <BsFillCheckCircleFill className="h-8 w-8 text-[#50C878]" />
                                  <OrderStatusComplete orderId={order.id} />
                                  :
                                  <OrderStatusIncomplete orderId={order.id} />
                                }
                              </td>
                            </tr>
                          </>
                        ) : (
                          <>
                            <tr class=" bg-white border-b relative">
                              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {index + 1}
                              </th>
                              <td class="py-4 px-6 flex justify-center">
                                {order.user.name}
                              </td>
                              <td class="py-4 px-6">
                                {order.user.email}
                              </td>
                              <td class="py-4 px-6">
                                {order.user.phoneNumber}
                              </td>
                              <td class="py-4 px-6">
                                {order.product.name}
                              </td>
                              <td class="py-4 px-6">
                                {order.quantity}
                              </td>
                              <td class="py-4 px-6">
                                {order.shippingAddress}
                              </td>
                              <td class="py-4 px-6">
                                {order.shippingMethod}
                              </td>
                              <td class="py-4 px-6">
                                {order.orderDate}
                              </td>
                              <td class="py-4 px-6 flex justify-center	">
                                {order.status === "complete" ?
                                  // <BsFillCheckCircleFill className="h-8 w-8 text-[#50C878]" />
                                  <OrderStatusComplete orderId={order.id} />
                                  :
                                  <OrderStatusIncomplete orderId={order.id} />
                                }
                              </td>
                            </tr>
                          </>
                        ))
                      })}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
            <Footer />
          </>
        </React.Fragment>
      )}
    </>
  )
}
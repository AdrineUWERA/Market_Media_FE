import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "./../../../src/Components/UI/Navbar";
import Footer from "./../../../src/Components/UI/Footer";
import Sidebar from "./../../../src/Components/SellerDashboardbComponents/sidebar";
import Button from "./../../../src//Components/UI/Button"
import { BsThreeDotsVertical} from "react-icons/bs"
import { GET_BUSINESS_PRODUCTS } from "./../../../src/Queries/businessProducts";
import { useQuery, gql } from "@apollo/client";
import LoadingAnimation from "./../../../src/Components/UI/LoadingAni";
import Image from "next/image";

export default function SellerDashboard() {
  const { loading, error, data } = useQuery(GET_BUSINESS_PRODUCTS);
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
    return <p>Something Went Wrong</p>;
  };

  // const products = data.businessProducts;
  // console.log(products);
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
                  <h1 className="font-bold text-[28px] pl-5">STOCK</h1>
                  <Button><a href="/SellerDashboard/stock/addProduct">+ Add item</a></Button>
                </div>

                <div class="overflow-x-auto shadow-md sm:rounded-lg mt-7 relative">
                  <table class="w-full text-sm text-center  text-gray-500 border relative">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                      <tr>
                        <th scope="col" class="py-3 px-6">
                          No
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Picture
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Product name
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Measurement unit
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Quantity per unit
                        </th>
                        <th scope="col" class="py-3 px-6">
                          price
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Date added
                        </th>
                        <th scope="col" class="py-3 pr-2">
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.businessProducts.map((product, index) => {
                        return(index % 2  ? (
                          <>
                          <tr class=" bg-gray-100 border-b relative">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                              {index + 1}
                            </th>
                            <td class="py-4 px-6 flex justify-center">
                              <div>
                                <Image
                                  src={product.image}
                                  alt=""
                                  width={50}
                                  // layout="fill"
                                  height={50}
                                  className="shadow align-middle border-none object-center "
                                ></Image>
                              </div>
                            </td>
                            <td class="py-4 px-6">
                              {product.name}
                            </td>
                            <td class="py-4 px-6">
                              {product.unit}
                            </td>
                            <td class="py-4 px-6">
                              {product.quantity}
                            </td>
                            <td class="py-4 px-6">
                              {product.price}
                            </td>
                            <td class="py-4 px-6">
                              {product.dateAdded}
                            </td>
                            <td class="py-4 pr-2">
                              <div className="group relative cursor-pointer">
                                <BsThreeDotsVertical />
                                <div className="hidden group-hover:inline group-hover:max-h-[400px]	group-hover:min-w-max	group-hover:top-full group-hover:z-[1000] absolute top-0	right-[15%]	box-border	w-full	overflow-hidden	max-h-0	rounded bg-white shadow-md">
                                  <button type="button" className="group-hover:pt-2	group-hover:border-t-[1px] block bg-white w-full py-[0.375rem] py-[0.375rem] px-[0.5rem] text-[12px] text-left hover:bg-[#BBB]">Edit</button>
                                  <button type="button" className="group-hover:pb-[0.3rem] block bg-white w-full py-[0.375rem] py-[0.375rem] px-[0.5rem] text-[12px] text-left hover:bg-[#BBB]" >Remove</button>
                                </div>
                              </div>
                            </td>
                          </tr>
                          </>
                          ) : (
                          <>
                          <tr class="bg-white border-b">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                              {index + 1}
                            </th>
                            <td class="py-4 px-6 flex justify-center">
                              <div>
                                <Image
                                  src={product.image}
                                  alt=""
                                  width={50}
                                  // layout="fill"
                                  height={50}
                                  className="shadow align-middle border-none object-center "
                                ></Image>
                              </div>
                            </td>
                            <td class="py-4 px-6">
                              {product.name}
                            </td>
                            <td class="py-4 px-6">
                              {product.unit}
                            </td>
                            <td class="py-4 px-6">
                              {product.quantity}
                            </td>
                            <td class="py-4 px-6">
                              {product.price}
                            </td>
                            <td class="py-4 px-6">
                              {product.dateAdded}
                            </td>
                            <td class="py-4 pr-2">
                              <div className="group relative cursor-pointer">
                                <BsThreeDotsVertical />
                                <div className="hidden group-hover:inline group-hover:max-h-[400px]	group-hover:min-w-max	group-hover:top-full group-hover:z-[1000] absolute top-0	right-[15%]	box-border	w-full	overflow-hidden	max-h-0	rounded bg-white shadow-md">
                                  <button type="button" className="group-hover:pt-2	group-hover:border-t-[1px] block bg-white w-full py-[0.375rem] py-[0.375rem] px-[0.5rem] text-[12px] text-left hover:bg-[#BBB]">Edit</button>
                                  <button type="button" className="group-hover:pb-[0.3rem] block bg-white w-full py-[0.375rem] py-[0.375rem] px-[0.5rem] text-[12px] text-left hover:bg-[#BBB]" >Remove</button>
                                </div>
                              </div>
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
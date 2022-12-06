import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../src/Components/UI/Navbar";
import Footer from "../../src/Components/UI/Footer";
import Sidebar from "../../src/Components/SellerDashboardbComponents/sidebar";
import Button from "../../src//Components/UI/Button"
import { IoMdCheckmarkCircle } from "react-icons/io"
import { BsThreeDotsVertical} from "react-icons/bs"
import { GET_BUSINESS_PRODUCTS } from "./../../src/Queries/businessProducts";
import { useQuery, gql } from "@apollo/client";
import LoadingAnimation from "./../../src/Components/UI/LoadingAni";
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
            <hr className="mt-1.5"></hr>
            <div className='flex flex-row justify-start'>
              <Sidebar />
              <div className='flex-1 mt-14 mb-14 ml-10 mr-14'>
                <div className="flex flex-row justify-between">
                  <h1 className="font-bold text-[28px] pl-5">STOCK</h1>
                  <Button>+ Add item</Button>
                </div>

                <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-7">
                  <table class="w-full text-sm text-center  text-gray-500 border">
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
                          <tr class=" bg-gray-100 border-b">
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
                              <BsThreeDotsVertical/>
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
                              <BsThreeDotsVertical/>
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
      )};
    </>
  )
}
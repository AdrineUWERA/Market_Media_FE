import React from "react";
import Head from "next/head";
import Navbar from "./../../src/Components/UI/Navbar";
import Footer from "./../../src/Components/UI/Footer";
import Sidebar from "./../../src/Components/SellerDashboardbComponents/sidebar";
import { BsFillCheckCircleFill } from "react-icons/bs"
import { RiCloseCircleFill } from "react-icons/ri"

export default function Orders() {
  return (
    <>
        <React.Fragment>
          <Head>
            <title>Market Media</title>
            <meta name="description" content="Welcome to market media" />
          </Head>
          <>
            <Navbar />
            <hr className="mt-1.5"></hr>
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
                      {/* {data.businessProducts.map((product, index) => { */}
                      {/* return (index % 2 ? ( */}
                      {/* <> */}
                      <tr class="bg-white border-b">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                          {/* {index + 1} */}
                          1
                        </th>
                        <td class="py-4 px-6 flex justify-center">
                        John Doe
                        </td>
                        <td class="py-4 px-6">
                        xyz@gmail.com                        
                        </td>
                        <td class="py-4 px-6">
                        0788888
                        </td>
                        <td class="py-4 px-6">
                        Cream                        
                        </td>
                        <td class="py-4 px-6">
                        1
                        </td>
                        <td class="py-4 px-6">
                        KK 509 St
                        </td>
                        <td class="py-4 px-6">
                        Vuba vuba
                        </td>
                        <td class="py-4 px-6">
                        2022-10-10
                        </td>
                        <td class="py-4 px-6 flex justify-center">
                        <BsFillCheckCircleFill className="h-8 w-8 text-[#50C878]"/>
                        </td>
                      </tr>
                      {/* </>
                        ) : ( */}
                      {/* <> */}
                      <tr class=" bg-gray-100 border-b relative">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                          2
                        </th>
                        <td class="py-4 px-6 flex justify-center">
                        John Doe
                        </td>
                        <td class="py-4 px-6">
                        xyz@gmail.com                        
                        </td>
                        <td class="py-4 px-6">
                        0788888
                        </td>
                        <td class="py-4 px-6">
                        Cream                        
                        </td>
                        <td class="py-4 px-6">
                        1
                        </td>
                        <td class="py-4 px-6">
                        KK 509 St
                        </td>
                        <td class="py-4 px-6">
                        Vuba vuba
                        </td>
                        <td class="py-4 px-6">
                        2022-10-10
                        </td>
                        <td class="py-4 px-6 flex justify-center	">
                        <RiCloseCircleFill className="h-9 w-9 text-[#ED2939]"/>
                        </td>
                      </tr>
                      {/* </> */}
                      {/* )) */}
                      {/* })} */}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
            <Footer />
          </>
        </React.Fragment>
      {/* )}; */}
    </>
  )
}
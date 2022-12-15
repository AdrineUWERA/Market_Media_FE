import React from 'react'
import Head from "next/head";
import Navbar from "./../../../../src/Components/UI/Navbar";
import Footer from "./../../../../src/Components/UI/Footer";
import Sidebar from "./../../../../src/Components/SellerDashboardbComponents/sidebar";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {GET_PRODUCT} from "./../../../../src/Queries/Product"
import EditProductForm from "./../../../../src/Components/SellerDashboardbComponents/EditProductForm"
import LoadingAnimation from "./../../../../src/Components/UI/LoadingAni";


export default function id() {
    const router = useRouter();
    const id = router.query.id;
    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { id },
      });
    if (loading) return <LoadingAnimation />;
    if (error) {
        console.log(error);
        return <p>Something Went Wrong</p>;
    }
    console.log(data.product);
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
                        <div className="flex flex-row justify-start">
                            <Sidebar />
                            <div className="flex-1 mt-14 mb-14 mr-32">
                                <div className="flex justify-center w-3/5 ml-24">
                                    <h1 className="font-bold text-[28px] ">EDIT BUSINESS</h1>
                                </div>
                                <div class="overflow-x-auto relative mt-7 flex justify-start">
                                    <EditProductForm product={data.product} />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
                </React.Fragment>
            )}
        </>
    );
}

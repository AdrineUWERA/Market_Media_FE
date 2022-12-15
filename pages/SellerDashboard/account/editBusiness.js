import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import FormData from 'form-data';
import Head from "next/head";
import Navbar from "./../../../src/Components/UI/Navbar";
import Footer from "./../../../src/Components/UI/Footer";
import Sidebar from "./../../../src/Components/SellerDashboardbComponents/sidebar";
import { GET_CATEGORIES } from "./../../../src/Queries/CategoriesQuery";
import { ADD_PRODUCT } from "./../../../src/Mutations/product";
import { useQuery, useMutation, gql } from "@apollo/client";
import LoadingAnimation from "./../../../src/Components/UI/LoadingAni";
import Image from "next/image";
import { useRouter } from 'next/router';
import useAmutation from "./../../../src/Components/CustomHook/useMutation";
import { GET_BUSINESS_INFO } from "./../../../src/Queries/BusinessInfo";
import { BusinessContext } from "../../../src/Context/updateBusinessProfile";
import EditBusinessForm from "../../../src/Components/SellerDashboardbComponents/EditBusinessForm";


export default function addProduct() {

    const router = useRouter();
    const { data, loading, error } = useQuery(GET_BUSINESS_INFO);

    if (loading) return <LoadingAnimation />;
    if (error) {
        console.log(error);
        return <p>Something Went Wrong</p>;
    }

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
                        <div className="flex flex-row justify-start">
                            <Sidebar />
                            <div className="flex-1 mt-14 mb-14 mr-32">
                                <div className="flex justify-center w-3/5 ml-24">
                                    <h1 className="font-bold text-[28px] ">EDIT BUSINESS</h1>
                                </div>
                                <div class="overflow-x-auto relative mt-7 flex justify-start">
                                    <EditBusinessForm business={data.business} />
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
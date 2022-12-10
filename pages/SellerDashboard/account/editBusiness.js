import React, { useEffect, useState } from "react";
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

export default function addProduct() {
    const router = useRouter();
    //   let date;
    // let dateAdded;
    let url;
    // let image;
    const [previewImage, setPreviewImage] = useState("https://res.cloudinary.com/doxc03jzw/image/upload/v1670495179/yxrhdyjpe39honaiozc7.jpg");
    const [image_url, setImageUrl] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [unit, setUnit] = useState("");
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    //   const [dateAdded, setDateAdded] = useState();
    let today = new Date();
    let date =
        today.getMonth() + " " + (today.getDate() + 1) + " " + today.getFullYear();
    let dateAdded = date.toString();
    console.log(date);
    console.log(dateAdded);
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    const [addProduct] = useMutation(ADD_PRODUCT, {
        variables: {
            image,
            name,
            description,
            categoryId,
            unit,
            quantity,
            price,
            manufacturer,
            dateAdded,
        },
    });

    const handleImageUpload = async () => {
        const data = new FormData();
        data.append("file", image_url);
        data.append("upload_preset", "marketMedia");
        data.append("cloud_name", "doxc03jzw");

        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/doxc03jzw/image/upload",
            data
        );

        setImage(res.data.url);
        return res.data.url;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const url = await handleImageUpload();
        // setImage(url);
        // image=url.toString();
        console.log(url);
        console.log(image);
        // console.log(image);
        if (
            (image_url === "",
                name === "" ||
                description === "" ||
                categoryId === "" ||
                unit === "" ||
                price === "")
        ) {
            return alert("Please fill in all fields");
        }

        // setDateAdded(date);
        addProduct(
            image,
            name,
            description,
            categoryId,
            unit,
            quantity,
            price,
            manufacturer,
            dateAdded
        );

        setName("");
        setDescription("");
        setManufacturer("");
        setCategoryId("");
        setUnit("");
        setQuantity("");
        setPrice("");
    };

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
                        <hr className="mt-1.5"></hr>
                        <div className="flex flex-row justify-start">
                            <Sidebar />
                            <div className="flex-1 mt-14 mb-14 mr-32">
                                <div className="flex justify-center w-3/5 ml-24">
                                    <h1 className="font-bold text-[28px] ">EDIT BUSINESS</h1>
                                </div>
                                <div class="overflow-x-auto relative mt-7 flex justify-start">
                                    <form className="w-3/5 mt-4 ml-24" onSubmit={onSubmit}>
                                        <Image
                                            src={previewImage}
                                            className="mb-4 object-cover w-52 h-52 rounded-full"
                                            width={96}
                                            height={96}
                                        ></Image>
                                        <input
                                            type="file"
                                            id="image_url"
                                            name="image_url"
                                            accept="image/*"
                                            onChange={(e) => {
                                                if (e.target.files) {
                                                    const file = e.target.files[0];
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        setPreviewImage(reader.result);
                                                        setImageUrl(reader.result);
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                            style={{ display: "none" }}
                                        />
                                        {/* {previewImage && (
                        <Image
                          src={previewImage}
                          className="mb-4 object-cover w-52 h-52 rounded-full"
                          width={96}
                          height={96}
                        ></Image>
                      )} */}
                                        {/* {errors.image_url && <p>There was an error uploading image</p>} */}
                                        <div class="mb-6">
                                            <label
                                                htmlFor="image_url"
                                                class="btn btn-primary px-7 py-2 bg-[#243C74] text-white font-bold shadow-md rounded-md"
                                            >
                                                Click to edit logo
                                            </label>
                                        </div>
                                        <div className="mb-7">
                                            <h1 className="font-bold text-[20px] mb-3">Business Information</h1>
                                            <div class="mb-6">
                                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Business name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Business name"
                                                    autocomplete="off"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div class="mb-6">
                                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900">Business description</label>
                                                <textarea
                                                    type="text"
                                                    id="description"
                                                    value={description}
                                                    className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pt-2.5 pl-2.5 pb-14"
                                                    placeholder="Business description"
                                                    autocomplete="off"
                                                    required
                                                    onChange={(e) => setDescription(e.target.value)}
                                                />
                                            </div>
                                            <div class="mb-6">
                                                <label for="website_link" class="block mb-2 text-sm font-medium text-gray-900">Website link</label>
                                                <input
                                                    type="text"
                                                    id="website_link"
                                                    className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Website link"
                                                    autocomplete="off"
                                                    required
                                                //   value={website_link}
                                                //   onChange={(e) => setWebsite(e.target.value)}
                                                />
                                            </div>
                                            <div class="mb-6">
                                                <label for="social_link" class="block mb-2 text-sm font-medium text-gray-900">Social media link</label>
                                                <input
                                                    type="text"
                                                    id="social_link"
                                                    className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Social media link"
                                                    autocomplete="off"
                                                    required
                                                //   value={social_link}
                                                //   onChange={(e) => setSocial(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-7">
                                            <h1 className="font-bold text-[20px] mb-3">Business Contacts</h1>
                                            <div class="mb-6">
                                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Business Email"
                                                    autocomplete="off"
                                                    required
                                                //   value={name}
                                                //   onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div class="mb-6">
                                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Business phone number"
                                                    autocomplete="off"
                                                    required
                                                //   value={name}
                                                //   onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-7">
                                            <h1 className="font-bold text-[20px] mb-3">Business Location</h1>
                                            <div class="mb-6">
                                                <label for="province" class="block mb-2 text-sm font-medium text-gray-900">Province</label>
                                                <input
                                                    type="text"
                                                    id="province"
                                                    className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="province"
                                                    autocomplete="off"
                                                    required
                                                //   value={name}
                                                //   onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div class="mb-6">
                                                <label for="district" class="block mb-2 text-sm font-medium text-gray-900">District</label>
                                                <input
                                                    type="text"
                                                    id="district"
                                                    className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="District"
                                                    autocomplete="off"
                                                    required
                                                //   value={name}
                                                //   onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div class="mb-6">
                                                <label for="street" class="block mb-2 text-sm font-medium text-gray-900">Street address</label>
                                                <input
                                                    type="text"
                                                    id="street"
                                                    className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Street address"
                                                    autocomplete="off"
                                                    required
                                                //   value={name}
                                                //   onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div class="mb-6">
                                                <label for="other_description" class="block mb-2 text-sm font-medium text-gray-900">Other description</label>
                                                <input
                                                    type="text"
                                                    id="other_description"
                                                    className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                    placeholder="Other description"
                                                    autocomplete="off"
                                                    required
                                                //   value={name}
                                                //   onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div class="mt-10">
                                            <button
                                                type="submit"
                                                class="btn btn-primary px-14 py-2 bg-[#243C74] text-white font-bold shadow-md rounded-md"
                                            >
                                                Submit
                                            </button>
                                            <a href="/SellerDashboard/account" class="btn btn-primary px-14 py-2 bg-white border border-gray-500 text-gray-900 font-bold shadow-md rounded-md ml-7">Cancel</a>
                                        </div>
                                    </form>
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
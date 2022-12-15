import React, { useContext, useState } from "react";
import axios from 'axios';
import FormData from 'form-data';
import { GET_CATEGORIES } from "./../../Queries/CategoriesQuery";
import { ProductContext } from "./../../Components/addProduct";
import { useQuery, useMutation, gql } from "@apollo/client";
import LoadingAnimation from "./../../Components/UI/LoadingAni";
import Image from "next/image";

export default function EditProductForm({ product }) {

    const { updatingProduct } = useContext(ProductContext);
    const [id, setId] = useState(product.id);
    const [previewImage, setPreviewImage] = useState(product.image);
    const [image_url, setImageUrl] = useState(product.image);
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [manufacturer, setManufacturer] = useState(product.manufacturer);
    const [categoryId, setCategoryId] = useState(product.category.id);
    const [unit, setUnit] = useState(product.unit);
    const [quantity, setQuantity] = useState(product.quantity);
    const [price, setPrice] = useState(product.price);

    const { loading, error, data } = useQuery(GET_CATEGORIES);
    let today = new Date();
    let date = today.getMonth() + " " + (today.getDate() + 1) + " " + today.getFullYear();
    let dateAdded = date.toString();

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", image_url);
        data.append("upload_preset", "marketMedia");
        data.append("cloud_name", "doxc03jzw");

        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/doxc03jzw/image/upload",
            data
        );

        const image = res.data.url;
        await updatingProduct({ id, image, name, description, categoryId, unit, quantity, price, manufacturer, dateAdded })

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
                <form className="w-3/5 mt-4 ml-24" onSubmit={onSubmit}>
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
                    {previewImage && (
                        <div className="w-48 h-48 relative mb-4">
                            <Image
                                src={previewImage}
                                alt="logo"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            ></Image>
                        </div>
                    )}
                    <div class="mb-6">
                        <label
                            htmlFor="image_url"
                            class="btn btn-primary px-7 py-2 bg-[#243C74] text-white font-bold shadow-md rounded-md"
                        >
                            Click to edit image
                        </label>
                    </div>
                    <div class="mb-6">
                        <input
                            type="text"
                            id="name"
                            className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Product name"
                            autocomplete="off"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div class="mb-6">
                        <textarea
                            type="text"
                            id="description"
                            value={description}
                            className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pt-2.5 pl-2.5 pb-14"
                            placeholder="Product description"
                            autocomplete="off"
                            required
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div class="mb-6">
                        <input
                            type="text"
                            id="manufacturer"
                            className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Manufacturer"
                            autocomplete="off"
                            required
                            value={manufacturer}
                            onChange={(e) => setManufacturer(e.target.value)}
                        />
                    </div>
                    <div class="mb-6">
                        <select
                            id="categoryId"
                            className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Category
                            </option>
                            {data.categories.map((category) => {
                                return (
                                    <option value={category.id}>{category.name}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div class="mb-6">
                        <input
                            type="text"
                            id="unit"
                            className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Unit used in measuring the product"
                            autocomplete="off"
                            required
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                        />
                    </div>
                    <div class="mb-6">
                        <input
                            type="text"
                            id="quantity"
                            className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Quantity sold per unit"
                            autocomplete="off"
                            required
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <div class="mb-6">
                        <input
                            type="text"
                            id="price"
                            className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Price per unit"
                            autocomplete="off"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div class="mt-10">
                        <button
                            type="submit"
                            class="btn btn-primary px-14 py-2 bg-[#243C74] text-white font-bold shadow-md rounded-md"
                        >
                            Submit
                        </button>
                        <a href="/SellerDashboard/stock" class="btn btn-primary px-14 py-2 bg-white border border-gray-500 text-gray-900 font-bold shadow-md rounded-md ml-7">Cancel</a>
                    </div>
                </form>
            )}
        </>
    )
};
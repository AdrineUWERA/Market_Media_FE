import React, { useContext, useState } from "react";
import axios from 'axios';
import FormData from 'form-data';
import Head from "next/head";
import Navbar from "./../../../src/Components/UI/Navbar";
import Footer from "./../../../src/Components/UI/Footer";
import Sidebar from "./../../../src/Components/SellerDashboardbComponents/sidebar";
import { GET_CATEGORIES } from "./../../../src/Queries/CategoriesQuery";
import { ADD_PRODUCT } from "./../../../src/Mutations/product";
import { ProductContext } from "./../../../src/Components/addProduct";
import { useQuery, useMutation, gql } from "@apollo/client";
import LoadingAnimation from "./../../../src/Components/UI/LoadingAni";
import Image from "next/image";
import useAmutation from "./../../../src/Components/CustomHook/useMutation";

export default function addProduct() {
  //   let date;
  // let dateAdded;
  let url;
  // let image;
  const { addingProduct } = useContext(ProductContext);
  const [previewImage, setPreviewImage] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [unit, setUnit] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  // const [image, setImage] = useState('');
  //   const [dateAdded, setDateAdded] = useState();
  let today = new Date();
  let date =
    today.getMonth() + " " + (today.getDate() + 1) + " " + today.getFullYear();
  let dateAdded = date.toString();
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  // const [addProduct] = useMutation(ADD_PRODUCT, {
  //   variables: {
  //     image,
  //     name,
  //     description,
  //     categoryId,
  //     unit,
  //     quantity,
  //     price,
  //     manufacturer,
  //     dateAdded,
  //   },
  // });

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
    // return res.data.url;
  };

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

    const image = res.data.url;    // setImage(url);
    // image=url.toString();
    // console.log(url);
    // console.log(image);
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
    console.log(image);
    await addingProduct({image,name,description,categoryId,unit,quantity,price,manufacturer,dateAdded})
    // setDateAdded(date);
    // addProduct(
    //   image,
    //   name,
    //   description,
    //   categoryId,
    //   unit,
    //   quantity,
    //   price,
    //   manufacturer,
    //   dateAdded
    // );

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
                  <h1 className="font-bold text-[28px] ">ADD PRODUCT</h1>
                </div>
                <div class="overflow-x-auto relative mt-7 flex justify-start">
                  <form className="w-3/5 mt-4 ml-24" onSubmit={onSubmit}>
                    <input
                      type="file"
                      id="image_url"
                      name="image_url"
                      accept="image/*"
                      // onChange={(e) => setImage(e.target.value)}
                      onChange={async (e) => {
                        if (e.target.files) {
                          const file = e.target.files[0];
                          const reader = new FileReader();
                          reader.onloadend = async () => {
                            setPreviewImage(reader.result);
                            setImageUrl(reader.result);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      style={{ display: "none" }}
                    />
                    {previewImage && (
                      <div className="w-52 h-52 relative mb-4">
                        <Image
                          src={previewImage}
                          alt="Picture of the product"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                        ></Image>
                      </div>
                      // <Image
                      //   src={previewImage}
                      //   className="mb-4 object-cover w-52 h-52 rounded-full"
                      //   width={96}
                      //   height={96}
                      // ></Image>
                    )}
                    {/* {errors.image_url && <p>There was an error uploading image</p>} */}
                    <div class="mb-6">
                      <label
                        htmlFor="image_url"
                        class="btn btn-primary px-7 py-2 bg-[#243C74] text-white font-bold shadow-md rounded-md"
                      >
                        Click to add image
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
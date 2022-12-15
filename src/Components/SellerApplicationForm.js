import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { BusinessContext } from "./../Context/updateBusinessProfile";
import axios from 'axios';

export default function SellerApplicationForm() {
    const [previewImage, setPreviewImage] = useState("");
    const [previewDoc, setPreviewDoc] = useState("");
    const [image_url, setImageUrl] = useState("");
    const [document_url, setDocumentUrl] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [webLink, setWebLink] = useState("");
    const [socialMediaLink, setSocialMediaLink] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [otherAddressDescription, setOtherAddressDescription] = useState("");

    const { creatingBusiness } = useContext(BusinessContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        const legal = new FormData();

        data.append("file", image_url);
        legal.append("file", document_url);

        data.append("upload_preset", "marketMedia");
        legal.append("upload_preset", "marketMedia");

        data.append("cloud_name", "doxc03jzw");
        legal.append("cloud_name", "doxc03jzw");
    
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/doxc03jzw/image/upload",
          data
        );

        const legal_res = await axios.post(
            "https://api.cloudinary.com/v1_1/doxc03jzw/image/upload",
            legal
          );

        const image = res.data.url;    
        const legalDocument = legal_res.data.url;    

        await creatingBusiness({image,name,description,webLink,socialMediaLink,email,phoneNumber,province,district,streetAddress,otherAddressDescription,legalDocument})
    }
    
    return (
        <div className='border-2 w-4/5 flex flex-col items-center m-auto mt-14 mb-24'>
            <h1 className="font-bold text-[32px] my-14">Seller Application Form</h1>
            <form className="mt-4 flex flex-col items-center w-4/5 mb-14 pb-7" onSubmit={handleSubmit}>
                <input
                    type="file"
                    id="image_url"
                    name="image_url"
                    accept="image/*"
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
                )}
                <div class="mb-14">
                    <label
                        htmlFor="image_url"
                        class="btn btn-primary px-7 py-2 bg-[#243C74] text-white font-bold shadow-md rounded-md"
                    >
                        Add business logo
                    </label>
                </div>
                <div className="mb-7 w-full">
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
                            className="bg-white border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pt-2.5 pl-2.5 pb-14"
                            placeholder="Business description"
                            autocomplete="off"
                            required
                        value={description}
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
                        value={webLink}
                        onChange={(e) => setWebLink(e.target.value)}
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
                        value={socialMediaLink}
                        onChange={(e) => setSocialMediaLink(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-7 w-full">
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-7 w-full">
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
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
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
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
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
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
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
                        value={otherAddressDescription}
                        onChange={(e) => setOtherAddressDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-7 w-full">
                    <h1 className="font-bold text-[20px] mb-3">Legal documents</h1>
                    <div className='flex justify-between items-center mb-7'>
                        <p className=''>Add RDB certificate</p>
                        <div className=' flex items-center'>
                            <input
                                type="file"
                                id="document_url"
                                name="document_url"
                                onChange={async (e) => {
                                    if (e.target.files) {
                                        const file = e.target.files[0];
                                        const reader = new FileReader();
                                        reader.onloadend = async () => {
                                            setPreviewDoc(reader.result);
                                            setDocumentUrl(reader.result);
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                                style={{ display: "none" }}
                            />
                            <div class="">
                                <label
                                    htmlFor="document_url"
                                    class="btn btn-primary px-7 py-2 bg-[#DBA61F] text-white font-bold shadow-md rounded-md"
                                >
                                    Upload document (PDF)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10 w-3/5 flex justify-between">
                    <button
                        type="submit"
                        class="btn btn-primary px-24 py-2 bg-[#243C74] text-white font-bold shadow-md rounded-md"
                    >
                        Submit
                    </button>
                    <a href="/SellerDashboard/account" class="btn btn-primary px-24 py-2 bg-white border border-gray-500 text-gray-900 font-bold shadow-md rounded-md">Cancel</a>
                </div>
            </form>
        </div>
    )
}

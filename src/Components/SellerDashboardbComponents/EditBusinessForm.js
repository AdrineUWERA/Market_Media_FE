import React, { useContext, useState } from "react";
import Image from "next/image";
import FormData from 'form-data';
import axios from 'axios';
import { BusinessContext } from "./../../../src/Context/updateBusinessProfile";


export default function EditBusinessForm({ business }) {
    const { updatingBusiness } = useContext(BusinessContext);
    const [previewImage, setPreviewImage] = useState(business.image);
    const [image_url, setImageUrl] = useState(business.image);
    const [name, setName] = useState(business.name);
    const [description, setDescription] = useState(business.description);
    const [webLink, setWebLink] = useState(business.webLink);
    const [socialMediaLink, setSocialMediaLink] = useState(business.socialMediaLink);
    const [email, setEmail] = useState(business.email);
    const [phoneNumber, setPhoneNumber] = useState(business.phoneNumber);
    const [province, setProvince] = useState(business.province);
    const [district, setDistrict] = useState(business.district);
    const [streetAddress, setStreetAddress] = useState(business.streetAddress);
    const [otherAddressDescription, setOtherAddressDescription] = useState(business.otherAddressDescription);

    const handleSubmit = async (e) => {
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
        if (
          (image_url === "",
            name === "" ||
            description === "" ||
            webLink === "" ||
            socialMediaLink === "" ||
            email === "" ||
            phoneNumber === "" ||
            province === "" ||
            district === "" ||
            streetAddress === "" || 
            otherAddressDescription === "")
        ) {
          return alert("Please fill in all fields");
        }
        await updatingBusiness({image,name,description,webLink,socialMediaLink,email,phoneNumber,province,district,streetAddress,otherAddressDescription})
        
        // setName("");
        // setDescription("");
        // setManufacturer("");
        // setCategoryId("");
        // setUnit("");
        // setQuantity("");
        // setPrice("");
      };

    return (
        <form className="w-3/5 mt-4 ml-24" onSubmit={handleSubmit}>
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
    )
};
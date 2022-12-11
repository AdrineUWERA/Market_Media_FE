import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GET_SELLER_DETAILS } from "../../Queries/SellerQuery";
import LoadingAnimation from "../UI/LoadingAni";
import { useQuery } from "@apollo/client";
import Modal from "../Review/Modal";
import { Fragment } from "react";
import { useState } from "react";


const SellerDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const id = router.query.id;
    console.log("id", id);
    const { loading, error, data } = useQuery(GET_SELLER_DETAILS, {
        variables: { id },
    });

    if (loading) return <LoadingAnimation />;
    if (error) {
        console.log(error);
    }
    console.log(data)
    const sellerDetails = data.business;
    console.log(sellerDetails);
    

    return (
        <>
        {!loading && !error && (
            <Fragment>
            <div className="flex flex-col py-30">
            <div className="flex flex-row px-32">
                <div className="border-gray-200 border-2">
                    <Image src={sellerDetails.image} width={370} height={200} />
                    <div className="pl-20 px-10 py-5 ml-12">
                        <button type="button" className="bg-[#DBA61F] hover:bg-[#243C74] text-white font-bold py-2 px-4 rounded">Products</button>
                    </div>
                </div>
                <div className="flex flex-col pl-20 justify-center">
                    <h1 className="text-5xl font-bold pb-12">
                        {sellerDetails.name}
                    </h1>
                    <p className="text-2xl pb-5">
                        <span className="font-bold">Location: </span>
                        {sellerDetails.location}
                    </p>
                    <p className="text-2xl pb-5">
                        <span className="font-bold">About Me: </span>
                        {sellerDetails.about}
                    </p>
                    <p className="text-2xl pb-5">
                        <span className="font-bold">Social Media: </span>
                        {sellerDetails.socialMedia}
                    </p>
                </div>
                
            </div>
            <div className="justify-content py-20 px-10 w-200 ">
                <div className="flex justify-between h-3 space-x-20">
                <div className="px-20">
                    <h1 className="text-3xl font-bold">
                        Reviews
                    </h1>
                </div>
                <div className="px-20">
                    <button type="button" className="bg-[#DBA61F] hover:bg-[#243C74] text-white font-bold py-2 px-4 rounded " onClick={() =>
                    setShowModal(true)}>Add Review</button>
                </div> 
                </div>
            </div> 
            
                
                <div className="mx-10 rounded-lg py-10 border-2 ml-4 mr-4 mb-10">
                <div className="flex flex-row justify-between">
                <div className="px-10 py-2">
                    <h1 className="text-2xl font-bold">{sellerDetails.review.user.name}</h1>
                </div>
                <div className="px-20 py-2 mr-6">
                    <p className="text-1xl"><span className="font-bold">Rating: </span>{sellerDetails.review.rating}</p>      
                </div>
                </div>
                <p className="text-1.2xl px-10 py-5">{sellerDetails.review.comment}</p>

            </div> 
            <Modal isVisible={showModal} onClose={() =>
            setShowModal(false)}>
                <div className="p-6">
                <h3 className="text-2xl font-bold mb-5">Add Review</h3>
                <form>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                            Rating
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="rating"
                            type="number"
                            placeholder="Rating"
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                            Comment
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="comment"
                            type="text"
                            placeholder="Comment"
                        />
                    </div>
                <div className="flex justify-end">
                    <button
                        className="bg-[#DBA61F] hover:bg-[#243C74] text-white font-bold py-2 px-4 rounded mr-4"
                        type="submit"
                    >
                        Add Review
                    </button>
                </div>
                </form>
            </div>
            </Modal>
        </div>
        </Fragment>
        
        )}
        </>
    )
}


export default SellerDetails



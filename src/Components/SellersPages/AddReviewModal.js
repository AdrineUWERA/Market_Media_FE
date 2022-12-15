import { AiFillCloseCircle } from "react-icons/ai";
import { ADD_REVIEW } from "../../Mutations/AddReviewMutation";
import { GET_SELLER_DETAILS } from "../../Queries/SellerQuery";
import { useMutation, useQuery } from "@apollo/client";
import { useContext, useState } from "react";

const AddReviewModal = ({ user, businessId, isVisible, onClose }) => {
  console.log(user, businessId);
  if (!isVisible) {
    return null;
  }
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };

  let today = new Date();
  let date =
    today.getMonth() + " " + (today.getDate() + 1) + " " + today.getFullYear();
  let dateAdded = date.toString();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [addReview] = useMutation(ADD_REVIEW, {
    variables: {
      userId: user,
      businessId: businessId,
      rating,
      comment,
      dateAdded
    },
    refetchQueries: [
      { query: GET_SELLER_DETAILS, variables: { id: businessId } },
    ],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ratingInt = parseInt(rating);
    addReview(user, businessId, ratingInt, comment, dateAdded);
    onClose();
  };

  return (
    <div
      id="wrapper"
      onClick={handleClose}
      className="fixed h-full inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center max-h-full overflow-auto "
    >
      <div className=" w-[50%]">
        <div className="bg-white p-2 rounded text-black flex flex-col text-start">
          <AiFillCloseCircle
            size={30}
            onClick={() => onClose()}
            className="place-self-end cursor-pointer"
          />
          <div>
            <form
              onSubmit={handleSubmit}
              className="w-full px-10 bg-white pt-5 pb-5 mb-4 md:w-full"
            >
              <h3 className="text-center text-black text-3xl md:text-3xl mb-7 font-semibold ">
                Add review
              </h3>
              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  // {...register("rating")}
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  required
                  type="number"
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Rating
                </label>
              </div>
              <div className="mb-4 relative">
                <textarea
                  placeholder=" "
                  // {...register("comment")}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                ></textarea>
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Comment
                </label>
              </div>
              <button className="bg-[#243C74] focus:shadow-outline focus:outline-none hover:bg-[#2b4583] mt-10 text-white font-bold px-6 md:text-lg rounded-md w-full mb-3 py-2">
                Add review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviewModal;

import { AiFillCloseCircle } from "react-icons/ai";
import { ADD_ORDER } from "../../Mutations/AddOrderMutation";
import { useQuery, useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Router from "next/router";
import {GET_USER_ORDERS} from "../../Queries/UserQueries"

const OrderModal = ({ productId, user, businessId, isVisible, onClose }) => {
  console.log(productId, user, businessId);
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
  let orderDate = date.toString();

  const [quantity, setQuantity] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingMethod, setShippingMethod] = useState("");
  const userId = user;
  console.log("user id in order", userId);
  const [addOrder] = useMutation(ADD_ORDER, {
    variables: {
      userId,
      productId,
      quantity,
      businessId: businessId,
      phoneNumber,
      shippingAddress,
      shippingMethod,
      orderDate
    },
    onCompleted: () => Router.push("/my-account/my-orders"),
    refetchQueries: [
      { query: GET_USER_ORDERS, variables: { id: userId } },
    ],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("prdtId", productId);
    await addOrder(
      userId,
      productId,
      quantity,
      businessId,
      phoneNumber,
      shippingAddress,
      shippingMethod,
      orderDate
    );
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
                Order Details
              </h3>
              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  required
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Quantity
                </label>
              </div>
              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Phone Number
                </label>
              </div>
              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  required
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Shipping Address
                </label>
              </div>

              <div className="mb-4 relative">
                <input
                  placeholder=" "
                  required
                  value={shippingMethod}
                  onChange={(e) => setShippingMethod(e.target.value)}
                  className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
                />
                <label className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Shipping Method
                </label>
              </div>

              <button className="bg-[#243C74] focus:shadow-outline focus:outline-none hover:bg-[#2b4583] mt-10 text-white font-bold px-6 md:text-lg rounded-md w-full mb-3 py-2">
                Place order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GET_PRODUCT_SELLERS } from "../../Queries/ProductQueries";
import LoadingAnimation from "../UI/LoadingAni";
import { useQuery } from "@apollo/client";
// import Sidebar from "./SideBar";
import { MdLocationOn } from "react-icons/md";
import OrderModal from "./OrderModal";
import { useState } from "react";

const ProductInCategory = () => {
  const router = useRouter();
  const name = router.query.name;
  console.log("id", name);
  const [showModal, setShowModal] = useState(false);
  const { loading, error, data } = useQuery(GET_PRODUCT_SELLERS, {
    variables: { name },
  });
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
  }

  // console.log(data);
  const matchingProducts = data.productSellers;
  //   const categoryName = data.category.name;

  return (
    <>
      {!loading && !error && (
        <div className="flex">
          {/* <Sidebar />  */}
          <div className="px-20">
            <h1 className="text-3xl font-bold text-left pt-12">{name}</h1>
            <div className="w-full flex flex-col justify-content items-center pt-12 pb-20">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                {matchingProducts.map((matchingProduct) => (
                  <div
                    key={matchingProduct.business.id}
                    className="w-full md:w-[20rem] lg:w-[15rem] p-4 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
                  >
                    <div className="p-2 mb-5">
                      <Link
                        href={{
                          pathname: "/sellers/[id]",
                          query: { id: matchingProduct.business.id },
                        }} 
                        key={matchingProduct.business.id}
                      >
                        <Image
                          src={matchingProduct.business.image}
                          alt=""
                          width={200}
                          height={100}
                        ></Image>
                        <h2 className="my-5 text-xl font-bold aliased max-w-[18rem] text-[#404040]">
                          {matchingProduct.business.name}
                        </h2>
                        <p>
                          <span className="font-bold">Price: </span>
                          {matchingProduct.price} RWF
                        </p>
                        <div className="flex flex-row items-center gap-2 mt-4 my-5">
                          <MdLocationOn size={30} />
                          <div>
                            <p className="pr-2">
                              {matchingProduct.business.district}
                            </p>
                            <p>{matchingProduct.business.streetAddress}</p>
                          </div>
                        </div>
                      </Link>
                      <button
                        onClick={() => setShowModal(true)}
                        className="leading-relaxed text-justify bg-[#DBA61F] px-[75.5px] py-2 rounded-md text-[white]"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <OrderModal
              isVisible={showModal}
              onClose={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInCategory;

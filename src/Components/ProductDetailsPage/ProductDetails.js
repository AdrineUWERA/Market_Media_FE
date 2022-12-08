import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GET_PRODUCT_DETAILS } from "../../Queries/ProductQueries";
import LoadingAnimation from "../UI/LoadingAni";
import { useQuery } from "@apollo/client";

const ProductDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log("id", id);
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { id },
  });
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
  }
  console.log(data);
  const productDetails = data.product;
  return (
    <>
      {!loading && !error && (
        <div className="flex flex-col py-20">
          <div className="flex flex-row px-32">
            <div className="border-gray-200 border-2">
              <Image src={productDetails.image} width={500} height={300} />
            </div>
            <div className="flex flex-col pl-20 justify-center">
              <h1 className="text-5xl font-bold pb-12">
                {productDetails.name}
              </h1>
              <p className="text-2xl pb-5">
                <span className="font-bold">Category: </span>
                {productDetails.category.name}
              </p>
              <p className="text-2xl pb-5">
                <span className="font-bold">Price: </span>
                {productDetails.price}
              </p>
              <p className="text-2xl pb-5">
                <span className="font-bold">Unit: </span>
                {productDetails.price}
              </p>
              <p className="text-2xl pb-5">
                <span className="font-bold">Quantity: </span>
                {productDetails.quantity}
              </p>
              <p className="text-2xl pb-5">
                <span className="font-bold">Seller: </span>
                {productDetails.business.name}
              </p>
              <Link className="my-10" href="/">
                <button className="btn px-5 py-3 bg-[#243C74] text-xl text-white rounded-md">See list of sellers</button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col px-32 py-20">
            <h3 className="text-2xl font-bold pb-6">Description</h3>
            <p className="text-[18px]">{productDetails.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

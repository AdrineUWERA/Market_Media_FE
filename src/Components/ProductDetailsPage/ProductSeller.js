import Link from "next/link";
import Image from "next/image";
import { GET_PRODUCT_SELLER } from "../../Queries/ProductSellerQuery";
import LoadingAnimation from "../UI/LoadingAni";
import { useQuery, gql } from "@apollo/client";

const ProductSeller = () => {
  const { loading, error, data } = useQuery(GET_PRODUCT_SELLER);
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
  }
  const productSeller = data.products;
  console.log(productSeller);
  return (
    <>
      {!loading && !error && (
        <>
          <h1 className="text-3xl font-bold pt-20 text-center">List of Sellers</h1>
          <div className="w-full flex flex-col justify-content items-center pt-16 pb-16">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-4 ">
              {productSeller.map((product) => (
                <Link href={{ pathname: "/Sellers/[id]", query: { id: product.id },}} key={product.id}>
                  <div key={product.id} className="w-300 md:w-[30rem] lg:w-[15rem]  p-4 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                    <div className="p-2 mb-10">
                    <div className="object-contain w-fill h-fill mb-5 rounded-xl">
                      <Image src={product.business.image} alt="" width={500} height={300}></Image>
                    </div>
                      <h2 className="my-5 text-xl font-bold aliased max-w-[18rem] text-[#404040] text-center ">
                        {product.business.name}
                      </h2>
                      <h2 className="text-xl aliased max-w-[18rem] text-[#404040] text-center ">
                        {product.business.streetAddress}
                        </h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductSeller;

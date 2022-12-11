import Link from "next/link";
import Image from "next/image";
import { GET_SELLERS } from "../../Queries/SellerCategoriesQuery";
import LoadingAnimation from "../UI/LoadingAni";
import { useQuery, gql } from "@apollo/client";

const SellerCategories = () => {
  const { loading, error, data } = useQuery(GET_SELLERS);
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
  }
  const businesses = data.businesses;
  console.log(businesses);
  return (
    <>
      {!loading && !error && (
        <>
          <h1 className="text-3xl font-bold pt-20 text-center">List of Sellers</h1>
          <div className="w-full flex flex-col justify-content items-center pt-16 pb-16">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-4 ">
              {businesses.map((business) => (
                <Link href={{ pathname: "/Sellers/[id]", query: { id: business.id },}} key={business.id}>
                  <div key={business.id} className="w-300 md:w-[30rem] lg:w-[15rem]  p-4 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl cursor-pointer">
                    <div className="p-2 mb-10">
                    <div className="object-contain w-fill h-fill mb-5 rounded-xl">
                      <Image src={business.image} alt="" width={500} height={300}></Image>
                    </div>
                      <h2 className="my-5 text-xl font-bold aliased max-w-[18rem] text-[#404040] text-center ">
                        {business.name}
                      </h2>
                      <h2 className="text-xl aliased max-w-[18rem] text-[#404040] text-center ">
                        {business.streetAddress}
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

export default SellerCategories;

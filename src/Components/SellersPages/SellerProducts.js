import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GET_SELLER_PRODUCTS } from "../../Queries/SellerQuery";
import LoadingAnimation from "../UI/LoadingAni";
import { useQuery } from "@apollo/client";
// import Sidebar from "./SideBar";

const SellerProducts = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log("id", id);
  const { loading, error, data } = useQuery(GET_SELLER_PRODUCTS, {
    variables: { id },
  });
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
  }
  console.log(data);
  const products = data.businessProducts;
  const sellerName = data.businessProducts[0].business.name;

  return (
    <>
      {!loading && !error && (
        <div className="flex">
          {/* <Sidebar />  */}
          <div className="px-20">
            <h1 className="text-3xl font-bold text-left pt-20">
              Seller: {sellerName}
            </h1>
            <div className="w-full flex flex-col justify-content items-center pt-12 pb-20">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                {products.map((product) => (
                  <Link
                    href={{
                      pathname: "/products/[id]",
                      query: { id: product.id },
                    }}
                    key={product.id}
                  >
                    <div
                      key={product.id}
                      className="w-full md:w-[20rem] lg:w-[15rem] p-4 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
                    >
                      <div className="p-2 mb-5">
                        <Image
                          src={product.image}
                          alt=""
                          width={200}
                          height={100}
                        ></Image>
                        <h2 className="my-5 text-xl font-bold aliased max-w-[18rem] text-[#404040]">
                          {product.name}
                        </h2>
                        <Link
                          href={{
                            pathname: "/products/[id]",
                            query: { id: product.id },
                          }}
                          className=" leading-relaxed text-justify underline text-[#555]"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SellerProducts;

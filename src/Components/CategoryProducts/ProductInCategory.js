import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GET_CATEGORY_PRODUCTS } from "../../Queries/CategoryProductsQuery";
import LoadingAnimation from "../UI/LoadingAni";
import { useQuery } from "@apollo/client";

const ProductInCategory = () => {
  const router = useRouter(); 
  const id = router.query.id;
  console.log("id", id);
  const { loading, error, data } = useQuery(GET_CATEGORY_PRODUCTS, {
    variables: { id },
  });
  if (loading) return <LoadingAnimation />;
  if (error) {
    console.log(error);
  }
  console.log(data);
  const products = data.category.products;
//   const categories = data.category.products;

  return (
    <>
      {!loading && !error && (
        <div className="w-full flex flex-col justify-content items-center mx-5 pt-32">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
            {products.map((product) => (
              <Link
                href={{
                  pathname: "/categories/[id]",
                  query: { id: product.id },
                }}
                key={product.id}
              >
                <div
                  key={product.id}
                  className="w-full md:w-[20rem] lg:w-[15rem]  p-4 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
                >
                  <div className="p-2 mb-5">
                    <Image
                      src={product.image}
                      alt=""
                      width={500}
                      // layout="fill"
                      height={300}
                    ></Image>
                    <h2 className="my-5 text-xl font-bold aliased max-w-[18rem] text-[#404040]">
                      {product.name}
                    </h2>
                    <Link
                      href="/"
                      className=" leading-relaxed text-justify underline text-[#555]"
                    >
                      Shop now
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInCategory;

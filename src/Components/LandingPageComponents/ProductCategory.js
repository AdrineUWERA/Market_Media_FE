import Link from 'next/link';
import Image from 'next/image';

const categories=[
    {
        id:"1",
        image:"https://res.cloudinary.com/dpuyeblqg/image/upload/v1670097144/Market%20media/Rectangle_14_mhleuf.png",
        name: "Food and drinks"
    },
    {
        id:"2",
        image:"https://res.cloudinary.com/dpuyeblqg/image/upload/v1670097144/Market%20media/Rectangle_17_iifb5i.png",
        name: "Home and office"
    },
    {
        id:"3",
        image:"https://res.cloudinary.com/dpuyeblqg/image/upload/v1670097143/Market%20media/Rectangle_26_zmidj6.png",
        name: "Game accesories"
    },
    {
        id:"4",
        image:"https://res.cloudinary.com/dpuyeblqg/image/upload/v1670097143/Market%20media/Rectangle_20_smkcmt.png",
        name: "Fashion"
    },
    {
        id:"5",
        image:"https://res.cloudinary.com/dpuyeblqg/image/upload/v1670097143/Market%20media/Rectangle_29_gfl2a2.png",
        name: "Groceries"
    },
    {
        id:"6",
        image:"https://res.cloudinary.com/dpuyeblqg/image/upload/v1670097143/Market%20media/Rectangle_35_hwgehy.png",
        name: "Personal care"
    },
    {
        id:"7",
        image:"https://res.cloudinary.com/dpuyeblqg/image/upload/v1670097143/Market%20media/Rectangle_23_af7jg0.png",
        name: "Fitness"
    },
    {
        id:"8",
        image:"https://res.cloudinary.com/dpuyeblqg/image/upload/v1670097143/Market%20media/Rectangle_32_blbz4i.png",
        name: "Children Toys"
    }, 

]

const ProductCategories = () => {
  return (
    <div className="w-full flex flex-col justify-content items-center">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {categories.map((category) => (
          <Link
            // href={{
            //   pathname: "/",
            //   query: { id: area.id },
            // }}
            href="/"
            key={category.id}
          >
            <div
              key={category.id}
              className="w-full md:w-[18rem] lg:w-[18rem]  p-4 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <div className="p-2 mb-5">
                <Image
                  src={category.image}
                  alt=""
                  width={500}
                  // layout="fill"
                  height={300}
                ></Image>
                <h2 className="my-5 text-xl font-bold aliased max-w-[18rem] text-[#404040]">
                  {category.name}
                </h2>
                <Link href="/" className=" leading-relaxed text-justify underline text-[#555]">
                  Shop now
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;

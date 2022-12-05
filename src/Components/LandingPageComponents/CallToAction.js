import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="flex bg-[#D9D9D9] justify-between px-32 py-32 mt-20 items-center">
      <div className="w-1/4">
        <Image
          src="https://res.cloudinary.com/dpuyeblqg/image/upload/v1670070152/Market%20media/Ellipse_4_v4qafi.svg"
          width={250}
          height={250}
          alt="Your Company"
        />
      </div>
      <div className="w-2/4">
        <p className="text-3xl px-8">Find any product or service from the most reputable sellers around you</p>
      </div>
      <div className="w-1/4 flex items-center justify-center">
        <button class="btn btn-primary px-10 py-4 bg-white shadow-md rounded-md">Find seller</button>
      </div>
    </div>
  );
};

export default CallToAction;

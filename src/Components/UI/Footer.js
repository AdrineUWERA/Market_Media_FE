import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { GrNext } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-[#243C74] text-white">
      <div className="flex justify-evenly py-20">
        <div>
          <p className="text-2xl font-bold pb-5">About Market Media</p>
          <ul>
            <li className="pb-2">Our solution</li>
            <li className="pb-2">Our Blog</li>
            <li className="pb-2">User's Guide</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-bold pb-5">Contacts & Location</p>
          <p className="pb-2">Phone: 0784592013</p>
          <p className="pb-2">Email: info@marketmedia.rw</p>
          <p className="pb-2">Location: KN 7 Av</p>
          <div className="pb-2 flex pr-10 pt-6">
            <BsInstagram className="text-4xl mr-5" />
            <BsTwitter className="text-4xl mr-5" />
            <BsLinkedin className="text-4xl mr-5" />
          </div>
        </div>
        <div className="">
          <p className="text-2xl font-bold pb-5">Newsletter</p>
          <p className="pb-5 text-wrap">
            Subscribe to our newsletter to keep you updated
          </p>
          <div className="relative flex items-stretch w-60">
            <input
              type="email"
              className="relative rounded-md rounded-r-none   flex-auto min-w-0 block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#243C74] focus:outline-none"
              placeholder="Enter email"
              aria-label="Email"
              aria-describedby="button-addon2"
            />
            <button
              className="btn inline-block rounded-md  rounded-l-none px-4 bg-[#DBA61F] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-[#eab93e] hover:shadow-lg focus:bg-[#243C74]  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center"
              type="button"
              id="button-addon2"
            >
              <GrNext className="text-white" width={10} height={10} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pb-5">
        <p>Market media © 2022</p>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState, useContext } from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { UserContext } from "../../Context/UserContext"; 

function Navbar() {
  const { user, userRole, logout } = useContext(UserContext);
  //  const role = JSON.parse(localStorage.getItem("userRole"));

  console.log("FETCHING USER IN THE NAV", userRole); 
  const [isDropdown, setIsDropdown] = useState(false);
  const [search, setSearch] = useState('');

  const handleLogout = async () => {
    await logout();
  };

  
  return (
    <>
      {/* {!loading && !error && ( */}
        <nav className="bg-white">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href="/"
                    className="flex flex-row items-center gap-4 font-semibold"
                  >
                    <Image
                      className="h-10 w-auto"
                      src="https://res.cloudinary.com/dpuyeblqg/image/upload/v1670070152/Market%20media/Ellipse_4_v4qafi.svg"
                      width={5}
                      height={5}
                      alt="Your Company"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex sm:ml-6 sm:block w-6/12">
              <div class="relative flex items-stretch w-full">
              {/* <select className=" rounded-full rounded-r-none min-w-0 block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#243C74] focus:outline-none">
                      <option value="">Category</option>
                    </select> */}
              <input
                type="search"
                id="search"
                class="relative rounded-full rounded-r-none   flex-auto min-w-0 block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#243C74] focus:outline-none"
                placeholder="Search for a product"
                aria-label="Search"
                aria-describedby="button-addon2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                class="btn inline-block rounded-full  rounded-l-none px-6 bg-[#DBA61F] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-[#243C74] hover:shadow-lg focus:bg-[#243C74]  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center"
                id="button-addon2"
                htmlFor="search"
              >
                <a href={`/Search/${search}`}><BiSearch width={10} height={10} /></a>
              </button>
            </div>
              </div>
              <div className="text-center">
                <a
                  href="/sellers"
                  className="text-black-300 hover:text-[#243C74] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Find seller
                </a>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {!user ? (
                  <a
                    href="/login"
                    className="text-white rounded-md bg-[#243C74] hover:bg-[#244797] hover:text-white px-6 py-2 text-sm font-medium"
                  >
                    Login
                  </a>
                ) : (
                  <div className="relative ml-3">
                    <div className="flex">
                      <button
                        onClick={() => setIsDropdown(!isDropdown)}
                        type="button"
                        className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <FaUserCircle
                          className="h-9 w-10 rounded-full"
                          alt=""
                        />
                      </button>
                    </div>

                    {isDropdown && (
                      <div
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabindex="-1"
                      >
                        <a
                          href="/my-account/my-profile"
                          className="block px-4 py-2 text-sm text-black-700"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-0"
                        >
                          My Account
                        </a>
                        {userRole === "Buyer" && (
                          <a
                            href="/SellerApplication"
                            className="block px-4 py-2 text-sm text-black-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-1"
                          >
                            Seller Application
                          </a>
                        )}
                        {userRole === "Seller" && (
                          <a
                            href="/SellerDashboard/stock"
                            className="block px-4 py-2 text-sm text-black-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-1"
                          >
                            Seller dashboard
                          </a>
                        )}
                        {userRole === "Admin" && (
                          <a
                            href="/adminDashboard/all-products"
                            className="block px-4 py-2 text-sm text-black-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-1"
                          >
                            Admin dashboard
                          </a>
                        )}
                        <button
                          onClick={handleLogout}
                          className="block px-4 py-2 text-sm text-black-700"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-2"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <hr className="mt-1.5"></hr>
        </nav>
      {/* )} */}
    </>
  );
}

export default Navbar;

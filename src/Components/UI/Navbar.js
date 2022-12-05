import React, { useState } from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <nav class="bg-white">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-20 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  class="block h-10 w-auto lg:hidden"
                  src="https://res.cloudinary.com/dpuyeblqg/image/upload/v1670070152/Market%20media/Ellipse_4_v4qafi.svg"
                  width={5}
                  height={5}
                  alt="Your Company"
                />
              </Link>
              <Link href="/">
                <Image
                  class="hidden h-10 w-auto lg:block"
                  src="https://res.cloudinary.com/dpuyeblqg/image/upload/v1670070152/Market%20media/Ellipse_4_v4qafi.svg"
                  width={5}
                  height={5}
                  alt="Your Company"
                />
              </Link>
            </div>
          </div>

          <div class="flex sm:ml-6 sm:block w-6/12">
            <div class="relative flex items-stretch w-full">
              {/* <select className=" rounded-full rounded-r-none min-w-0 block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#243C74] focus:outline-none">
                      <option value="">Category</option>
                    </select> */}
              <input
                type="search"
                class="relative rounded-full rounded-r-none   flex-auto min-w-0 block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#243C74] focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                class="btn inline-block rounded-full  rounded-l-none px-6 bg-[#DBA61F] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-[#243C74] hover:shadow-lg focus:bg-[#243C74]  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center"
                type="button"
                id="button-addon2"
              >
                <BiSearch width={10} height={10} />
              </button>
            </div>
          </div>
          <div class="text-center">
            <a
              href="#"
              class="text-black-300 hover:text-[#243C74] px-3 py-2 rounded-md text-sm font-medium"
            >
              Find seller
            </a>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <a
              href="#"
              class="text-white rounded-md bg-[#243C74] hover:bg-[#244797] hover:text-white px-6 py-2 text-sm font-medium"
            >
              Login
            </a> */}

            <div class="relative ml-3">
              <div className="flex">
                <button
                  type="button"
                  class="rounded-full focus:outline-none mr-12"
                >
                  <BsFillCartFill class="h-9 w-10" alt="" />
                </button>
                <button
                  onClick={() => setIsDropdown(!isDropdown)}
                  type="button"
                  class="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <FaUserCircle class="h-9 w-10 rounded-full" alt="" />
                </button>
              </div>

              {isDropdown && (
                <div
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-black-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                  >
                    My Account
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-black-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                  >
                    Seller dashboard
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-black-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                  >
                    Logout out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div class="sm:hidden" id="mobile-menu">
        {isOpen && (
          <div class="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#"
              class="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Find seller
            </a>
          </div>
        )}
      </div>
      <hr className="mt-1.5"></hr>
    </nav>
  );
}

export default Navbar;

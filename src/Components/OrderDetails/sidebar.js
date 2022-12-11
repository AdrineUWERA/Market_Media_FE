import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";

const Sidebar = () => {
  
  
  return (
    <div>
      <aside class="w-64 mt-16 mb-20 ml-14" aria-label="Sidebar">
        <div class="overflow-y-auto px-5 bg-[#243C74] rounded pt-10 pb-64">
            <div class = "flex items-center p-2 text-[18px] font-bold text-white rounded-lg ml-2 mb-1 py-6">
                <ul class="space-y-11 ">
                <li class="duration-300 cursor-pointer hover:text-black ">
                <Link href="#">My Profile</Link>
                </li>
                <li class="duration-300 cursor-pointer hover:text-black ">
                <Link href="#">Account Settings</Link>
                </li>
                <li class="duration-300 cursor-pointer hover:text-black ">
                <Link href="#">My Carts</Link>
                </li>
                <li class="duration-300 cursor-pointer hover:text-black ">
                <Link href="/orders">My Orders</Link>
                </li>
                </ul>
                </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

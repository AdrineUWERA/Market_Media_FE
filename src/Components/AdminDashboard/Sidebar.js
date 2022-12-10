import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";

const menuItems = [
    { id: 1, name: "All-Products", label: "Products", link: "/adminDashboard/all-products" },
    { id: 2, name: "Seler-application", label: "Seller applications", link: "/adminDashboard/sellers-application" },
    // { id: 3, name: "Orders", label: "Orders", link: "/SellerDashboard/orders" },
    // { id: 4, name: "Reviews", label: "Reviews", link: "/SellerDashboard/reviews" }
];

const Sidebar = () => {
    const router = useRouter();
    // const activeMenu = useMemo(() => menuItems.find(menu => menu.link === router.pathname), [router.pathname]);
    const activeMenu = useMemo(() => menuItems.find(menu => router.pathname.includes(menu.link,0)), [router.pathname]);

    const getSidebarClasses = (menu) => {
        return classNames("flex items-center p-2 text-[18px] font-bold text-white rounded-lg",
            {
                ["bg-gray-100 text-black"]: activeMenu.id === menu.id,
            }
        );
    };
    return (
        <aside class="w-64 mt-14 mb-14 ml-14" aria-label="Sidebar">
            <div class="overflow-y-auto px-5 bg-[#243C74] rounded pt-10 pb-64">
                <ul class="space-y-2">
                    {menuItems.map(({ name: name, ...menu }) => {
                        const classes = getSidebarClasses(menu);
                        return (
                            <li>
                                <a href={menu.link} className={classes}>
                                    <span class="ml-3">{menu.label}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    );
};
export default Sidebar;
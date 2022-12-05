import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { GET_CATEGORIES } from "../../Queries/CategoryProductsQuery";
import { useQuery } from "@apollo/client";
import Link from "next/link";

const Sidebar = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  if (loading) {
    console.log(loading);
  }
  if (error) {
    console.log(error);
  }
  // console.log(data);
  const categories = data.categories;

  const router = useRouter();
  const activeMenu = useMemo(
    () => categories.find((category) => category.id === router.query.id),
    [router.query.id]
  );
  const getSidebarClasses = (category) => {
    return classNames(
      "flex items-center p-2 text-[18px] font-bold text-white rounded-lg",
      {
        ["bg-gray-100 text-black"]: activeMenu.id === category.id,
      }
    );
  };
  return (
    <div>
      <aside class="w-64 mt-16 mb-14 ml-14" aria-label="Sidebar">
        <div class="overflow-y-auto px-5 bg-[#243C74] rounded pt-10 pb-64">
          <ul class="space-y-2">
            {categories.map(({ name: name, ...category }) => {
              const classes = getSidebarClasses(category);
              return (
                <li>
                  <Link
                    href={{
                      pathname: "/categories/[id]",
                      query: { id: category.id },
                    }}
                    className={classes}
                  >
                    <span class="ml-3">{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

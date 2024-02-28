"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSeedling,
  faCartShopping,
  faSliders,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isActiveLink = (path: string) => pathname === path;

  return (
    <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between p-5 mx-5">
      <div className="flex gap-3">
        <Link
          href="/home"
          className={`flex gap-3 border rounded-full p-2 items-center ${
            isActiveLink("/home") ? "border-blue-500" : "border-black"
          }`}
        >
          <FontAwesomeIcon
            icon={faHome}
            className={`w-7 m-3 ${
              isActiveLink("/home") ? "text-blue-500" : "text-black"
            }`}
            size="xl"
          />
        </Link>
        <Link
          href="/"
          className={`flex gap-3 border rounded-full p-2 items-center ${
            isActiveLink("/") ? "border-blue-500" : "border-black"
          }`}
        >
          <FontAwesomeIcon
            icon={faSeedling}
            className={`w-7 m-3 ${
              isActiveLink("/") ? "text-blue-500" : "text-black"
            }`}
            size="xl"
          />
        </Link>
        <Link
          href="/cart"
          className={`flex gap-3 border rounded-full p-2 items-center ${
            isActiveLink("/cart") ? "border-blue-500" : "border-black"
          }`}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className={`w-7 m-3 ${
              isActiveLink("/cart") ? "text-blue-500" : "text-black"
            }`}
            size="xl"
          />
        </Link>
        <Link
          href="/settings"
          className={`flex gap-3 border rounded-full p-2 items-center ${
            isActiveLink("/settings") ? "border-blue-500" : "border-black"
          }`}
        >
          <FontAwesomeIcon
            icon={faSliders}
            className={`w-7 m-3 ${
              isActiveLink("/settings") ? "text-blue-500" : "text-black"
            }`}
            size="xl"
          />
        </Link>
      </div>
      <div className="relative flex items-center w-full max-w-xs focus-within:shadow-md">
        <input
          type="search"
          className="w-full pr-10 pl-4 py-2 border border-black rounded-md focus:ring-1 focus:ring-blue-400 focus:outline-none focus:border-blue-400"
          placeholder="Search"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute w-6 h-6 fill-gray-400 right-3 top-2"
        />
      </div>
    </div>
  );
};

export default Navbar;

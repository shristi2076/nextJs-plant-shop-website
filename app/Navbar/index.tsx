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
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartIcon, HomeIcon, PlantIcon } from "@/public";

const Navbar = () => {
  const pathname = usePathname();
  const isActiveLink = (path: string) => pathname === path;

  return (
    <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between">
      <div className="flex flex-col gap-3 bg-slate-50 bg-opacity-30 bg-blur p-2 rounded-3xl backdrop-blur-3xl">
        <Link
          href="/home"
          className={`flex gap-3  rounded-full items-center ${
            isActiveLink("/home") ? "bg-white" : ""
          }`}
        >
          <Image src={HomeIcon} className="w-6 m-2" alt="no icon" />
          {/* <FontAwesomeIcon
            icon={faHome}
            className="w-7 m-2 text-black "
            size="xl"
          /> */}
        </Link>
        <Link
          href="/"
          className={`flex gap-3 rounded-full items-center ${
            isActiveLink("/") ? "bg-white" : ""
          }`}
        >
          {/* <FontAwesomeIcon
            icon={faSeedling}
            className="w-7 m-2 text-black "
            size="xl"
          /> */}
          <Image src={PlantIcon} className="w-6 m-2" alt="no icon" />
        </Link>
        <Link
          href="/cart"
          className={`flex gap-3 rounded-full items-center ${
            isActiveLink("/cart") ? "bg-white" : ""
          }`}
        >
          {/* <FontAwesomeIcon
            icon={faCartShopping}
            className="w-7 m-2 text-black "
            size="xl"
          /> */}
          <Image src={CartIcon} className="w-6 m-2" alt="no icon" />
        </Link>
        <Link
          href="/settings"
          className={`flex gap-3 rounded-full items-center ${
            isActiveLink("/settings") ? "bg-white" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={faSliders}
            className="w-7 m-2 text-black "
            size="xl"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

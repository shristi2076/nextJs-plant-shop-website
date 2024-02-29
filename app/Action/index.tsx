"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FilterIcon, GridIcon, SearchIcon, TabIcon } from "@/public";

const Action = () => {
  const pathname = usePathname();
  const isActiveLink = (path: string) => pathname === path;

  return (
    <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between p-5 mx-5">
      <div className="flex gap-3">
        <Link
          href="/"
          className={`flex border rounded-full bg-white items-center`}
        >
          <Image src={GridIcon} className="w-7 m-2" alt="no icon" />
        </Link>
        <Link
          href="/"
          className={`flex  border rounded-full bg-white items-center `}
        >
          <Image src={TabIcon} className="w-8 m-2" alt="no icon" />
        </Link>
        <Link
          href="/"
          className={`flex  border rounded-full bg-white items-center`}
        >
          <Image src={FilterIcon} className="w-6 m-2" alt="no icon" />
        </Link>
      </div>
      <div className="relative flex items-center max-w-xs focus-within:shadow-md">
        <input
          type="search"
          className=" pr-10 pl-4 py-2 w-40 bg-slate-200 rounded-md focus:ring-1 focus:ring-blue-400 focus:outline-none focus:border-blue-400"
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

export default Action;

"use client";
import { LockIcon } from "@/public";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

const Pathname = () => {
  const pathname = usePathname();
  return (
    <div className=" flex w-full max-w-[500px] mx-auto p-2 items-center bg-slate-50 bg-opacity-30 backdrop-blur-3xl rounded-2xl">
      <Image src={LockIcon} className="w-4 mx-1" alt="no icon" />
      <div className="flex text-xs  mx-1 p-2">{`https://www.myplant.com/${pathname}`}</div>
    </div>
  );
};

export default Pathname;

"use client";

import React from "react";
import { ElementsBreadCrumbs } from "@/utils/MockData";
import { useRouter, usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/Icons/Icons";
import Image from "next/image";
import { Ellipse } from "@/components/assets";

function Elements () {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen mt-24 ml-[302px] bg-[#F6F7F9] flex-col items-start px-10 justify-start">
      <div className="flex items-center justify-center gap-3 mt-4">
        {ElementsBreadCrumbs.map((item, index) => (
          <div className={`${pathname === "/elements" && index === 2 ? "text-[#2D416F]" : "text-[#ABB3C5]"} flex text-base  font-bold items-center justify-center gap-3`} key={index}>
            {item.name}
            {item.icon}
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-4 items-start justify-start bg-white w-[60rem] rounded-md h-auto p-5">
        <p className="text-[#2D416F] text-[19px] font-bold">Elements</p>
        <div className="flex w-full mt-6 items-center justify-between p-4 bg-[#F4F6F8]">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center">
              <Input placeholder="Search for anything..." className="border border-r-0 rounded-r-none py-3 placeholder:text-gray-200 text-base font-normal" />
              <div className="flex items-center justify-center bg-green-100 rounded-tr rounded-br px-3 py-[10px]">
                <Icons.search />
              </div>
            </div>
            <div className="bg-[#2D416F] flex items-center justify-center rounded-md w-[40px] h-[40px] ">
              <Icons.Filter />
            </div>
          </div>
          <button className="flex bg-[#4BAA79] items-center justify-center gap-2 p-4 rounded-md">
            <p className="font-bold text-base text-white"> Create Element</p>
            <Icons.Add />
          </button>
        </div>
        <div className="mt-20 flex flex-col gap-3 items-center justify-center ml-[24rem]">
          <Image src={Ellipse} alt="" />
          <div className="flex items-center justify-center gap-2">
            <Icons.Caution />
            <p className="font-semibold text-base text-[#2D416F]">There are no elements to display</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elements;

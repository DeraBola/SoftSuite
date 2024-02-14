"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/Icons/Icons";
import { useRouter, usePathname } from "next/navigation";

function SideBar () {
  const router = useRouter();
  const pathname = usePathname();
  const [dropDown, setDropDown] = useState(false);

  const handleDropdownClick = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="bg-white w-[302px] overflow-y-auto flex flex-col gap-10 px-5 items-start justify-start h-screen fixed left-0 top-0 cursor-pointer pb-16">
      <div className="font-bold text-3xl mt-10 text-[#bdf3d7cd]">
        Soft
        <span className="text-[#2D416F]">SUITE</span>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-[#2D416F] w-6 h-6 flex items-center justify-center py-[4px] px-[3px] rounded-[4px]">
            <Icons.shuffle />
          </div>
          <div className="flex flex-col text-blue-100">
            <p className="font-medium text-sm">Switch Module</p>
            <p className="font-bold text-base">Payroll Management</p>
          </div>
        </div>
        <Icons.arrowDown />
      </div>
      <div className=" flex flex-col w-full items-start justify-start gap-9">
        <div className="w-full flex items-center justify-start gap-3" onClick={() => router.push("/")}>
          <Icons.dashboard />
          <p className="text-sm font-medium text-gray-100">Dashboard</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <Icons.activity />
            <p className="text-sm font-medium text-gray-100">payroll activities</p>
          </div>
          <Icons.grayArrowDown />
        </div>
        <div className="w-full flex items-center justify-start gap-3">
          <Icons.structure />
          <p className="text-sm font-medium text-gray-100">salary structure</p>
        </div>
        <div className="flex flex-col  w-full">
          <div className={`w-full flex items-center justify-between text-gray-100 ${dropDown ? "text-white bg-green-100 px-2 py-3" : "text-gray-100 bg-white"}  rounded-md `} onClick={handleDropdownClick}>
            <div className="flex items-center justify-center gap-2">
              {dropDown ?  <Icons.settings /> : <Icons.graySettings />}
              <p className="text-sm font-medium ">element setup</p>
            </div>
            {dropDown ? <Icons.whiteArrowUp /> : <Icons.grayArrowDown />}
          </div>
          {dropDown &&   <div className="text-blue-100 flex flex-col w-full top-10 gap-4 mt-3 text-sm font-medium">
            <p className={`flex ${pathname === "/elements" ? "px-2  py-2.5  rounded-lg  bg-green-200  rounded-b-none" : ""}`}  onClick={() => router.push("elements")}>Elements</p>
            <p className="flex hover:px-2 hover:py-2.5 hover:rounded-lg hover:bg-green-200 hover:rounded-b-none">Balances</p>
          </div>}

        </div>
        <div className="w-full flex items-center justify-start gap-3">
          <Icons.profile />
          <p className="text-sm font-medium text-gray-100">Employees</p>
        </div>
      </div>
      <Separator className="bg-gray-50" />
      <div className="flex flex-col w-full items-start justify-start gap-9">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <Icons.graySettings />
            <p className="text-sm font-medium text-gray-100">Payroll Settings</p>
          </div>
          <Icons.grayArrowDown />
        </div>
        <div className="w-full flex items-center justify-start gap-3">
          <Icons.profile2 />
          <p className="text-sm font-medium text-gray-100">My Account</p>
        </div>
        <div className="w-full flex items-center justify-start gap-3">
          <Icons.logOut />
          <p className="text-sm font-medium text-gray-100">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

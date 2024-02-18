"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/Icons/Icons";
import Image from "next/image";
import { Logo } from "@/components/assets";
import { SideBarBottomTabs, SideBarTopTabs } from "@/utils/MockData";
import Link from "next/link";

function SideBar () {
  const [isActive, setActive] = useState<number | null>(3);

  const handleTabClick = (index: number) => {
    console.log("Clicked tab index:", index);
    setActive((prevTabIndex) => (prevTabIndex === index ? null : index));
  };

  return (
    <div className="bg-white scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-300 w-[302px] overflow-y-auto flex flex-col gap-10 px-5 items-start justify-start h-screen fixed left-0 top-0 cursor-pointer pb-16">
      <div className="font-bold text-3xl mt-10 text-[#bdf3d7cd]">
        <Image src={Logo} alt="" />
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
        {SideBarTopTabs.map((tabs, index) => (
          <div className="flex flex-col w-full" key={index}>
            {isActive === index ? (
              <div className="w-full flex items-center justify-between bg-green-100 px-2 py-3 rounded-md" onClick={() => handleTabClick(index)}>
                <div className="flex w-full items-center justify-start gap-2">
                  {tabs.ActiveIcon}
                  <p className="text-sm font-medium text-white">{tabs.name}</p>
                </div>
                {tabs.whiteArrowDown}
              </div>
            ) : (
              <div className="w-full flex items-center justify-between" onClick={() => handleTabClick(index)}>
                <div className="flex items-center justify-center gap-2">
                  {tabs.icon}
                  <p className="text-sm font-medium text-gray-100">{tabs.name}</p>
                </div>
                {tabs.grayArrowDown}
              </div>
            )}
            {isActive === index && tabs.menus && tabs.menus.map((menu, menuIndex) => (
              <div className="text-blue-100 flex flex-col w-full top-10 gap-4 mt-3 text-sm font-medium" key={menuIndex}>
                <Link href={menu.link} className={`flex ${menu.link === "/elements" ? "px-2 py-2.5 rounded-lg bg-green-200 rounded-b-none" : ""}`}  >
                  {menu.name}
                </Link>
              </div>
            ))}
          </div>
        ))}

        {/* <div className="flex flex-col  w-full">
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
        </div> */}
      </div>
      <Separator className="bg-gray-50" />
      <div className="flex flex-col w-full items-start justify-start gap-9">
        {SideBarBottomTabs.map((items, index) => (
          <div className="w-full flex items-center justify-between" key={index}>
            <div className="flex items-center justify-center gap-2">
              {items.icon}
              <p className="text-sm font-medium text-gray-100">{items.name}</p>
            </div>
            {items.icon2}
          </div>
        ))}
        {/* <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <Icons.graySettings />
            <p className="text-sm font-medium text-gray-100">Payroll Settings</p>
          </div>
          <Icons.grayArrowDown />
        </div> */}
        {/* <div className="w-full flex items-center justify-start gap-3">
          <Icons.profile2 />
          <p className="text-sm font-medium text-gray-100">My Account</p>
        </div> */}
        {/* <div className="w-full flex items-center justify-start gap-3">
          <Icons.logOut />
          <p className="text-sm font-medium text-gray-100">Logout</p>
        </div> */}
      </div>
    </div>
  );
}

export default SideBar;

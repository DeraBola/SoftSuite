import React from "react";
import { Icons } from "@/components/Icons/Icons";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Avi } from "@/components/assets/img";

function NavBar () {
  return (
    <div className="fixed z-40 flex w-[calc(100%-302px)] border border-b justify-between left-[302px] top-0 px-5 py-4">
      <div className="flex items-center justify-center gap-9">
        <div className="flex items-center justify-between p-2 gap-10 rounded-sm bg-blue-200">
          <Icons.home />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-blue-100">Change Organization</p>
            <p className="text-base font-bold text-blue-100">PaperSoft Limited</p>
          </div>
          <Icons.arrowDown />
        </div>
        <div className="flex items-center justify-center">
          <Input placeholder="Search for anything..." className="border border-r-0 rounded-r-none py-3 placeholder:text-gray-200 text-base font-normal" />
          <div className="flex items-center justify-center bg-green-100 rounded-tr rounded-br px-3 py-[10px]">
            <Icons.search />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-14">
        <Icons.notification />
        <div className="flex items-center justify-center gap-8">
          <div className="w-[48px] h-[48px]">
            <Image className="w-full h-full rounded-full" src={Avi} alt="avi" />
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="text-[18px] font-bold text-blue-100">Dera bola</p>
            <p className="text-base font-medium text-gray-50">Payroll Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

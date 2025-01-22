import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/spotlight";
import Image from 'next/image';
import logo from '@/public/Ecell.ico'; 

export default function SpotlightPreview() {
  return (
    <div>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl mt-10 flex justify-content flex-col  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl text-center md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          ABOUT US<br />
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-2xl mx-auto">
          
        </p>
      </div>
      <div className=" justify-content md:justify-end mt-8 md:mr-40 hidden sm:flex mr-40 ">
      <Image
        src={logo}
        width={500}
        height={500}
        alt="Picture of the author"
        className="hidden md:block"
      />
      </div>
     </div>
    </div>
  );
}

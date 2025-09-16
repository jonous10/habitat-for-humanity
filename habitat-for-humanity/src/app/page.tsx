"use client";

import { HH_Header } from "@/components/ui/hh-header";
import { HH_Footer } from "@/components/ui/hh-footer";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <HH_Header />
      <div className="
      sm:mx-auto
      group
      ">
        <img
          src="/images/hh-family-expand.jpg"
          className="
            relative h-62 w-full my-10 object-cover transition-all duration-500
            sm:rounded-[50%] sm:w-100 sm:h-100
            group-hover:rounded-[0%]
            group-hover:w-480
            group-hover:h-190
            group-hover:my-0
            group-hover:[transform:rotateY(180deg)]
            transform [transform-style:preserve-3d]
            "
          alt="Habitat for Humanity Family Photo"
          />
          <img src=""/>
      </div>
      
      <HH_Footer/>
    </div>
  );
}

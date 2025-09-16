"use client";

import { HH_Header } from "@/components/ui/hh-header";
import { HH_Footer } from "@/components/ui/hh-footer";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
        <HH_Header/>

        <img
          src="/images/hh-family-expand.jpg"
          className="relative h-62 hover:h-190 w-full object-cover transition-all duration-200 sm:(rounded-full)"
          alt="Habitat for Humanity Family Photo"
        />

        {/* FOOTER */}
      <HH_Footer/>
    </div>
  );
}

"use client";

import { HH_Header } from "@/components/ui/hh-header";
import { HH_Footer } from "@/components/ui/hh-footer";
import { Button } from "@/components/ui/button";
import language_sup from "@/language-sup/language_sup.json"
import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <HH_Header />
      <div className="
      transition-all
      duration-500
      mx-auto
      mt-0
      sm:mb-40
      max-sm:mb-10
      group
      ">
        <img
          src="/images/hh-family-expand2.jpg"
          className="
            [GLOBAL]
            relative 
            w-screen 
            object-cover
            transition-all 
            duration-500
            
            [DESKTOP]
            sm:h-80
            sm:mt-0
            sm:mb-20
            sm:group-hover:h-140
            sm:group-hover:mb-0

            [MOBIL]
            max-sm:mt-10
            max-sm:mb-0
            max-sm:w-80 
            max-sm:h-80 
            max-sm:rounded-[50%]

            [HOVER ON MOBILE]
            max-sm:group-hover:mt-0 
            max-sm:group-hover:w-screen 
            max-sm:group-hover:h-90
            max-sm:group-hover:rounded-none
            max-sm:group-hover:[transform:rotateY(180deg)]
            max-sm:[transform-style:preserve-3d]
            "
          alt="Habitat for Humanity Family Photo"
          />
      </div>
      <Button className="bg-red-600 m-auto">
          <p className="font-bold text-xl">{language_sup.donate[lang as keyof typeof language_sup.donate]}</p>
          <i className="fa-solid fa-heart fa-beat"></i>
      </Button>
      {/* SLOGAN */}
      <h1 
      className="
        text-4xl sm:text-5xl font-extrabold text-center mt-20 
        drop-shadow-md tracking-wide 
        animate-fadeIn
      "
      >
        {language_sup.slogan[lang as keyof typeof language_sup.slogan]}
      </h1>
      {/* SHORT INFO */}
      <p 
      className="
        text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto mt-10 px-6 
        leading-relaxed tracking-normal
        animate-fadeIn delay-200
      "
      >
        {language_sup.shortinfo[lang as keyof typeof language_sup.shortinfo]}
      </p>
      
      <HH_Footer/>
    </div>
  );
}

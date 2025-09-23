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
      sm:mx-auto
      group
      ">
        <img
          src="/images/hh-family-expand2.jpg"
          className="
            transition-all 
            sm:relative
            sm:my-10 
            sm:object-cover 
            sm:duration-500
            sm:rounded-[50%] 
            sm:w-80 
            sm:h-80
            sm:group-hover:rounded-[0%]
            sm:group-hover:w-480
            sm:group-hover:h-120
            sm:group-hover:my-0
            sm:group-hover:[transform:rotateY(180deg)]
            sm:transform [transform-style:preserve-3d]
            "
          alt="Habitat for Humanity Family Photo"
          />
      </div>
      <Button className="bg-red-600 m-auto ">
          <p className="font-bold text-xl">{language_sup.donate[lang as keyof typeof language_sup.donate]}</p>
          <i className="fa-solid fa-heart fa-beat"></i>
      </Button>
      <h1>{language_sup.slogan[lang as keyof typeof language_sup.slogan]}</h1>
      <p>{language_sup.shortinfo[lang as keyof typeof language_sup.shortinfo]}</p>
      <HH_Footer/>
    </div>
  );
}

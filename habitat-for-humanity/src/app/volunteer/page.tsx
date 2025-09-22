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
        
      </div>
      <Button className="bg-red-600 m-auto ">
          <p className="font-bold text-xl">{language_sup.donate[lang as keyof typeof language_sup.donate]}</p>
          <i className="fa-solid fa-heart fa-beat "></i>
      </Button>
      VOLUNTEER
      <HH_Footer/>
    </div>
  );
}

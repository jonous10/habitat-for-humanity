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
      <img src="/images/jreckford-portrait-0_0.jpg" className="object-cover h-120 mb-10"></img>
      {/* ABOUT US INFO */}
      <p
        className="w-160 m-auto text-2xl"
        dangerouslySetInnerHTML={{
          __html: language_sup.about_us_info[
            lang as keyof typeof language_sup.about_us_info
          ],
        }}
      />
      <HH_Footer/>
    </div>
  );
}

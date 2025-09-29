"use client";

import { HH_Header } from "@/components/ui/hh-header";
import { HH_Footer } from "@/components/ui/hh-footer";
import { useLanguage } from "@/contexts/language-context";
import language_sup from "@/language-sup/language_sup.json"

export default function Home() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <HH_Header />
      <img src="/images/voluneer-abroad.jpg" className="object-cover h-120 mb-10"></img>
      <p
        className="w-160 m-auto text-2xl"
        dangerouslySetInnerHTML={{
          __html: language_sup.volunteer_info[
            lang as keyof typeof language_sup.volunteer_info
          ],
        }}
      />

      <HH_Footer/>
    </div>
  );
}

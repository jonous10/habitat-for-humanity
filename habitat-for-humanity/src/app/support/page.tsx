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
      <div className="flex gap-4 justify-center m-4 text-5xl">
          <a href="https://www.facebook.com/habitat" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://x.com/Habitat_EME" target="_blank" rel="noopener noreferrer" aria-label="X">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCi4NpmrCl2oWjBIti8f_5uQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/company/habitat-for-humanity-eme/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/habitatforhumanity/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      SUPPORT
      <HH_Footer/>
    </div>
  );
}

import { Button } from "./button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LanguageSelector } from "./language-select";
import { useLanguage } from "@/contexts/language-context";
import language_sup from "@/language-sup/language_sup.json";

export function HH_Header() {

    const { lang, setLang } = useLanguage();
    
  return (
    <header className="shadow-md">
      {/*DESKTOP FORMAT*/}
      <div className="max-w-8xl mx-auto px-8 py-4 items-center hidden sm:flex">
        <a href="/" className="flex">
          <img  src="/svg/hh-logo.svg" className="w-15 h-auto"/>
          <h1 className="font-bold text-gray-800 flex-1 text-[14px] xl:text-[24px]">Habitat for Humanity</h1>
        </a>
        
        
        
        <nav className="gap-8 flex justify-center flex-1 text-[14px] xl:text-[20px]">
          <a href="/volunteer" className="text-gray-700 hover:text-gray-900">
            <p>{language_sup.volunteer[lang as keyof typeof language_sup.volunteer]}</p>
          </a>
          <a href="/support" className="text-gray-700 hover:text-gray-900">
            <p>{language_sup.support[lang as keyof typeof language_sup.support]}</p>
          </a>
          <a href="/projects" className="text-gray-700 hover:text-gray-900">
            <p>{language_sup.projects[lang as keyof typeof language_sup.projects]}</p>
          </a>
          <a href="/aboutus" className="text-gray-700 hover:text-gray-900">
            <p>{language_sup.aboutus[lang as keyof typeof language_sup.aboutus]}</p>
          </a>
          <a href="/login" className="text-gray-700 hover:text-gray-900">
            <p>{language_sup.login[lang as keyof typeof language_sup.login]}</p>
          </a>
        </nav>
        <div className="flex flex-col items-end gap-1 flex-1">
          <LanguageSelector />
        </div>
      </div>
      {/*MOBILE FORMAT*/}
      <div className="max-w-6xl mx-auto px-4 py-4 flex sm:hidden">
        <div className="flex flex-1">
          <img src="/svg/hh-logo.svg" className="w-15 h-auto"/>
        </div>
        <div className="flex flex-1 justify-center">
          <Button className="bg-red-600 m-auto">
        <p className="font-bold text-xl">{language_sup.donate[lang as keyof typeof language_sup.donate]}</p>
        <i className="fa-solid fa-heart fa-beat"></i>
          </Button>
        </div>
        <div className="flex flex-1 justify-center">
          {/* HAMBURGER MENU */}
          <div className="flex items-center justify-end w-full">
            <Popover>
              <PopoverTrigger asChild>
                <i className="fa-solid fa-bars cursor-pointer fa-xl"></i>
              </PopoverTrigger>
              <PopoverContent className="w-30">
              <div className="p-2">
                <div className="flex items-center justify-center">
                  <p>{language_sup.volunteer[lang as keyof typeof language_sup.volunteer]}</p>
                </div>
                <div className="flex items-center justify-center">
                  <p>{language_sup.support[lang as keyof typeof language_sup.support]}</p>
                </div>
                <div className="flex items-center justify-center">
                  <p>{language_sup.projects[lang as keyof typeof language_sup.projects]}</p>
                </div>
                <div className="flex items-center justify-center">
                  <p>{language_sup.aboutus[lang as keyof typeof language_sup.aboutus]}</p>
                </div>
                <div className="flex items-center justify-center">
                    <p>{language_sup.login[lang as keyof typeof language_sup.login]}</p>
                </div>
              </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  )
}
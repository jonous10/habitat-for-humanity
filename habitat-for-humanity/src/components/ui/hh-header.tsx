import { Button } from "./button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LanguageSelector } from "./language-select";
import { useLanguage } from "@/contexts/language-context";
import language_sup from "@/language-sup/language_sup.json"

export function HH_Header() {

    const { lang, setLang } = useLanguage();
    
  return (
    <header className="shadow-md">
      {/*DESKTOP FORMAT*/}
      <div className="max-w-8xl mx-auto px-8 py-4 items-center justify-between hidden sm:flex">
        <h1 className="text-2xl font-bold text-gray-800">Habitat for Humanity</h1>
        
        <nav className="gap-10 hidden sm:flex">
          <a href="#" className="text-gray-700 hover:text-gray-900">
        <p className="text-xl">{language_sup.volunteer[lang as keyof typeof language_sup.volunteer]}</p>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
        <p className="text-xl">{language_sup.support[lang as keyof typeof language_sup.support]}</p>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
        <p className="text-xl">{language_sup.projects[lang as keyof typeof language_sup.projects]}</p>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
        <p className="text-xl">{language_sup.aboutus[lang as keyof typeof language_sup.aboutus]}</p>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
        <p className="text-xl">{language_sup.login[lang as keyof typeof language_sup.login]}</p>
          </a>
        </nav>
        <div className="flex flex-col items-center gap-1">
          <LanguageSelector />
          <span className="text-xl text-gray-500">{lang}</span>
        </div>
      </div>
      {/*MOBILE FORMAT*/}
      <div className="max-w-6xl mx-auto px-4 py-4 items-center justify-between flex sm:hidden">
        <h1 className="text-1xl font-bold text-gray-800">Habitat for Humanity</h1>
        <Button className="bg-red-600">
          <p className="font-bold text-xl">Donate</p>
          <i className="fa-solid fa-heart fa-beat"></i>
        </Button>
        {/* HAMBURGET MENU */}
        <Popover>
          <PopoverTrigger asChild>
            <i className="fa-solid fa-bars cursor-pointer fa-xl"></i>
          </PopoverTrigger>
          <PopoverContent className="w-80">

          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}
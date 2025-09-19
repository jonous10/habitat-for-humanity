import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import language_sup from "@/language-sup/language_sup.json"
import { Button } from "./button"
import { useLanguage } from "@/contexts/language-context";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./dropdown-menu";


export function LanguageSelector() {
  const { lang, setLang } = useLanguage();

  const handleLanguageChange = (input: string) => {
    setLang(input);
    localStorage.setItem("lang", input);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-4xl w-10 h-10">
          <i className="fa-solid fa-language text-xl"></i>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="p-4">
          {language_sup.supports.map((supportedLang: string) => (
            <div key={supportedLang} className="flex items-center justify-center">
              <p
                className="m-1 cursor-pointer text-2xl self-start"
                onClick={() => handleLanguageChange(supportedLang)}
              >
                {supportedLang}
              </p>
              {lang === supportedLang ? (
                <i className="fa-solid fa-check m- text-xs"></i>
              ) : null}
            </div>
          ))}
          
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
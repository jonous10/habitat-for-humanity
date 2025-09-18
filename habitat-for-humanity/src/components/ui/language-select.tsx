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
                className="m-1 w-12 h-8 cursor-pointer rounded-2xl text-2xl flex items-center justify-center text-center"
                onClick={() => handleLanguageChange(supportedLang)}
              >
                {supportedLang}
              </p>
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
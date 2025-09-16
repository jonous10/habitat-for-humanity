import { Button } from "./button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function HH_Header() {
  return (
    <header className="bg-white shadow-md">
      {/*DESKTOP FORMAT*/}
      <div className="max-w-6xl mx-auto px-4 py-4 items-center justify-between hidden sm:flex">
        <h1 className="text-2xl font-bold text-gray-800">Habitat for Humanity</h1>
        
        <nav className="space-x-4 hidden sm:flex">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Pricing
          </a>
        </nav>
        <Button>
          <i className="fa-solid fa-language text-xl"></i>
        </Button>
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
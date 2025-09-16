import { Button } from "./button";


export function HH_Header() {
    return (
        <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Habitat for Humanity</h1>

          <nav className="space-x-4">
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
      </header>
    )
}
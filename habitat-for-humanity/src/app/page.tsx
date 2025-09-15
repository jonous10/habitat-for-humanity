"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
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

          <Button
          ><i className="fa-slab fa-regular fa-language"></i>
          </Button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow bg-gray-50">
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* SCROLL AREA */}
          <section className="md:col-span-2">
            <Card className="h-[500px]">
              <CardHeader>
                <CardTitle>Information Feed</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="p-4 border rounded-lg bg-white">
                        <h3 className="font-semibold">Item #{i + 1}</h3>
                        <p className="text-sm text-gray-600">
                          This is a piece of example content to show scrolling.
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </section>

          {/* SETTINGS */}
          <aside>
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">Profile</Button>
                <Button className="w-full" variant="outline">
                  Preferences
                </Button>
                <Button className="w-full" variant="secondary">
                  Logout
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white shadow-inner mt-8">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Habitat for Humanity. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

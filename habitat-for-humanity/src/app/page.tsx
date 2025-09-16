"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HH_Header } from "@/components/ui/hh-header";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <HH_Header/>

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

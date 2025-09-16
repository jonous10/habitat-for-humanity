"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HH_Header } from "@/components/ui/hh-header";
import { HH_Footer } from "@/components/ui/hh-footer";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <HH_Header/>

      

      {/* FOOTER */}
      <HH_Footer/>
    </div>
  );
}

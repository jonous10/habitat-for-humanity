"use client";
import { HH_Header } from "@/components/ui/hh-header";
import { HH_Footer } from "@/components/ui/hh-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState } from "react";
import language_sup from "@/language-sup/language_sup.json";
import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [currency, setCurrency] = useState("USD");
  const { lang } = useLanguage();

  const handleDonate = () => {
    const finalAmount = customAmount ? Number(customAmount) : amount;
    alert(`Thank you for your ${donationType} donation of ${currency} ${finalAmount}! ❤️`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <HH_Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              Support Habitat for Humanity
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Donation Type */}
            <Tabs value={donationType} onValueChange={setDonationType} className="w-full">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="one-time">One-Time</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
              <TabsContent value="one-time"></TabsContent>
              <TabsContent value="monthly"></TabsContent>
            </Tabs>

            {/* Currency Selector */}
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD ($)</SelectItem>
                  <SelectItem value="EUR">EUR (€)</SelectItem>
                  <SelectItem value="GBP">GBP (£)</SelectItem>
                  <SelectItem value="CAD">CAD (C$)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Donation Amount */}
            <RadioGroup
              defaultValue="50"
              onValueChange={(val) => setAmount(Number(val))}
              className="grid grid-cols-2 gap-4"
            >
              {[10, 25, 50, 100].map((amt) => (
                <Label
                  key={amt}
                  htmlFor={`amt-${amt}`}
                  className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer"
                >
                  <RadioGroupItem value={String(amt)} id={`amt-${amt}`} />
                  <span>{currency} {amt}</span>
                </Label>
              ))}
            </RadioGroup>

            {/* Custom Amount */}
            <div className="space-y-2">
              <Label htmlFor="customAmount">Custom Amount</Label>
              <Input
                id="customAmount"
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Leave a Message (Optional)</Label>
              <Textarea id="message" placeholder="Share your support message..." />
            </div>

            {/* Donate Button */}
            <Button
              onClick={handleDonate}
              className="bg-red-600 m-auto mt-10 max-sm:hidden text-lg py-6"
            >
              <p className="font-bold text-xl">
                {language_sup.donate[lang as keyof typeof language_sup.donate]}
              </p>
              <i className="fa-solid fa-heart fa-beat"></i>
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* FOOTER */}
      <HH_Footer />
    </div>
  );
}

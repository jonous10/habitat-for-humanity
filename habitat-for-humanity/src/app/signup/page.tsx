"use client";

import { HH_Header } from "@/components/ui/hh-header";
import { HH_Footer } from "@/components/ui/hh-footer";
import { Button } from "@/components/ui/button";
import language_sup from "@/language-sup/language_sup.json"
import { useLanguage } from "@/contexts/language-context";
import { useState } from "react";

export default function Home() {
  const { lang } = useLanguage();
  const [tempUser, setTempUser] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<
    { type: "success" | "error"; message: string } | null
  >(null);

  const isSubmitDisabled =
    isSubmitting ||
    tempUser.trim() === "" ||
    tempEmail.trim() === "" ||
    tempPassword.trim() === "";

  const handleLogin = async () => {
    setIsSubmitting(true);
    setSubmitFeedback(null);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: tempUser,
          email: tempEmail,
          password: tempPassword,
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      setSubmitFeedback({ type: "success", message: "Account created successfully." });
      setTempUser("");
      setTempEmail("");
      setTempPassword("");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error("Failed to create account:", error);
      setSubmitFeedback({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <HH_Header />
      <div className="
      sm:mx-auto
      group
      ">
      </div>
      <Button className="bg-red-600 m-auto ">
          <p className="font-bold text-xl">{language_sup.donate[lang as keyof typeof language_sup.donate]}</p>
          <i className="fa-solid fa-heart fa-beat "></i>
      </Button>
      <div className="mt-10 flex flex-col gap-4 px-6">
        <h2 className="text-2xl font-semibold">Sign up</h2>
        <input
          type="text"
          value={tempUser}
          onChange={(event) => setTempUser(event.target.value)}
          placeholder="Username"
          autoComplete="username"
          className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <input
          type="email"
          value={tempEmail}
          onChange={(event) => setTempEmail(event.target.value)}
          placeholder="Email"
          autoComplete="email"
          className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <input
          type="password"
          value={tempPassword}
          onChange={(event) => setTempPassword(event.target.value)}
          placeholder="Password"
          autoComplete="current-password"
          className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <Button
          className="mt-2 bg-blue-600 font-semibold text-white hover:bg-blue-700"
          onClick={handleLogin}
          disabled={isSubmitDisabled}
        >
          {isSubmitting ? "Submitting..." : "Sign up"}
        </Button>
        {submitFeedback && (
          <p
            className={`text-sm ${
              submitFeedback.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {submitFeedback.message}
          </p>
        )}
      </div>
      <HH_Footer/>
    </div>
  );
}

"use client";

import { HH_Header } from "@/components/ui/hh-header";
import { HH_Footer } from "@/components/ui/hh-footer";
import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <HH_Header />
      <img src="/images/voluneer-abroad.jpg" className="object-cover h-120 mb-10"></img>
      <p className="w-160 m-auto text-2xl">
        <strong>Habitat for Humanity</strong> believes that by <em>connecting communities from around the world</em>, we move closer to a world where <strong>everyone, everywhere has a decent place to call home</strong>.
        <br /><br />
        To achieve this vision, we run a volunteer program that spans <strong>40 countries</strong> called <strong>Global Village</strong> — designed for <em>schools and universities, corporations, and volunteer groups of committed people</em>.
        <br /><br />
        Volunteering with us means you will work, under <strong>expert supervision</strong>, alongside <em>local volunteers and future homeowners</em> as they seek to improve their lives by building or renovating their homes and communities.
        <br /><br />
        The work is <strong>rewarding</strong> in many ways and <u>doesn’t require any prior expertise or training</u>.
        <br /><br />
        After a <strong>three-year hiatus caused by the COVID-19 pandemic</strong>, Habitat’s Global Village program is gradually resuming. We have relaunched volunteer opportunities within regions and are making careful plans to restart a <strong>retooled and even more impactful version</strong> of the global program.
        <br /><br />
        Taking a phased approach, we are happy to present a portfolio of <strong>regional volunteering opportunities in Europe and the Middle East</strong> (for volunteers from these regions), with the potential to resume our <em>global program</em> next year.
        <br /><br />
        At present, we mostly offer volunteering opportunities to <strong>closed groups</strong> — these can be <em>corporate teams, groups from institutions, academia, faith-based groups</em>, and even <em>friends and family</em> who want to <strong>fundraise and work for a good cause</strong>.
        <br /><br />
        You can read more about <strong>corporate volunteering</strong> or contact us via the emails listed below (based on which country you would be traveling from).
      </p>

      <HH_Footer/>
    </div>
  );
}

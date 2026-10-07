"use client";
import { WhatsappLogo } from "@phosphor-icons/react";
import { whatsappLink } from "@/lib/property";
import { trackConversion } from "@/lib/ads";

export default function ContactButtons({ label = "Message on WhatsApp" }: { label?: string }) {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion("whatsapp")} className="btn-accent">
      <WhatsappLogo size={22} weight="fill" />{label}
    </a>
  );
}

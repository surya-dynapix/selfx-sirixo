"use client";

import UniversalFaq from "./UniversalFaq";
import { useSiteContent } from "@/context/SiteContentContext";

export default function HomeFaq() {
  const content = useSiteContent("homefaq", {
    faq1Q: "Do I need to sign a long-term contract?",
    faq1A: "No, all our standard plans are strictly month-to-month. You can scale your kiosk usage up or down depending on your seasonal volume without penalty.",
    faq2Q: "Does the system work offline if internet goes down?",
    faq2A: "Yes! Our cloud software features a robust offline buffering capability. Your local terminals will continue to take orders and sync all data to the cloud the moment connection is restored.",
    faq3Q: "Can I integrate my existing loyalty program?",
    faq3A: "Absolutely. SelfX offers extensive API support and native integrations for most major loyalty, reward, and gift card platforms currently on the market.",
    faq4Q: "How difficult is it to update the menu?",
    faq4A: "Extremely easy. Using the SelfX dashboard, you can drag-and-drop items, update prices, and change photos. Changes instantly propagate to all your kiosks globally.",
    faq5Q: "What happens if a kiosk hardware fails?",
    faq5A: "Our industrial-grade hardware is incredibly reliable, but if an issue occurs, our 24/7 support will remote-diagnose the problem. If it's a hardware fault, we dispatch a replacement unit within 24 hours.",
    faq6Q: "Do you support multiple languages on the ordering screens?",
    faq6A: "Yes, our kiosks support over 30 languages natively, and users can toggle between languages seamlessly during the ordering flow."
  });

  const faqs = [
    { q: content.faq1Q, a: content.faq1A },
    { q: content.faq2Q, a: content.faq2A },
    { q: content.faq3Q, a: content.faq3A },
    { q: content.faq4Q, a: content.faq4A },
    { q: content.faq5Q, a: content.faq5A },
    { q: content.faq6Q, a: content.faq6A },
  ];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200 px-6">
      <UniversalFaq items={faqs} title="Frequently Asked Questions" />
    </section>
  );
}

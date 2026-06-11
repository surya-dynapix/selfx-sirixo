"use client";

import UniversalFaq from "./UniversalFaq";

const faqs = [
  {
    q: "Do I need to sign a long-term contract?",
    a: "No, all our standard plans are strictly month-to-month. You can scale your kiosk usage up or down depending on your seasonal volume without penalty.",
  },
  {
    q: "Does the system work offline if internet goes down?",
    a: "Yes! Our cloud software features a robust offline buffering capability. Your local terminals will continue to take orders and sync all data to the cloud the moment connection is restored.",
  },
  {
    q: "Can I integrate my existing loyalty program?",
    a: "Absolutely. SelfX offers extensive API support and native integrations for most major loyalty, reward, and gift card platforms currently on the market.",
  },
  {
    q: "How difficult is it to update the menu?",
    a: "Extremely easy. Using the SelfX dashboard, you can drag-and-drop items, update prices, and change photos. Changes instantly propagate to all your kiosks globally.",
  },
  {
    q: "What happens if a kiosk hardware fails?",
    a: "Our industrial-grade hardware is incredibly reliable, but if an issue occurs, our 24/7 support will remote-diagnose the problem. If it's a hardware fault, we dispatch a replacement unit within 24 hours.",
  },
  {
    q: "Do you support multiple languages on the ordering screens?",
    a: "Yes, our kiosks support over 30 languages natively, and users can toggle between languages seamlessly during the ordering flow.",
  },
];

export default function HomeFaq() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200 px-6">
      <UniversalFaq items={faqs} title="Frequently Asked Questions" />
    </section>
  );
}

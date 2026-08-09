"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FAQItem = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-white">{item.question}</span>
              <span
                aria-hidden="true"
                className={cn(
                  "shrink-0 text-primary-light transition-transform",
                  isOpen && "rotate-45",
                )}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="px-5 pb-4 text-sm text-white/70">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

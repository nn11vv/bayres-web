import type { ServiceFaqContent } from "@/lib/types";

export const servicesFaq: ServiceFaqContent[] = [
  {
    slug: "persianas",
    faq: [
      {
        question: "What materials do you work with?",
        answer:
          "We work with PVC and aluminium blinds, the two most common materials in local homes. Each wears differently and we know what to check for in each case.",
      },
      {
        question: "Can I motorise a blind I already have installed?",
        answer:
          "Yes, in most cases an existing blind can be motorised without replacing the whole thing. We check it during the visit and tell you if it's straightforward or needs some adaptation.",
      },
      {
        question: "My blind is stuck and won't close — is that urgent for you?",
        answer:
          "Yes. A stuck blind, especially on the ground floor, is a security issue and we treat it as a priority. We do what we can to get there the same day or the next.",
      },
      {
        question: "How much does it cost to repair a blind?",
        answer:
          "It depends on the problem — a broken strap isn't the same job as a motor. We can give you a ballpark price over the phone if you describe the issue, and confirm it once we see it in person, no surprises.",
      },
    ],
  },
  {
    slug: "mosquiteras",
    faq: [
      {
        question: "What types of fly screens do you install?",
        answer:
          "Pleated, roller and fixed. We help you choose based on the type of window or door and how you'll use it.",
      },
      {
        question: "Do you take the measurements or do I?",
        answer:
          "We take them ourselves during the visit. Every window has its quirks and we'd rather measure in person to get a proper fit.",
      },
      {
        question: "How long from quote to installation?",
        answer:
          "It depends on the type of screen and whether it's a standard or special size. We give you an estimated timeframe once the order's confirmed — we won't promise dates we can't keep.",
      },
    ],
  },
  {
    slug: "aire-acondicionado",
    faq: [
      {
        question: "Which brands do you work with?",
        answer:
          "We work with several brands on the market depending on what you need and your budget. We recommend specific options during the visit, not just one fixed brand.",
      },
      {
        question: "Split or ducted — which is better for me?",
        answer:
          "It depends on the property: a split is simpler and quicker to install, while ducted systems distribute air better across several rooms but involve more work. We'll talk you through the options for your case.",
      },
      {
        question: "Do you handle maintenance after installation?",
        answer:
          "We handle the full installation. For ongoing maintenance we recommend a specialised technical service, so you know whoever checks the unit is properly certified for it.",
      },
    ],
  },
  {
    slug: "electricidad",
    faq: [
      {
        question: "What kind of electrical work do you do?",
        answer:
          "Small home jobs: light fittings, ceiling fans, hobs, sockets and minor repairs. We don't do full electrical installations.",
      },
      {
        question: "I need to rewire my whole house — can you do that?",
        answer:
          "For work that size, we recommend a specialised electrician. We handle one-off jobs and small repairs, not full rewiring projects.",
      },
      {
        question: "Is it safe for you to fit sockets or lights?",
        answer:
          "Yes, we do that work carefully and within what counts as a small domestic repair. If a job goes beyond that scope, we'll tell you directly instead of doing it anyway.",
      },
    ],
  },
];

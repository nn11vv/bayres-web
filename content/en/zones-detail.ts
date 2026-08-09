import type { ZoneDetailContent, ZoneSlug } from "@/lib/types";

export const zonesDetail: Record<ZoneSlug, ZoneDetailContent> = {
  "playa-san-juan": {
    name: "Playa San Juan",
    slug: "playa-san-juan",
    hero: {
      title: "Blind Repair in Playa San Juan",
      subtitle: "Repairs, installation and fly screens. A regular service area for us.",
      badge: "Regular service area",
    },
    intro:
      "Playa San Juan is one of the areas we work in most: tall blocks of flats, sea views, and a salty breeze that doesn't do blinds any favours. The mechanism seizing up or the strap wearing out before its time is, by far, the most common issue we come across here.\n\nWe've been working in this area for over 20 years, in both private flats and the residents' associations that run the tall buildings so typical of Playa San Juan. Most blinds here are aluminium, built to handle the coastal weather, but even aluminium struggles after years of salt exposure if the mechanism isn't looked after.\n\nPlaya San Juan also has a large community of foreign residents — British, Nordic, German — so in this particular area we use English almost as often as Spanish. From our base in Mutxamel we're there in 15-20 minutes, so when something's urgent in Playa San Juan we can usually sort it out quickly.\n\nBeyond repairs, we install a fair number of new fly screens here too — flats with sea views tend to want their windows open without letting insects in — and we motorise blinds for residents who'd rather not raise and lower them by hand several times a day.",
    localContext: {
      title: "What we know about Playa San Juan",
      points: [
        "The sea breeze wears out straps and mechanisms faster: it's the issue we see most in the area.",
        "Lots of tall blocks with aluminium blinds: we're used to working with residents' associations.",
        "A good share of our customers here are foreign residents: English-speaking service, no problem.",
        "We're there in 15-20 minutes from our base in Mutxamel.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Blind repair",
        description: "Straps, cords, axles and motors. We know the coastal wear and tear you get in Playa San Juan.",
      },
      {
        icon: "🦟",
        title: "Made-to-measure fly screens",
        description: "Pleated, roller or fixed — popular in the sea-view flats around here.",
      },
      {
        icon: "⚡",
        title: "Motorisation",
        description: "We automate existing blinds — handy on higher floors where raising them by hand gets old fast.",
      },
    ],
    faq: [
      {
        question: "Do you work with residents' associations in Playa San Juan?",
        answer:
          "Yes. We take on private flats as well as the residents' associations that run the tall blocks in the area. When several neighbours need the same work, we quote per block and adjust the price.",
      },
      {
        question: "How quickly can you get to Playa San Juan for an urgent job?",
        answer:
          "Playa San Juan is 15-20 minutes from our base in Mutxamel. If you call in the morning, we do what we can to get there the same day or the next.",
      },
      {
        question: "Do you repair blinds damaged by the sea breeze?",
        answer:
          "It's the most common job we do in the area. We replace corroded straps, mechanisms seized by salt, and bent slats. We work with PVC and aluminium, all sizes.",
      },
      {
        question: "Is there an English-speaking service in Playa San Juan?",
        answer:
          "Yes, no problem at all. A good share of our customers in the area are foreign residents and we have a direct English line.",
      },
    ],
    cta: {
      title: "Need help in Playa San Juan?",
      subtitle: "No-obligation quote. We'll explain the price before starting.",
    },
  },

  "el-campello": {
    name: "El Campello",
    slug: "el-campello",
    hero: {
      title: "Blind Repair in El Campello",
      subtitle: "Blinds, fly screens and full installations across the town.",
      badge: "Regular service area",
    },
    intro:
      "El Campello mixes long-time residents with holiday homes that fill up mostly in season, so we see a bit of everything here: large detached houses with big blinds, and flats near the sea where fly screens are the most requested job, thanks to how close everything is to the beach and green spaces.\n\nWe're only 10 minutes from El Campello from our base in Mutxamel, which makes it one of the areas we can reach fastest when something urgent comes up. Many of the detached houses in the town have oversized blinds, and that's where motorisation makes a real difference — raising a two-metre blind by hand is a different story to pressing a button.\n\nThere's also a sizeable community of retired British residents in El Campello, and we speak English with them regularly. If you've got a holiday home and only use it part of the year, we understand a problem often turns up right when you arrive — so tell us your dates and we'll do what we can to prioritise that visit.\n\nIn El Campello we do a bit of everything: repairing blinds with years of wear, fitting new fly screens for summer nights, and motorising blinds for anyone tired of fighting with cords.",
    localContext: {
      title: "What we know about El Campello",
      points: [
        "High demand for fly screens thanks to the proximity to the sea and green spaces.",
        "Detached houses with large blinds — motorisation makes a noticeable difference here.",
        "A sizeable community of retired British residents: English-speaking service as standard.",
        "We're there in 10 minutes from Mutxamel — one of our fastest response areas.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Blind repair",
        description: "Straps, cords, axles and motors — including the oversized blinds typical of detached houses here.",
      },
      {
        icon: "🦟",
        title: "Made-to-measure fly screens",
        description: "The most requested job in El Campello: pleated, roller or fixed for bug-free summer evenings.",
      },
      {
        icon: "⚡",
        title: "Motorisation",
        description: "We automate large blinds — a change that really stands out in the bigger houses around town.",
      },
    ],
    faq: [
      {
        question: "How quickly can you get to El Campello?",
        answer:
          "El Campello is just 10 minutes from our base in Mutxamel, so it's usually one of the areas where we respond fastest.",
      },
      {
        question: "Do you fit fly screens in holiday homes?",
        answer:
          "Yes. If you only use the property part of the year, tell us your dates and we'll do what we can to arrange the visit while you're there.",
      },
      {
        question: "Do you motorise large blinds in detached houses?",
        answer: "Yes, it's one of the jobs we do most in El Campello. Motorisation makes a big difference on oversized blinds.",
      },
      {
        question: "Is there an English-speaking service in El Campello?",
        answer:
          "Yes. There's a sizeable community of retired British residents in the area and we deal with English calls and visits regularly.",
      },
    ],
    cta: {
      title: "Need help in El Campello?",
      subtitle: "No-obligation quote, urgent or not.",
    },
  },

  mutxamel: {
    name: "Mutxamel",
    slug: "mutxamel",
    hero: {
      title: "Blind Repair in Mutxamel",
      subtitle: "Our home base. Neighbours who've known us from day one.",
      badge: "Our base",
    },
    intro:
      "Mutxamel isn't just another area for us — it's where it all started. Julián began repairing blinds for neighbours and acquaintances in Mutxamel over 20 years ago, and we're still here today, with Juan and Valentín working alongside him in the same town.\n\nThat means our relationship with a lot of customers in Mutxamel is a bit different: we know each other, we often know which building you're in, and quite often we already know what kind of blind your home has before we even arrive. The town has a mix of older housing — with the classic PVC blinds you'd expect — and newer builds where we're already seeing factory-fitted motorisation.\n\nBeing our base means there's no travel time in Mutxamel: if something's urgent, we're usually the first ones able to drop by. We repair straps, axles and motors on the old-style blinds, fit made-to-measure fly screens, and motorise the ones still being raised by hand.\n\nIf you're from Mutxamel, you've probably already met someone we've worked for. And if you're new to the town, we're happy to explain how we work before you decide anything.",
    localContext: {
      title: "What we know about Mutxamel",
      points: [
        "It's our base: no travel time, so we're often the first able to help.",
        "We personally know a good share of the neighbours we work for in town.",
        "A mix of older housing with classic PVC blinds and newer builds with factory motorisation.",
        "Over 20 years working in the same town where we live.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Blind repair",
        description: "Straps, cords, axles and motors — we know the classic PVC blinds in the older homes well.",
      },
      {
        icon: "🦟",
        title: "Made-to-measure fly screens",
        description: "Pleated, roller or fixed, measured and fitted without the back-and-forth since it's our own patch.",
      },
      {
        icon: "⚡",
        title: "Motorisation",
        description: "We automate old-style blinds — plenty of neighbours in Mutxamel have already made the switch.",
      },
    ],
    faq: [
      {
        question: "Is Persianas Bayres based in Mutxamel?",
        answer: "Yes, that's where we've had our base for over 20 years, and where it all started with Julián.",
      },
      {
        question: "Do you handle same-day jobs in Mutxamel?",
        answer:
          "With no travel time involved, Mutxamel is usually where we can organise ourselves fastest when something's urgent.",
      },
      {
        question: "Do you repair old PVC blinds?",
        answer: "Yes, it's one of the most common jobs in town: straps, axles and mechanisms on the classic PVC blinds.",
      },
      {
        question: "Do you give a no-obligation quote in Mutxamel?",
        answer: "Always. We explain what's needed and what it costs before starting anything.",
      },
    ],
    cta: {
      title: "Are you from Mutxamel?",
      subtitle: "We're your neighbours. Get in touch, no obligation.",
    },
  },

  alicante: {
    name: "Alicante",
    slug: "alicante",
    hero: {
      title: "Blind Repair in Alicante",
      subtitle: "Repairs and installation across the whole city.",
      badge: "Regular service area",
    },
    intro:
      "Alicante city, along with Playa San Juan, is one of the areas where we see the widest variety of blinds: depending on how old the building is, we come across everything from 1970s wooden blinds to recently fitted aluminium ones. We work in private flats, but also with residents' associations deciding to renew several blinds in a building at once.\n\nThe density of blocks of flats in Alicante means urgent repairs on higher floors are one of the most common requests we get: a stuck blind on the third or fourth floor, with no service lift, is a real problem for whoever lives there, and we understand that.\n\nWe're in Alicante in around 15 minutes from Mutxamel, which lets us respond quickly to most enquiries from the city. Besides blinds, we fit a good number of fly screens in flats looking to air out the place without letting mosquitoes in, and we motorise blinds for residents who'd rather not raise and lower them by hand several times a day.\n\nIf your residents' association is thinking about renewing the blinds across the building, we also work by block, adjusting the quote when several flats need the same thing.",
    localContext: {
      title: "What we know about Alicante",
      points: [
        "Wide variety of blinds depending on building age: from old wooden ones to recent aluminium.",
        "High demand for urgent repairs on higher floors with no service lift.",
        "We work with residents' associations renewing several blinds in a building at once.",
        "We're in the city in around 15 minutes from our base in Mutxamel.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Blind repair",
        description: "From old wooden blinds to recent aluminium — we adapt to whatever your building has.",
      },
      {
        icon: "🦟",
        title: "Made-to-measure fly screens",
        description: "For flats wanting fresh air without the mosquitoes, popular across the city.",
      },
      {
        icon: "⚡",
        title: "Motorisation",
        description: "We automate existing blinds — handy on higher floors with no service lift.",
      },
    ],
    faq: [
      {
        question: "Do you handle urgent repairs on higher floors in Alicante?",
        answer:
          "Yes, it's one of the most frequent requests in the city. We prioritise urgent jobs where the blind affects the home's security.",
      },
      {
        question: "Do you work with residents' associations in Alicante?",
        answer: "Yes. If several flats in a building need blinds renewed, we quote per block and adjust the price.",
      },
      {
        question: "How quickly can you get to Alicante city?",
        answer:
          "Around 15 minutes from our base in Mutxamel, so it's usually one of the areas where we respond fastest.",
      },
      {
        question: "Do you repair old wooden blinds?",
        answer: "Yes, we come across plenty of buildings in Alicante with 1970s wooden blinds and repair them regularly.",
      },
    ],
    cta: {
      title: "Need help in Alicante?",
      subtitle: "No-obligation quote, for your flat or your building.",
    },
  },

  bussot: {
    name: "Bussot",
    slug: "bussot",
    hero: {
      title: "Blind Repair in Bussot",
      subtitle: "Installation and repairs inland from Alicante.",
      badge: "Regular service area",
    },
    intro:
      "Bussot is a small inland village, and the type of work changes quite a bit compared to the coast: instead of one-off repairs, in Bussot we're asked more often for full installations, especially in detached houses where blinds were sometimes left unresolved during the build.\n\nBeing a rural area with bigger-than-average houses, the blinds tend to be larger too, which makes motorisation particularly useful here — raising a standard blind by hand is one thing, raising a large country-house one is another.\n\nWe're in Bussot in around 15 minutes from Mutxamel. It's not an area where we visit every day, but we know it well and have been working there regularly for years.\n\nIf you're building or renovating a property in Bussot and haven't decided on blinds yet, we're happy to talk you through the PVC and aluminium options before you buy anything.",
    localContext: {
      title: "What we know about Bussot",
      points: [
        "More demand for full installations than repairs: plenty of houses being built or renovated.",
        "Larger-than-average blinds, typical of the village's rural housing.",
        "Motorisation makes a particularly noticeable difference on large country-house blinds.",
        "We're there in around 15 minutes from our base in Mutxamel.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Blind installation",
        description: "New PVC and aluminium blinds for houses being built or renovated.",
      },
      {
        icon: "🦟",
        title: "Made-to-measure fly screens",
        description: "Fixed, roller or pleated, fitted to the larger windows typical around the village.",
      },
      {
        icon: "⚡",
        title: "Motorisation",
        description: "Especially useful on the large blinds you tend to find in Bussot.",
      },
    ],
    faq: [
      {
        question: "Do you install new blinds in properties being built in Bussot?",
        answer:
          "Yes, it's one of the jobs we do most in the area. We talk you through the PVC and aluminium options before you decide.",
      },
      {
        question: "Do you handle oversized blinds?",
        answer: "Yes, it's common in Bussot's houses. Motorisation tends to stand out a lot more than on a standard-sized blind.",
      },
      {
        question: "How quickly can you get to Bussot?",
        answer: "Around 15 minutes from our base in Mutxamel.",
      },
    ],
    cta: {
      title: "Building or renovating in Bussot?",
      subtitle: "We'll talk you through the options before you decide.",
    },
  },

  benidorm: {
    name: "Benidorm",
    slug: "benidorm",
    hero: {
      title: "Blind Repair in Benidorm",
      subtitle: "Blinds and fly screens for flats and residents' associations.",
      badge: "Edge of our regular area",
    },
    intro:
      "Benidorm is the furthest area from our usual radius — around 40-45 minutes from Mutxamel — but we still go regularly, especially to specific areas like Rincón de Loix and Cala Finestrat, where there's a good number of permanent foreign residents.\n\nThe city has a particular type of housing: plenty of holiday flats and residents' associations with high tenant turnover, which means blinds tend to wear out faster than usual. It's common for us to get a call to check several flats in the same building at once, especially before the high season.\n\nSince Benidorm sits at the edge of our usual area, for small one-off jobs we sometimes coordinate several visits in the city on the same day to make the trip worthwhile. For larger installations or multi-flat projects, going out on a dedicated visit is no problem at all.\n\nIf you manage a residents' association or several flats in Benidorm, tell us how many units need checking and we'll coordinate the visit as efficiently as possible for everyone.",
    localContext: {
      title: "What we know about Benidorm",
      points: [
        "Edge of our usual radius: 40-45 minutes from Mutxamel.",
        "Plenty of holiday flats with high tenant turnover and faster blind wear.",
        "Permanent foreign residents concentrated in areas like Rincón de Loix and Cala Finestrat.",
        "We coordinate several visits on the same day when there are multiple flats or a whole building involved.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Blind repair",
        description: "For the faster wear typical of high-turnover holiday flats.",
      },
      {
        icon: "🦟",
        title: "Made-to-measure fly screens",
        description: "Fitted in both holiday flats and permanent homes.",
      },
      {
        icon: "⚡",
        title: "Motorisation",
        description: "For residents' associations looking to upgrade several flats at once.",
      },
    ],
    faq: [
      {
        question: "Do you come to Benidorm even though it's far from your base?",
        answer:
          "Yes, we go regularly, especially to areas like Rincón de Loix and Cala Finestrat. For small one-off jobs, we sometimes coordinate several visits on the same day.",
      },
      {
        question: "Do you work with residents' associations managing several flats?",
        answer: "Yes, it's a common job in Benidorm. Tell us how many units need checking and we'll coordinate the visit efficiently.",
      },
      {
        question: "Is there an English-speaking service in Benidorm?",
        answer:
          "Yes, there are plenty of permanent foreign residents in the city and we deal with English calls and visits without any issue.",
      },
    ],
    cta: {
      title: "Need help in Benidorm?",
      subtitle: "Tell us about your flat or building and we'll coordinate the visit.",
    },
  },

  javea: {
    name: "Jávea",
    slug: "javea",
    hero: {
      title: "Blind Repair in Jávea",
      subtitle: "Service on request for larger jobs.",
      badge: "Extended area · on request",
    },
    intro:
      "Jávea sits outside our usual working area, on the northern coast of the province, but we take on enquiries for larger jobs. It's an area with plenty of British residents and a fairly premium market, where higher-end blinds and fly screens tend to be the norm.\n\nWe don't travel to Jávea for a small one-off repair — the trip doesn't make sense for that — but we do for full installations or multi-property projects. If your enquiry fits that description, message us with the details and we'll see if we can arrange a visit.",
    localContext: {
      title: "What we know about Jávea",
      points: [
        "A premium market: higher-end blinds and fly screens.",
        "Plenty of British residents, English communication as standard.",
        "Service on request, better suited to larger projects than one-off repairs.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Blind installation",
        description: "Full projects, subject to prior enquiry.",
      },
      {
        icon: "🦟",
        title: "Made-to-measure fly screens",
        description: "For local properties, on request.",
      },
    ],
    faq: [
      {
        question: "Do you work in Jávea?",
        answer:
          "On request, mostly for full installations or multi-property projects. For small one-off repairs, the trip doesn't always make sense.",
      },
      {
        question: "Is there an English-speaking service in Jávea?",
        answer: "Yes, no problem. It's an area with plenty of British residents.",
      },
    ],
    cta: {
      title: "Got a project in Jávea?",
      subtitle: "Tell us what you need and we'll see if we can help.",
    },
  },

  altea: {
    name: "Altea",
    slug: "altea",
    hero: {
      title: "Blind Repair in Altea",
      subtitle: "Service on request for larger jobs.",
      badge: "Extended area · on request",
    },
    intro:
      "Altea has a large international community and a very particular traditional architecture: houses with wooden blinds combined with more modern aluminium installations. It's a combination that takes knowing both materials well.\n\nAs with other extended areas, in Altea we take on enquiries on request, prioritising full installations or renovation projects over small one-off repairs. If you've got a traditionally built property and need to repair or replace wooden blinds, send us the details.",
    localContext: {
      title: "What we know about Altea",
      points: [
        "Traditional architecture with a mix of wooden and aluminium blinds.",
        "A large international resident community.",
        "Service on request, prioritising installation or renovation projects.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Wooden & aluminium blinds",
        description: "Repair and installation adapted to the area's traditional architecture.",
      },
      {
        icon: "🦟",
        title: "Made-to-measure fly screens",
        description: "On request.",
      },
    ],
    faq: [
      {
        question: "Do you work with wooden blinds in Altea?",
        answer:
          "Yes, it's common in the area's traditional architecture. Tell us the condition of the blind and we'll work out the best solution.",
      },
      {
        question: "Do you take on small jobs in Altea?",
        answer:
          "We prioritise full installations or renovation projects. For smaller cases, send us the details and we'll see if we can coordinate.",
      },
    ],
    cta: {
      title: "Got a traditional property in Altea?",
      subtitle: "Tell us about the condition of your blinds.",
    },
  },

  villajoyosa: {
    name: "Villajoyosa",
    slug: "villajoyosa",
    hero: {
      title: "Blind Repair in Villajoyosa",
      subtitle: "Service on request for larger jobs.",
      badge: "Extended area · on request",
    },
    intro:
      "Villajoyosa is a charming fishing town with a good deal of historic housing in the old quarter, which comes with fairly specific needs: smaller openings, older blinds, and buildings with heritage or unusual features.\n\nWe take on enquiries in Villajoyosa on request, assessing each case individually since historic properties usually need bespoke solutions rather than standard installation. If you've got a property in the old quarter with blinds that don't fit standard sizes, send us the details and we'll go through your options.",
    localContext: {
      title: "What we know about Villajoyosa",
      points: [
        "Historic housing in the old quarter with specific requirements.",
        "Older openings and blinds that don't always fit standard sizes.",
        "Service on request, assessing each case individually.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Made-to-measure blinds",
        description: "For historic properties with non-standard openings.",
      },
      {
        icon: "🦟",
        title: "Made-to-measure fly screens",
        description: "On request.",
      },
    ],
    faq: [
      {
        question: "Do you work on historic properties in Villajoyosa?",
        answer: "Yes, on request. Old-quarter properties usually need bespoke measurements rather than standard installation.",
      },
      {
        question: "Do you take on one-off enquiries in Villajoyosa?",
        answer: "We assess each case. Send us the details of your property and we'll see if we can arrange a visit.",
      },
    ],
    cta: {
      title: "Got a property in Villajoyosa's old quarter?",
      subtitle: "Tell us about your blinds.",
    },
  },
};

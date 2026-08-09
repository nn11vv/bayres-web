import type { ZoneDetailContent, ZoneSlug } from "@/lib/types";

export const zonesDetail: Record<ZoneSlug, ZoneDetailContent> = {
  "playa-san-juan": {
    name: "Playa San Juan",
    slug: "playa-san-juan",
    hero: {
      title: "Persianista en Playa San Juan",
      subtitle: "Reparación, instalación y mosquiteras. Servicio habitual en el barrio.",
      badge: "Servicio habitual en la zona",
    },
    intro:
      "Playa San Juan es una de las zonas donde más trabajamos: bloques de pisos altos, mucha vista al mar y una brisa marina que no perdona a las persianas. Es habitual que la sal del aire termine gripando el mecanismo o desgastando la cinta antes de tiempo, y ese es justamente el problema que más nos encontramos cuando vamos a Playa San Juan.\n\nTrabajamos aquí desde hace más de 20 años, tanto en viviendas particulares como en comunidades de vecinos de los edificios altos que caracterizan la zona. La mayoría son persianas de aluminio, pensadas para aguantar el clima costero, pero incluso el aluminio sufre con los años si el mecanismo no se cuida.\n\nPlaya San Juan también tiene una comunidad grande de residentes extranjeros —ingleses, nórdicos, alemanes— y por eso en esta zona en particular la atención en inglés se usa casi tanto como en español. Desde nuestra base en Mutxamel llegamos en 15-20 minutos, así que cuando algo urge en Playa San Juan, normalmente podemos organizarnos rápido.\n\nAdemás de reparación, en Playa San Juan instalamos bastantes mosquiteras nuevas —los pisos con vistas al mar suelen querer tener las ventanas abiertas sin bichos— y motorizamos persianas para vecinos que ya no quieren subir y bajar a mano varias veces al día.",
    localContext: {
      title: "Lo que sabemos de Playa San Juan",
      points: [
        "La brisa marina desgasta antes las cintas y mecanismos: es el problema que más vemos en la zona.",
        "Muchos bloques altos con persianas de aluminio: tenemos experiencia trabajando con comunidades de vecinos.",
        "Buena parte de nuestros clientes en Playa San Juan son extranjeros: atendemos en inglés sin problema.",
        "Llegamos en 15-20 minutos desde nuestra base en Mutxamel.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Reparación de persianas",
        description:
          "Cambio de cintas, correas, ejes y motores. Conocemos bien el desgaste típico de la costa en Playa San Juan.",
      },
      {
        icon: "🦟",
        title: "Mosquiteras a medida",
        description:
          "Plisadas, enrollables y fijas. Muy pedidas en los pisos con vistas al mar de la zona.",
      },
      {
        icon: "⚡",
        title: "Motorización",
        description:
          "Automatizamos persianas existentes. Ideal para pisos altos donde subir y bajar a mano cansa.",
      },
    ],
    faq: [
      {
        question: "¿Trabajan en comunidades de vecinos de Playa San Juan?",
        answer:
          "Sí. Atendemos tanto viviendas particulares como comunidades de los bloques altos de la zona. Cuando varios vecinos necesitan lo mismo, presupuestamos por bloque y ajustamos el precio.",
      },
      {
        question: "¿Cuánto tardan en llegar a Playa San Juan si es urgente?",
        answer:
          "Playa San Juan está a 15-20 minutos de nuestra base en Mutxamel. Si llamás por la mañana, hacemos lo posible por llegar el mismo día o al siguiente.",
      },
      {
        question: "¿Reparan persianas dañadas por la brisa marina?",
        answer:
          "Es el trabajo que más hacemos en la zona. Cambiamos cintas oxidadas, mecanismos gripados por la sal y lamas dobladas. Trabajamos con PVC y aluminio, todas las medidas.",
      },
      {
        question: "¿Atienden en inglés en Playa San Juan?",
        answer:
          "Sí, sin problema. Buena parte de nuestros clientes en la zona son residentes extranjeros y tenemos línea directa en inglés.",
      },
    ],
    cta: {
      title: "¿Necesitás ayuda en Playa San Juan?",
      subtitle: "Consulta sin compromiso. Presupuesto claro antes de empezar.",
    },
  },

  "el-campello": {
    name: "El Campello",
    slug: "el-campello",
    hero: {
      title: "Persianista en El Campello",
      subtitle: "Persianas, mosquiteras e instalación completa en el municipio.",
      badge: "Servicio habitual en la zona",
    },
    intro:
      "El Campello mezcla vivienda de toda la vida con segundas residencias que se llenan sobre todo en temporada. Eso hace que en la zona nos encontremos de todo: desde chalets con persianas grandes hasta pisos junto al mar donde lo que más se pide son mosquiteras, por la cercanía a zonas verdes y la playa.\n\nEstamos a solo 10 minutos de El Campello desde nuestra base en Mutxamel, así que es una de las zonas donde más rápido podemos llegar cuando hay una urgencia. Muchas viviendas unifamiliares del municipio tienen persianas de gran tamaño, y ahí la motorización suele ser una mejora que se nota mucho —no es lo mismo subir a mano una persiana de dos metros que apretar un botón.\n\nTambién hay una comunidad importante de jubilados ingleses residentes en El Campello, y con ellos hablamos en inglés de forma habitual. Si tenés una vivienda de temporada y solo la usás parte del año, entendemos que a veces se descubre un problema justo cuando llegás de vacaciones: por eso intentamos priorizar esas visitas cuando nos explicás la situación.\n\nEn El Campello hacemos de todo un poco: reparación de persianas con años de uso, instalación de mosquiteras nuevas para las noches de verano, y motorización para quien ya no quiere pelear con cintas.",
    localContext: {
      title: "Lo que sabemos de El Campello",
      points: [
        "Mucha demanda de mosquiteras por la cercanía al mar y las zonas verdes del municipio.",
        "Viviendas unifamiliares con persianas grandes: la motorización se nota especialmente aquí.",
        "Comunidad grande de residentes ingleses jubilados: atendemos en inglés sin problema.",
        "Llegamos en 10 minutos desde Mutxamel, una de las zonas más rápidas para nosotros.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Reparación de persianas",
        description:
          "Cintas, correas, ejes y motores, incluida la persiana grande típica de las viviendas unifamiliares de la zona.",
      },
      {
        icon: "🦟",
        title: "Mosquiteras a medida",
        description:
          "El servicio más pedido en El Campello: plisadas, enrollables y fijas para disfrutar el verano sin bichos.",
      },
      {
        icon: "⚡",
        title: "Motorización",
        description:
          "Automatizamos persianas grandes. Un cambio que se nota mucho en chalets con persianas de gran tamaño.",
      },
    ],
    faq: [
      {
        question: "¿Cuánto tardan en llegar a El Campello?",
        answer:
          "El Campello está a solo 10 minutos de nuestra base en Mutxamel, así que suele ser una de las zonas donde respondemos más rápido.",
      },
      {
        question: "¿Instalan mosquiteras en viviendas de temporada?",
        answer:
          "Sí. Si solo usás la vivienda parte del año, contanos las fechas y hacemos lo posible por coordinar la visita cuando estés.",
      },
      {
        question: "¿Motorizan persianas grandes de chalet?",
        answer:
          "Sí, es uno de los trabajos que más hacemos en El Campello. Las persianas de gran tamaño se notan mucho al motorizarlas.",
      },
      {
        question: "¿Hablan inglés en El Campello?",
        answer:
          "Sí, hay una comunidad grande de residentes ingleses en la zona y atendemos en inglés habitualmente.",
      },
    ],
    cta: {
      title: "¿Necesitás ayuda en El Campello?",
      subtitle: "Consulta sin compromiso, con o sin urgencia.",
    },
  },

  mutxamel: {
    name: "Mutxamel",
    slug: "mutxamel",
    hero: {
      title: "Persianista en Mutxamel",
      subtitle: "Nuestra base. Los vecinos que nos conocen desde el primer día.",
      badge: "Nuestra sede",
    },
    intro:
      "Mutxamel no es una zona más para nosotros: es donde arrancó todo. Julián empezó reparando persianas de vecinos y conocidos en Mutxamel hace más de 20 años, y hoy seguimos aquí, con Juan y Valentín trabajando junto a él en el mismo pueblo.\n\nEso hace que en Mutxamel la relación con muchos clientes sea distinta: nos conocemos, sabemos qué edificio es cada uno, y muchas veces ya sabemos qué tipo de persiana tiene tu casa antes de llegar. El municipio tiene una mezcla de vivienda antigua —con las clásicas persianas de PVC de toda la vida— y construcción más nueva, donde ya vemos más motorización de fábrica.\n\nAl ser nuestra base, en Mutxamel no hay tiempo de desplazamiento: si hay una urgencia, normalmente somos los primeros en poder pasar. Reparamos cintas, ejes y motores en las persianas de siempre, instalamos mosquiteras a medida, y motorizamos las que todavía se manejan a mano.\n\nSi sos de Mutxamel, probablemente ya conocés a alguien que hemos atendido antes. Y si sos nuevo en el pueblo, con gusto te explicamos cómo trabajamos antes de que decidas nada.",
    localContext: {
      title: "Lo que sabemos de Mutxamel",
      points: [
        "Es nuestra base: sin tiempo de desplazamiento, somos de los primeros en poder pasar.",
        "Conocemos personalmente a buena parte de los vecinos que atendemos en el pueblo.",
        "Mezcla de vivienda antigua con persianas de PVC clásicas y construcción nueva con motorización de fábrica.",
        "Más de 20 años trabajando en el mismo municipio donde vivimos.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Reparación de persianas",
        description:
          "Cintas, correas, ejes y motores. Conocemos bien las persianas de PVC clásicas de las viviendas más antiguas del pueblo.",
      },
      {
        icon: "🦟",
        title: "Mosquiteras a medida",
        description:
          "Plisadas, enrollables y fijas, medidas y colocadas sin vueltas al ser nuestra propia zona.",
      },
      {
        icon: "⚡",
        title: "Motorización",
        description: "Automatizamos persianas de toda la vida. Muchos vecinos de Mutxamel ya dieron el salto.",
      },
    ],
    faq: [
      {
        question: "¿Persianas Bayres es de Mutxamel?",
        answer:
          "Sí, es donde tenemos nuestra base desde hace más de 20 años y donde empezó todo con Julián.",
      },
      {
        question: "¿Atienden urgencias el mismo día en Mutxamel?",
        answer:
          "Al no tener desplazamiento, en Mutxamel suele ser donde más rápido podemos organizarnos cuando algo urge.",
      },
      {
        question: "¿Reparan persianas de PVC antiguas?",
        answer:
          "Sí, es uno de los trabajos más habituales en el pueblo: cintas, ejes y mecanismos de las persianas clásicas de PVC.",
      },
      {
        question: "¿Hacen presupuesto sin compromiso en Mutxamel?",
        answer: "Sí, siempre. Te explicamos qué hace falta y cuánto cuesta antes de empezar nada.",
      },
    ],
    cta: {
      title: "¿Sos de Mutxamel?",
      subtitle: "Somos tus vecinos. Escribinos sin compromiso.",
    },
  },

  alicante: {
    name: "Alicante",
    slug: "alicante",
    hero: {
      title: "Persianista en Alicante",
      subtitle: "Reparación e instalación en toda la ciudad.",
      badge: "Servicio habitual en la zona",
    },
    intro:
      "Alicante ciudad es, junto con Playa San Juan, una de las zonas donde más variedad de persianas nos encontramos: según la antigüedad del edificio, vemos desde persianas de madera de los años setenta hasta instalaciones de aluminio recientes. Trabajamos en pisos particulares, pero también con comunidades de vecinos que deciden renovar varias persianas del edificio a la vez.\n\nLa densidad de bloques de pisos en Alicante hace que la reparación urgente en plantas altas sea de lo que más nos piden: una persiana atascada en un tercero o un cuarto piso, sin ascensor de servicio, es un problema real para quien vive ahí, y lo entendemos.\n\nLlegamos a Alicante en unos 15 minutos desde Mutxamel, lo que nos permite responder rápido a la mayoría de consultas de la ciudad. Además de persianas, en Alicante instalamos bastantes mosquiteras en pisos que buscan ventilar sin dejar entrar mosquitos, y hacemos motorización para vecinos que prefieren no depender de subir y bajar a mano varias veces al día.\n\nSi tu comunidad de vecinos está pensando en renovar las persianas del edificio, también trabajamos por bloques, ajustando el presupuesto cuando hay varias viviendas con la misma necesidad.",
    localContext: {
      title: "Lo que sabemos de Alicante",
      points: [
        "Mucha variedad de persianas según la antigüedad del edificio: desde madera antigua hasta aluminio reciente.",
        "Alta demanda de reparación urgente en pisos altos sin ascensor de servicio.",
        "Trabajamos con comunidades de vecinos que renuevan varias persianas del edificio a la vez.",
        "Llegamos a la ciudad en unos 15 minutos desde nuestra base en Mutxamel.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Reparación de persianas",
        description: "De madera antigua a aluminio reciente: nos adaptamos a la persiana que tenga tu edificio.",
      },
      {
        icon: "🦟",
        title: "Mosquiteras a medida",
        description: "Para pisos que buscan ventilar sin dejar entrar mosquitos, muy pedidas en la ciudad.",
      },
      {
        icon: "⚡",
        title: "Motorización",
        description: "Automatizamos persianas existentes, ideal para plantas altas sin ascensor de servicio.",
      },
    ],
    faq: [
      {
        question: "¿Reparan persianas urgentes en pisos altos de Alicante?",
        answer:
          "Sí, es una de las consultas más frecuentes en la ciudad. Priorizamos las urgencias cuando la persiana afecta la seguridad de la vivienda.",
      },
      {
        question: "¿Trabajan con comunidades de vecinos en Alicante?",
        answer:
          "Sí. Si varios vecinos del edificio necesitan renovar persianas, presupuestamos por bloque y ajustamos el precio.",
      },
      {
        question: "¿Cuánto tardan en llegar a Alicante ciudad?",
        answer:
          "Unos 15 minutos desde nuestra base en Mutxamel, así que suele ser una de las zonas donde respondemos más rápido.",
      },
      {
        question: "¿Reparan persianas de madera antiguas?",
        answer:
          "Sí, en Alicante nos encontramos bastantes edificios con persianas de madera de los años setenta y las reparamos habitualmente.",
      },
    ],
    cta: {
      title: "¿Necesitás ayuda en Alicante?",
      subtitle: "Consulta sin compromiso, particular o comunidad de vecinos.",
    },
  },

  bussot: {
    name: "Bussot",
    slug: "bussot",
    hero: {
      title: "Persianista en Bussot",
      subtitle: "Instalación y reparación en el interior de Alicante.",
      badge: "Servicio habitual en la zona",
    },
    intro:
      "Bussot es un pueblo pequeño del interior, y ahí el tipo de trabajo cambia bastante respecto a la costa: en lugar de reparaciones puntuales, en Bussot nos piden más instalaciones completas, sobre todo en chalets con persianas grandes que a veces se dejaron sin resolver durante la construcción de la vivienda.\n\nAl ser una zona rural con casas más grandes que la media, las persianas también suelen ser más grandes de lo habitual, lo que hace que la motorización sea especialmente útil aquí: no es lo mismo subir a mano una persiana estándar que una de chalet.\n\nLlegamos a Bussot en unos 15 minutos desde Mutxamel. No es una zona donde hagamos visitas todos los días, pero la conocemos bien y trabajamos ahí de forma habitual desde hace años.\n\nSi estás construyendo o reformando una vivienda en Bussot y todavía no decidiste qué persianas instalar, con gusto te explicamos las opciones de PVC y aluminio antes de que compres nada.",
    localContext: {
      title: "Lo que sabemos de Bussot",
      points: [
        "Más demanda de instalación completa que de reparación: muchos chalets en construcción o reforma.",
        "Persianas de mayor tamaño de lo habitual, típicas de las viviendas rurales del pueblo.",
        "La motorización se nota especialmente en persianas grandes de chalet.",
        "Llegamos en unos 15 minutos desde nuestra base en Mutxamel.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Instalación de persianas",
        description: "Persianas nuevas de PVC y aluminio para chalets y viviendas en construcción o reforma.",
      },
      {
        icon: "🦟",
        title: "Mosquiteras a medida",
        description:
          "Fijas, enrollables o plisadas, adaptadas a las ventanas más grandes típicas de las casas del pueblo.",
      },
      {
        icon: "⚡",
        title: "Motorización",
        description: "Especialmente útil en las persianas grandes que se ven en Bussot.",
      },
    ],
    faq: [
      {
        question: "¿Instalan persianas nuevas en viviendas en construcción en Bussot?",
        answer:
          "Sí, es uno de los trabajos que más hacemos en la zona. Te explicamos las opciones de PVC y aluminio antes de decidir.",
      },
      {
        question: "¿Trabajan con persianas de gran tamaño?",
        answer:
          "Sí, es habitual en los chalets de Bussot. Ahí la motorización suele notarse mucho más que en una persiana estándar.",
      },
      {
        question: "¿Cuánto tardan en llegar a Bussot?",
        answer: "Unos 15 minutos desde nuestra base en Mutxamel.",
      },
    ],
    cta: {
      title: "¿Estás construyendo o reformando en Bussot?",
      subtitle: "Te explicamos las opciones antes de que decidas nada.",
    },
  },

  benidorm: {
    name: "Benidorm",
    slug: "benidorm",
    hero: {
      title: "Persianista en Benidorm",
      subtitle: "Persianas y mosquiteras en apartamentos y comunidades.",
      badge: "Zona límite habitual",
    },
    intro:
      "Benidorm es la zona más alejada de nuestro radio habitual —unos 40-45 minutos desde Mutxamel— pero seguimos yendo de forma regular, sobre todo a zonas concretas como Rincón de Loix y Cala Finestrat, donde hay bastantes residentes extranjeros permanentes.\n\nLa ciudad tiene un tipo de vivienda particular: muchos apartamentos vacacionales y comunidades de propietarios con alta rotación de inquilinos, lo que hace que las persianas se desgasten más rápido de lo normal. Es habitual que nos llamen para revisar varios apartamentos del mismo edificio a la vez, sobre todo antes de temporada alta.\n\nComo Benidorm queda al límite de nuestra zona habitual, para trabajos puntuales pequeños a veces coordinamos varias visitas del mismo día en la ciudad para que tenga sentido el desplazamiento. Para instalaciones grandes o proyectos de varios apartamentos, no hay problema en ir de forma dedicada.\n\nSi administrás una comunidad de propietarios o varios apartamentos en Benidorm, contanos cuántas unidades necesitan revisión y coordinamos la visita de la forma más eficiente para todos.",
    localContext: {
      title: "Lo que sabemos de Benidorm",
      points: [
        "Zona límite de nuestro radio habitual: 40-45 minutos desde Mutxamel.",
        "Muchos apartamentos vacacionales con alta rotación de inquilinos y desgaste acelerado de persianas.",
        "Residentes extranjeros permanentes concentrados en zonas como Rincón de Loix y Cala Finestrat.",
        "Coordinamos varias visitas el mismo día cuando hay varios apartamentos o un edificio completo.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Reparación de persianas",
        description: "Para el desgaste acelerado típico de apartamentos con alta rotación de inquilinos.",
      },
      {
        icon: "🦟",
        title: "Mosquiteras a medida",
        description: "Instalación en apartamentos vacacionales y viviendas permanentes.",
      },
      {
        icon: "⚡",
        title: "Motorización",
        description: "Para comunidades de propietarios que buscan mejorar varios apartamentos a la vez.",
      },
    ],
    faq: [
      {
        question: "¿Van a Benidorm aunque esté lejos de vuestra base?",
        answer:
          "Sí, vamos de forma habitual, sobre todo a zonas como Rincón de Loix y Cala Finestrat. Para trabajos puntuales pequeños, a veces coordinamos varias visitas el mismo día.",
      },
      {
        question: "¿Atienden comunidades de propietarios con varios apartamentos?",
        answer:
          "Sí, es un trabajo habitual en Benidorm. Contanos cuántas unidades necesitan revisión y coordinamos la visita de forma eficiente.",
      },
      {
        question: "¿Hablan inglés en Benidorm?",
        answer:
          "Sí, hay bastantes residentes extranjeros permanentes en la ciudad y atendemos en inglés sin problema.",
      },
    ],
    cta: {
      title: "¿Necesitás ayuda en Benidorm?",
      subtitle: "Contanos tu caso, particular o comunidad, y coordinamos la visita.",
    },
  },

  javea: {
    name: "Jávea",
    slug: "javea",
    hero: {
      title: "Persianista en Jávea",
      subtitle: "Servicio bajo consulta para trabajos grandes.",
      badge: "Zona ampliada · bajo consulta",
    },
    intro:
      "Jávea queda fuera de nuestra zona de trabajo habitual, en la costa norte de la provincia, pero atendemos consultas para trabajos de cierto tamaño. Es una zona con mucho residente británico y un mercado bastante premium, donde suelen buscar persianas y mosquiteras de gama alta.\n\nNo vamos a Jávea para una reparación puntual pequeña —el desplazamiento no lo justifica— pero sí para instalaciones completas o proyectos de varias viviendas. Si tu consulta es de ese tipo, escribinos contando qué necesitás y evaluamos si podemos coordinar una visita.",
    localContext: {
      title: "Lo que sabemos de Jávea",
      points: [
        "Zona con mercado premium: persianas y mosquiteras de gama alta.",
        "Mucho residente británico, comunicación en inglés habitual.",
        "Servicio bajo consulta, mejor para proyectos grandes que reparaciones puntuales.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Instalación de persianas",
        description: "Proyectos completos, bajo consulta previa.",
      },
      {
        icon: "🦟",
        title: "Mosquiteras a medida",
        description: "Para viviendas de la zona, bajo consulta.",
      },
    ],
    faq: [
      {
        question: "¿Trabajan en Jávea?",
        answer:
          "Bajo consulta, sobre todo para instalaciones completas o proyectos de varias viviendas. Para reparaciones puntuales pequeñas, el desplazamiento no siempre lo justifica.",
      },
      {
        question: "¿Hablan inglés en Jávea?",
        answer: "Sí, sin problema. Es una zona con mucho residente británico.",
      },
    ],
    cta: {
      title: "¿Tenés un proyecto en Jávea?",
      subtitle: "Contanos qué necesitás y evaluamos si podemos ir.",
    },
  },

  altea: {
    name: "Altea",
    slug: "altea",
    hero: {
      title: "Persianista en Altea",
      subtitle: "Servicio bajo consulta para trabajos grandes.",
      badge: "Zona ampliada · bajo consulta",
    },
    intro:
      "Altea es una zona con mucho residente internacional y arquitectura tradicional muy particular: casas con persianas de madera combinadas con instalaciones más modernas de aluminio. Es una combinación que requiere conocer bien ambos materiales.\n\nComo con otras zonas ampliadas, en Altea atendemos consultas bajo demanda, priorizando proyectos de instalación completa o reformas antes que reparaciones puntuales pequeñas. Si tenés una vivienda de arquitectura tradicional y necesitás reemplazar o reparar persianas de madera, contanos el caso con detalle.",
    localContext: {
      title: "Lo que sabemos de Altea",
      points: [
        "Arquitectura tradicional con persianas de madera y aluminio combinadas.",
        "Zona con mucho residente internacional.",
        "Servicio bajo consulta, priorizando proyectos de instalación o reforma.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Persianas de madera y aluminio",
        description: "Reparación e instalación adaptada a la arquitectura tradicional de la zona.",
      },
      {
        icon: "🦟",
        title: "Mosquiteras a medida",
        description: "Bajo consulta previa.",
      },
    ],
    faq: [
      {
        question: "¿Trabajan con persianas de madera en Altea?",
        answer:
          "Sí, es habitual en la arquitectura tradicional de la zona. Contanos el estado de la persiana y evaluamos la mejor solución.",
      },
      {
        question: "¿Van a Altea para trabajos pequeños?",
        answer:
          "Priorizamos proyectos de instalación completa o reforma. Para casos puntuales, contanos el detalle y vemos si podemos coordinar.",
      },
    ],
    cta: {
      title: "¿Tenés una vivienda tradicional en Altea?",
      subtitle: "Contanos el estado de tus persianas.",
    },
  },

  villajoyosa: {
    name: "Villajoyosa",
    slug: "villajoyosa",
    hero: {
      title: "Persianista en Villajoyosa",
      subtitle: "Servicio bajo consulta para trabajos grandes.",
      badge: "Zona ampliada · bajo consulta",
    },
    intro:
      "Villajoyosa es un municipio pesquero con mucho encanto y bastante vivienda histórica en el casco antiguo, con necesidades bastante particulares: aberturas más pequeñas, persianas antiguas y edificios con protección o características especiales.\n\nAtendemos consultas en Villajoyosa bajo demanda, evaluando cada caso porque las viviendas históricas suelen requerir soluciones a medida más que instalación estándar. Si tenés una vivienda en el casco antiguo con persianas que no encajan en las medidas habituales, contanos los detalles y vemos qué opciones tenés.",
    localContext: {
      title: "Lo que sabemos de Villajoyosa",
      points: [
        "Vivienda histórica en el casco antiguo con necesidades específicas.",
        "Aberturas y persianas antiguas que no siempre encajan en medidas estándar.",
        "Servicio bajo consulta, evaluando cada caso particular.",
      ],
    },
    servicesOffered: [
      {
        icon: "🪟",
        title: "Persianas a medida",
        description: "Para viviendas históricas con aberturas fuera de lo estándar.",
      },
      {
        icon: "🦟",
        title: "Mosquiteras a medida",
        description: "Bajo consulta previa.",
      },
    ],
    faq: [
      {
        question: "¿Trabajan en viviendas históricas de Villajoyosa?",
        answer:
          "Sí, bajo consulta. Las viviendas del casco antiguo suelen necesitar medidas a medida más que instalación estándar.",
      },
      {
        question: "¿Atienden consultas puntuales en Villajoyosa?",
        answer:
          "Evaluamos cada caso. Contanos los detalles de tu vivienda y vemos si podemos coordinar una visita.",
      },
    ],
    cta: {
      title: "¿Tenés una vivienda en el casco antiguo de Villajoyosa?",
      subtitle: "Contanos los detalles de tus persianas.",
    },
  },
};

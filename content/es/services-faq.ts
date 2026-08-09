import type { ServiceFaqContent } from "@/lib/types";

export const servicesFaq: ServiceFaqContent[] = [
  {
    slug: "persianas",
    faq: [
      {
        question: "¿Con qué materiales trabajan?",
        answer:
          "Trabajamos con persianas de PVC y aluminio, los dos materiales más habituales en viviendas de la zona. Cada uno tiene su desgaste típico y sabemos qué buscar en cada caso.",
      },
      {
        question: "¿Puedo motorizar una persiana que ya tengo instalada?",
        answer:
          "Sí, en la mayoría de los casos se puede motorizar una persiana existente sin cambiarla entera. Lo revisamos en la visita y te decimos si tu caso es sencillo o necesita alguna adaptación.",
      },
      {
        question: "Mi persiana se atascó y no puedo cerrarla, ¿es urgente para vosotros?",
        answer:
          "Sí. Una persiana atascada, sobre todo en planta baja, es un tema de seguridad y lo tratamos como prioridad. Hacemos lo posible por pasar el mismo día o al siguiente.",
      },
      {
        question: "¿Cuánto cuesta reparar una persiana?",
        answer:
          "Depende del problema: una cinta rota no cuesta lo mismo que un motor. Te damos un precio orientativo por teléfono si nos contás qué pasa, y lo confirmamos al verla en persona, sin sorpresas.",
      },
    ],
  },
  {
    slug: "mosquiteras",
    faq: [
      {
        question: "¿Qué tipos de mosquitera instalan?",
        answer:
          "Plisadas, enrollables y fijas. Te ayudamos a elegir según el tipo de ventana o puerta y el uso que le vayas a dar.",
      },
      {
        question: "¿Toman las medidas ustedes o las doy yo?",
        answer:
          "Las tomamos nosotros en la visita. Cada ventana tiene sus particularidades y preferimos medir en persona para que quede bien ajustada.",
      },
      {
        question: "¿Cuánto tardan desde que pido presupuesto hasta que instalan?",
        answer:
          "Depende del tipo de mosquitera y si es medida estándar o especial. Te damos un plazo estimado al confirmar el pedido, sin comprometernos a fechas que después no podamos cumplir.",
      },
    ],
  },
  {
    slug: "aire-acondicionado",
    faq: [
      {
        question: "¿Con qué marcas trabajan?",
        answer:
          "Trabajamos con varias marcas del mercado según lo que necesites y tu presupuesto. En la visita te recomendamos opciones concretas, no una sola marca fija.",
      },
      {
        question: "¿Split o por conductos, cuál me conviene?",
        answer:
          "Depende de la vivienda: un split es más simple y rápido de instalar, mientras que los conductos reparten mejor el aire por varias habitaciones pero implican más obra. Te explicamos las opciones según tu caso.",
      },
      {
        question: "¿Hacen mantenimiento después de instalar?",
        answer:
          "Nos encargamos del montaje completo. Para mantenimiento posterior te recomendamos un servicio técnico especializado, así te aseguras de que quien revise el equipo esté certificado para ello.",
      },
    ],
  },
  {
    slug: "electricidad",
    faq: [
      {
        question: "¿Qué tipo de trabajos eléctricos hacen?",
        answer:
          "Trabajos pequeños del hogar: cambio de luces, ventiladores de techo, vitrocerámicas, enchufes y arreglos menores. No hacemos instalaciones eléctricas completas.",
      },
      {
        question: "Necesito reformar toda la instalación eléctrica de mi casa, ¿pueden?",
        answer:
          "Para obras grandes de ese tipo te recomendamos un electricista especializado. Nosotros nos encargamos de trabajos puntuales y pequeños arreglos, no de reformas completas.",
      },
      {
        question: "¿Es seguro que instalen ustedes enchufes o luces?",
        answer:
          "Sí, son trabajos que hacemos con cuidado y dentro de lo que corresponde a arreglos domésticos pequeños. Si el trabajo excede ese alcance, te lo decimos directamente en vez de hacerlo de todas formas.",
      },
    ],
  },
];

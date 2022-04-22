import React from "react"
import fcbIcon from "../../../images/icons/fcb.png"
import trophyIcon from "../../../images/icons/trophy.png"
import olympicsIcon from "../../../images/icons/olympics.png"
import worldIcon from "../../../images/icons/world.png"

//MENU
export const menuList = [
  {
    title: {
      ESP: "Mentorías",
      CAT: "Mentories",
    },
    page: "mentoria",
  },
  {
    title: {
      ESP: "Consultoría",
      CAT: "Consultoria",
    },
    page: "consultoria",
  },
  {
    title: {
      ESP: "Conferencias",
      CAT: "Conferències",
    },
    page: "conferencias",
  },
  {
    title: {
      ESP: "Contacto",
      CAT: "Contacte",
    },
    page: "contacto",
  },
]

// BIO
export const bioList = {
  title: {
    ESP: "Consultor, formador y mentor de alto rendimiento deportivo",
    CAT: "Consultor, formador i mentor d’alt rendiment esportiu",
  },
  subTitle: {
    ESP: "SOY CARLES FOLGUERA",
    CAT: "SOC CARLES FOLGUERA",
  },
  list: [
    {
      ESP: "Director de la Masía del FC Barcelona durante 16 años.",
      CAT: "Director de la Masia del FC Barcelona durant 16 anys.",
    },
    {
      ESP: "Director durante 3 años del programa formativo Masía 360: “Formamos a personas a través del deporte”.",
      CAT: "Director durant 3 anys del programa formatiu Masia 360: “Formem persones a través de l’esport”.",
    },
    {
      ESP: "Director del Departamento de Metodología de las secciones profesionales del FC Barcelona durante dos años (Baloncesto, Balonmano, Hockey sobre Patines y Fútbol Sala).",
      CAT: "Director del Departament de Metodologia de les seccions professionals del FC Barcelona durant dos anys (Bàsquet, Handbol, Hoquei sobre Patins i Futbol Sala).",
    },
    {
      ESP: "Licenciado en Pedagogía, profesor universitario y conferenciante sobre Educación, Deporte, Valores y Alto Rendimiento Deportivo.",
      CAT: "Llicenciat en Pedagogia, professor universitari i conferenciant sobre Educació, Esport, Valors i Alt Rendiment Esportiu.",
    },
    {
      ESP: "Considerado uno de los mejores porteros de la historia del hockey sobre patines.",
      CAT: "Considerat un dels millors porters de la història de l’hoquei sobre patins.",
    },
  ],
}

export const bioFlexList = [
  {
    img: worldIcon,
    title: {
      ESP: "CAMPEÓN DEL MUNDO",
      CAT: "CAMPIÓ DEL MÓN",
    },
    text: {
      ESP: "Selección española",
      CAT: "Selecció espanyola",
    },
  },
  {
    img: trophyIcon,
    title: {
      ESP: "7 COPAS DE EUROPA",
      CAT: "7 COPES D’EUROPA",
    },
  },
  {
    img: olympicsIcon,
    title: {
      ESP: "MEDALLA DE PLATA",
      CAT: "MEDALLA DE PLATA",
    },
    text: {
      ESP: "Olimpiadas Barcelona 92’",
      CAT: "Olimpíades Barcelona 92’",
    },
  },
  {
    img: trophyIcon,
    title: {
      ESP: "11 CAMPEONATOS DE LIGA",
      CAT: "11 CAMPIONATS DE LLIGA",
    },
  },
]

// MENTORIA
export const mentoriaList = {
  title: {
    ESP: "Programa de Aceleración del Talento Deportivo",
    CAT: "Programa d’Acceleració del Talent Esportiu",
  },
  subTitle: {
    ESP: "MENTORÍAS",
    CAT: "MENTORIES",
  },
  list: [
    {
      ESP: "Programa el éxito y el alto rendimiento a nivel inconsciente, por lo que se queda gravado en él.",
      CAT: "Programa l’èxit i l’alt rendiment a nivell inconscient, per la qual cosa s’hi queda gravat.",
    },
    {
      ESP: "Los resultados son inmediatos, desde la primera sesión, y los procesos tienen una duración muy inferior a los de cualquier otra técnica de acompañamiento.",
      CAT: " Els resultats són immediats, des de la primera sessió, i els processos tenen una durada molt inferior als de qualsevol altra tècnica d’acompanyament.",
    },
    {
      ESP: "Se consiguen grandes transformaciones internas que se convierten rápida y definitivamente en grandes logros.",
      CAT: "S’aconsegueixen grans transformacions internes que es converteixen ràpidament i definitivament en grans èxits.",
    },
  ],
}

export const mentoriaRecomendedList = {
  title: {
    ESP: "¿A quién va dirigido?",
    CAT: "A qui va dirigit?",
  },
  list: [
    {
      superTitle: {
        ESP: "DEPORTISTAS",
        CAT: "ESPORTISTES",
      },
      superText: {
        ESP: "Mejorar los resultados, entrenarse en el alto rendimiento, optimizar la gestión emocional y mental, gestión positiva de las lesiones, transformar creencias limitantes, vivir la profesión con satisfacción y sin estrés.",
        CAT: "Millorar els resultats, entrenar-se a l'alt rendiment, optimitzar la gestió emocional i mental, gestió positiva de les lesions, transformar creences limitants, viure la professió amb satisfacció i sense estrès.",
      },
    },
    {
      superTitle: {
        ESP: "ENTRENADORES",
        CAT: "ENTRENADORS",
      },
      superText: {
        ESP: "Potenciar y optimizar las capacidades y el liderazgo para conseguir el mayor rendimiento de los deportistas y del equipo. Fomentar la cohesión del equipo y comprometerse para convertirse en un auténtico líder inspiracional.",
        CAT: "Potenciar i optimitzar les capacitats i el lideratge per aconseguir el rendiment més gran dels esportistes i de l'equip. Fomentar la cohesió de l'equip i comprometre's per esdevenir un autèntic líder inspiracional.",
      },
    },
  ],
}

export const mentoriaFlexList = [
  {
    index: 1,
    title: {
      ESP: "SESIÓN INTRODUCTORIA",
      CAT: "SESSIÓ INTRODUCTÒRIA",
    },
    text: {
      ESP: (
        <>
          Sesión online gratuita para la realización de tu perfil.
          <br />
          Detección de necesidades y puntos a trabajar.
          <br />
          Creación de un plan de acción personalizado.
        </>
      ),
      CAT: (
        <>
          Sessió online gratuïta per a la realització del teu perfil.
          <br />
          Detecció de necessitats i punts a treballar.
          <br />
          Creació d'un pla d'acció personalitzat.
        </>
      ),
    },
  },
  {
    index: 2,
    title: {
      ESP: "PUESTA EN MARCHA",
      CAT: "POSADA EN MARXA",
    },
    text: {
      ESP: "Puesta en acción inmediata y acompañamiento one to one para la consecución de los objetivos acordados.",
      CAT: "Posada en acció immediata i acompanyament one to one per a la consecució dels objectius acordats.",
    },
  },
  {
    index: 3,
    title: {
      ESP: "MEJORA CONTÍNUA",
      CAT: "MILLORA CONTÍNUA",
    },
    text: {
      ESP: "Trabajo guiado a través de mentorías, herramientas y ejercicios en los planos físico, mental, personal y profesional.",
      CAT: "Treball guiat a través de mentories, eines i exercicis en els àmbits físic, mental, personal i professional.",
    },
  },
  {
    index: 4,
    title: {
      ESP: "RESULTADOS",
      CAT: "RESULTATS",
    },
    text: {
      ESP: "Consecución de los objetivos iniciales planteados y análisis del impacto positivo de estos en las otras áreas vitales.",
      CAT: "Aconseguir els objectius inicials plantejats i analitzar-ne l'impacte positiu en les altres àrees vitals.",
    },
  },
]

// CONSULTORIA
export const consultoriaList = {
  title: {
    ESP: "Para clubs, directores y federaciones",
    CAT: "Per a clubs, directors i federacions",
  },
  subTitle: {
    ESP: "CONSULTORÍA",
    CAT: "CONSULTORIA",
  },
  list: [
    {
      ESP: "Definición de la misión, visión, identidad y estrategia.",
      CAT: "Definició de la missió, visió, identitat i estratègia.",
    },
    {
      ESP: "Identificación de áreas a potenciar.",
      CAT: "Identificació d’àrees a potenciar.",
    },
    {
      ESP: "Las 4 funciones: pensar, programar, intervenir y evaluar.",
      CAT: "Les 4 funcions: pensar, programar, intervenir i avaluar.",
    },
    {
      ESP: "Definición del perfil de entrenador ideal para el club y cada etapa formativa.",
      CAT: "Definició del perfil d’entrenador ideal per al club i cada etapa formativa.",
    },
    {
      ESP: "Bienvenida al entrenador y al deportista.",
      CAT: "Benvinguda a l’entrenador i l’esportista.",
    },
    {
      ESP: "Plan de acompañamiento para las familias.",
      CAT: "Pla d’acompanyament per a les famílies.",
    },
    {
      ESP: "Sentimiento de identidad y pertenencia.",
      CAT: "Sentiment d’identitat i pertinença.",
    },
  ],
}

export const consultoriaFlexList = [
  {
    img: fcbIcon,
    date: "2002 - 2017",
    title: {
      ESP: "DIRECTOR DE LA MASÍA",
      CAT: "DIRECTOR DE LA MASIA",
    },
    text: {
      ESP: "del F.C. Barcelona",
      CAT: "del FC Barcelona",
    },
  },
  {
    img: fcbIcon,
    date: "2019 - 2021",
    title: {
      ESP: "DIRECTOR DEL DEPARTAMENTO DE METODOLOGÍA",
      CAT: "DIRECTOR DEL DEPARTAMENT DE METODOLOGIA",
    },
    text: {
      ESP: "de las secciones profesionales del F.C. Barcelona",
      CAT: "de les seccions professionals del FC Barcelona",
    },
  },
  {
    img: fcbIcon,
    date: "2019 - 2021",
    title: {
      ESP: "DIRECTOR DEL PROGRAMA FORMATIVO MASIA 360",
      CAT: "DIRECTOR DEL PROGRAMA FORMATIU MASIA 360",
    },
  },
]

// CONFERENCIAS
export const conferenciasList = {
  title: {
    ESP: "Para clubs, directores y federaciones",
    CAT: "Per a clubs, directors i federacions",
  },
  subTitle: {
    ESP: "CONFERENCIAS",
    CAT: "CONFERÈNCIES",
  },
}

// PUBLICACIONES
export const publicationsList = {
  title: {
    ESP: "PUBLICACIONES",
    CAT: "PUBLICACIONS",
  },
  subTitle: {
    ESP: "He participado en las siguientes producciones biográficas:",
    CAT: "He participat en les següents produccions biogràfiques:",
  },
  list: [
    {
      year: "2021",
      color: "#286CBE",
      text: {
        ESP: "“El portero de hockey sobre patines: de la iniciación al alto rendimiento”.",
        CAT: "“El porter d’hoquei sobre patins: de la iniciació a l’alt rendiment”.",
      },
    },
    {
      year: "2019",
      color: "#060823",
      text: {
        ESP: "“40 años de la creación de la Masía FCB: el destino es el sueño, el camino es la clave”.",
        CAT: "“40 anys de la creació de la Masia FCB: el destí és el somni, el camí és la clau”.",
      },
    },
    {
      year: "2012",
      color: "#286CBE",
      text: {
        ESP: "“Cómo formar un buen deportista” Enric Sebastiani. Coord.",
        CAT: "“Com formar un bon esportista” Enric Sebastiani. Coord.",
      },
    },
    {
      year: "2011",
      color: "#060823",
      text: {
        ESP: "“Educados para ganar”. Sique Rodríguez.",
        CAT: "“Educats per guanyar”. Sique Rodríguez.",
      },
    },
    {
      year: "2010",
      color: "#286CBE",
      text: {
        ESP: "“Buen deportista, mejor persona”. Mauro Valenciano.",
        CAT: "“Bon esportista, millor persona”. Mauro Valenciano.",
      },
    },
  ],
}

export const mediaList = {
  title: {
    ESP: "MEDIA",
    CAT: "MEDIA",
  },
  catList : [
    {
      url: "https://www.alacarta.cat/lentrevista/capitol/carles-folguera",
      text: {
        ESP: "Notícies en xarxa - Entrevista a Carles Folguera",
        CAT: "Notícies en xarxa - Entrevista a Carles Folguera",
      }
    },
    {
      url: "https://www.dailymotion.com/video/x50n071",
      text: {
        ESP: "La formació és la clau del projecte Masia 360",
        CAT: "La formació és la clau del projecte Masia 360",
      }
    },
    {
      url: "https://www.youtube.com/watch?v=54UAX4-6ouM",
      text: {
        ESP: "Parlem d'humiltat amb Carles Folguera",
        CAT: "Parlem d'humiltat amb Carles Folguera",
      }
    },
    {
      url: "https://www.rtve.es/play/videos/gent-de-paraula/gent-paraula-carles-folguera/1112925/",
      text: {
        ESP: "Gent de paraula - Entrevista a Carles Folguera",
        CAT: "Gent de paraula - Entrevista a Carles Folguera",
      }
    }
  ],
  list : [
    {
      url: "https://www.youtube.com/watch?v=d4IByCTk4ng",
      text: {
        ESP: "En Perspectiva - La base del éxito del Barça",
        CAT: "En Perspectiva - La clau del èxit del Barça",
      }
    },
    {
      url: "https://www.youtube.com/watch?v=RVRVmPJvlbE",
      text: {
        ESP: "Mundo Deportivo - Entrevista a Carles Folguera",
        CAT: "Mundo Deportivo - Entrevista a Carles Folguera",
      }
    },
    {
      url: "https://www.youtube.com/watch?v=6E5d4Vg8x1I",
      text: {
        ESP: "El Universo - Carles Folguera",
        CAT: "El Universo - Carles Folguera",
      }
    },
  ]
}

export const testimonialsList = {
  title: {
    ESP: "TESTIMONIOS",
    CAT: "TESTIMONIS",
  },
  list: [
    {
      type: {
        ESP: "Consultoría",
        CAT: "Consultoria",
      },
      name: "Pepito Juanes",
      description: {
        ESP: "Jugador de futbol profesional",
        CAT: "Jugador de futbol profesional",
      },
      img: "img",
      text: {
        ESP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus repellat delectus, commodi vero asperiores corporis fugiat eligendi voluptates enim praesentium modi nemo! Nulla optio quo eaque quas quaerat molestias.",
        CAT: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus repellat delectus, commodi vero asperiores corporis fugiat eligendi voluptates enim praesentium modi nemo! Nulla optio quo eaque quas quaerat molestias.",
      },
    },
    {
      type: {
        ESP: "Mentoría",
        CAT: "Mentoría",
      },
      name: "Josu",
      description: {
        ESP: "Jugador de futbol profesional",
        CAT: "Jugador de futbol profesional",
      },
      img: "img",
      text: {
        ESP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus repellat delectus, commodi vero asperiores corporis fugiat eligendi voluptates enim praesentium modi nemo! Nulla optio quo eaque quas quaerat molestias.",
        CAT: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus repellat delectus, commodi vero asperiores corporis fugiat eligendi voluptates enim praesentium modi nemo! Nulla optio quo eaque quas quaerat molestias.",
      },
    },
    {
      type: {
        ESP: "Conferencias",
        CAT: "Conferencias",
      },
      name: "Lopez",
      description: {
        ESP: "Jugador de futbol profesional",
        CAT: "Jugador de futbol profesional",
      },
      img: "img",
      text: {
        ESP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus repellat delectus, commodi vero asperiores corporis fugiat eligendi voluptates enim praesentium modi nemo! Nulla optio quo eaque quas quaerat molestias.",
        CAT: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus repellat delectus, commodi vero asperiores corporis fugiat eligendi voluptates enim praesentium modi nemo! Nulla optio quo eaque quas quaerat molestias.",
      },
    },
    {
      type: {
        ESP: "Consultoría",
        CAT: "Consultoria",
      },
      name: "Geronimo",
      description: {
        ESP: "Jugador de futbol profesional",
        CAT: "Jugador de futbol profesional",
      },
      img: "img",
      text: {
        ESP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus repellat delectus, commodi vero asperiores corporis fugiat eligendi voluptates enim praesentium modi nemo! Nulla optio quo eaque quas quaerat molestias.",
        CAT: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus repellat delectus, commodi vero asperiores corporis fugiat eligendi voluptates enim praesentium modi nemo! Nulla optio quo eaque quas quaerat molestias.",
      },
    },
    {
      type: {
        ESP: "Consultoría",
        CAT: "Consultoria",
      },
      name: "Bob",
      description: {
        ESP: "Jugador de futbol profesional",
        CAT: "Jugador de futbol profesional",
      },
      img: "img",
      text: {
        ESP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus repellat delectus, commodi vero asperiores corporis fugiat eligendi voluptates enim praesentium modi nemo! Nulla optio quo eaque quas quaerat molestias.",
        CAT: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus repellat delectus, commodi vero asperiores corporis fugiat eligendi voluptates enim praesentium modi nemo! Nulla optio quo eaque quas quaerat molestias.",
      },
    },
    {
      type: {
        ESP: "Mentoría",
        CAT: "Mentoría",
      },
      name: "Jeff",
      description: {
        ESP: "Jugador de futbol profesional",
        CAT: "Jugador de futbol profesional",
      },
      img: "img",
      text: {
        ESP: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus repellat delectus, commodi vero asperiores corporis fugiat eligendi voluptates enim praesentium modi nemo! Nulla optio quo eaque quas quaerat molestias.",
        CAT: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus repellat delectus, commodi vero asperiores corporis fugiat eligendi voluptates enim praesentium modi nemo! Nulla optio quo eaque quas quaerat molestias.",
      },
    },
  ],
}

// CONTACTO
export const contactoList = {
  title: {
    ESP: "Solicitud de contacto",
    CAT: "Sol·licitud de contacte",
  },
  subTitle: {
    ESP: "CONTACTO",
    CAT: "CONTACTE",
  },
  list: [
    {
      ESP: "Una primera sesión gratuita de Mentoría de Alto Rendimiento Deportivo.",
      CAT: "Una primera sessió gratuïta de Mentoria d´Alt Rendiment Esportiu.",
    },
    {
      ESP: "Pedir información sobre la Consultoría y creación de un Plan de Desarrollo de un Club de Alto Rendimiento.",
      CAT: "Demanar informació sobre la Consultoria i creació d’un Pla de Desenvolupament d’un Club d’Alt Rendiment.",
    },
    {
      ESP: "Solicitar una conferencia para tu empresa, equipo u organismo.",
      CAT: "Sol·licitar una conferència per a la teva empresa, equip o organisme.",
    },
    {
      ESP: "Pedir información sobre mis productos formativos de Alto Rendimiento Deportivo.",
      CAT: "Demanar informació sobre els meus productes formatius d’Alt Rendiment Esportiu.",
    },
  ],
}

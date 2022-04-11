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
    ESP: "Consultor, Formador y Mentor de Alto Rendimiento Deportivo",
    CAT: "Consultor, Formador y Mentor d'Alt Rendimient Esportiu",
  },
  subTitle: {
    ESP: "SOY CARLES FOLGUERA",
    CAT: "CARLES FOLGUERA",
  },
  list: [
    {
      ESP: "Director de la Masía del FC Barcelona durante 16 años.",
      CAT: "Director de la Masía del FC Barcelona durant 16 anys.",
    },
    {
      ESP: "Director durante 3 años del programa formativo Masía 360: “Formamos personas a través del deporte”.",
      CAT: "Director durant 3 anyss del programa formatiu Masía 360: “Formem persones a través de l'esport”.",
    },
    {
      ESP: "Director del Departamento de Metodología de las secciones profesionales del FC Barcelona durante 2 años (Baloncesto, Balonmano, Hockey sobre Patines y Fútbol Sala).",
      CAT: "Director del Departamento de Metodología de las secciones profesionales del FC Barcelona durante 2 años (Baloncesto, Balonmano, Hockey sobre Patines y Fútbol Sala).",
    },
    {
      ESP: "Licenciado en Pedagogía, profesor Universitario y conferenciante sobre Educación, Deporte, Valores y Alto Rendimiento Deportivo.",
      CAT: "Licenciado en Pedagogía, profesor Universitario y conferenciante sobre Educación, Deporte, Valores y Alto Rendimiento Deportivo.",
    },
    {
      ESP: "Considerado uno de los mejores porteros de la historia del Hockey sobre Patines.",
      CAT: "Considerado uno de los mejores porteros de la historia del Hockey sobre Patines.",
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
      ESP: "Selección Española",
      CAT: "Selecció Espanyola",
    },
  },
  {
    img: trophyIcon,
    title: {
      ESP: "7 COPAS DE EUROPA",
      CAT: "7 COPES D'EUROPA",
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
      CAT: "Olimpiades Barcelona 92’",
    },
  },
  {
    img: trophyIcon,
    title: {
      ESP: "11 CAMPEONATOS DE LIGA",
      CAT: "11 CAMPIONATS DE LIGA",
    },
  },
]
// MENTORIA
export const mentoriaList = {
  title: {
    ESP: "Programa de Aceleración del Talento Deportivo",
    CAT: "Programa d'Acceleració del Talent Esportiu",
  },
  subTitle: {
    ESP: "MENTORÍAS",
    CAT: "MENTORIES",
  },
  list: [
    {
      ESP: "Programa el éxito y el alto rendimiento a nivel inconsciente, por lo que se queda gravado en él.",
      CAT: "Programa el éxito y el alto rendimiento a nivel inconsciente, por lo que se queda gravado en él.",
    },
    {
      ESP: "Los resultados son inmediatos, desde la primera sesión, y los procesos tienen una duración muy inferior a los de cualquier otra técnica de acompañamiento.",
      CAT: "Los resultados son inmediatos, desde la primera sesión, y los procesos tienen una duración muy inferior a los de cualquier otra técnica de acompañamiento.",
    },
    {
      ESP: "Se consiguen grandes transformaciones internas que se convierten rápida y definitivamente en grandes logros.",
      CAT: "Se consiguen grandes transformaciones internas que se convierten rápida y definitivamente en grandes logros.",
    },
  ],
}

export const mentoriaRecomendedList = [
  {
    superTitle: {
      ESP: "PARA DEPORTISTAS",
      CAT: "PARA DEPORTISTAS",
    },
    superText: {
      ESP: "Mejorar los resultados, entrenarse en el alto rendimiento, optimizar la gestión emocional y mental, gestión positiva de las lesiones, transformar creencias limitantes, vivir la profesión con satisfacción y sin estrés.",
      CAT: "Mejorar los resultados, entrenarse en el alto rendimiento, optimizar la gestión emocional y mental, gestión positiva de las lesiones, transformar creencias limitantes, vivir la profesión con satisfacción y sin estrés.",
    },
  },
  {
    superTitle: {
      ESP: "PARA ENTRENADORES",
      CAT: "PARA ENTRENADORES",
    },
    superText: {
      ESP: "Potenciar y optimizar las capacidades y el liderazgo para conseguir el mayor rendimiento de los deportistas y del equipo. Fomentar la cohesión del equipo y comprometerse para convertirse en un auténtico líder inspiracional.",
      CAT: "Potenciar y optimizar las capacidades y el liderazgo para conseguir el mayor rendimiento de los deportistas y del equipo. Fomentar la cohesión del equipo y comprometerse para convertirse en un auténtico líder inspiracional.",
    },
  },
]

export const mentoriaFlexList = [
  {
    title: {
      ESP: "1. SESIÓN INTRODUCTORIA",
      CAT: "1. SESIÓN INTRODUCTORIA",
    },
    text: {
      ESP: (
        <>
          Sesión online gratuita para realización de tu perfil.
          <br />
          Detección de necesidades y puntos a trabajar.
          <br />
          Creación de un plan de acción personalizado.
        </>
      ),
      CAT: (
        <>
          Sesión online gratuita para realización de tu perfil.
          <br />
          Detección de necesidades y puntos a trabajar.
          <br />
          Creación de un plan de acción personalizado.
        </>
      ),
    },
  },
  {
    title: {
      ESP: "2. PUESTA EN MARCHA",
      CAT: "2. PUESTA EN MARCHA",
    },
    text: {
      ESP: "Puesta en acción inmediata y acompañamiento one to one para la consecución de los objetivos acordados.",
      CAT: "Puesta en acción inmediata y acompañamiento one to one para la consecución de los objetivos acordados.",
    },
  },
  {
    title: {
      ESP: "3. MEJORA CONTÍNUA",
      CAT: "3. MEJORA CONTÍNUA",
    },
    text: {
      ESP: "Trabajo guiado a través de mentorías, herramientas y ejercicios en los planos físico, mental, personal y profesional.",
      CAT: "Trabajo guiado a través de mentorías, herramientas y ejercicios en los planos físico, mental, personal y profesional.",
    },
  },
  {
    title: {
      ESP: "4. RESULTADOS",
      CAT: "4. RESULTADOS",
    },
    text: {
      ESP: "Consecución de los objetivos iniciales planteados y análisis del impacto positivo de estos en las otras áreas vitales.",
      CAT: "Consecución de los objetivos iniciales planteados y análisis del impacto positivo de estos en las otras áreas vitales.",
    },
  },
]

// CONSULTORIA
export const consultoriaList = {
  title: {
    ESP: "Para Clubs, Directores y Federaciones",
    CAT: "Per a Clubs, Directors y Federacions",
  },
  subTitle: {
    ESP: "CONSULTORÍA",
    CAT: "CONSULTORIA",
  },
  list: [
    {
      ESP: "Definición de la misión, visión, identidad y estrategia.",
      CAT: "Definición de la misión, visión, identidad y estrategia.",
    },
    {
      ESP: "Identificación de áreas a potenciar.",
      CAT: "Identificación de áreas a potenciar.",
    },
    {
      ESP: "Las 4 funciones: pensar, programar, intervenir y evaluar.",
      CAT: "Las 4 funciones: pensar, programar, intervenir y evaluar.",
    },
    {
      ESP: "Definición del perfil de entrenador ideal para el club y cada etapa formativa.",
      CAT: "Definición del perfil de entrenador ideal para el club y cada etapa formativa.",
    },
    {
      ESP: "Bienvenida al entrenador y al deportista.",
      CAT: "Bienvenida al entrenador y al deportista.",
    },
    {
      ESP: "Plan de acompañamiento para las familias.",
      CAT: "Plan de acompañamiento para las familias.",
    },
    {
      ESP: "Sentimiento de identidad y pertenencia.",
      CAT: "Sentimiento de identidad y pertenencia.",
    },
  ],
}
export const consultoriaFlexList = [
  {
    img: fcbIcon,
    date: "2002 - 2017",
    title: {
      ESP: "DIRECTOR DE LA MASÍA",
      CAT: "DIRECTOR DE LA MASÍA",
    },
    text: {
      ESP: "del F.C. Barcelona",
      CAT: "del F.C. Barcelona",
    },
  },
  {
    img: fcbIcon,
    date: "2019 - 2021",
    title: {
      ESP: "DIRECTOR DEL DEPARTAMENTO DE METODOLOGÍA",
      CAT: "DIRECTOR DEL DEPARTAMENT DE METODOLOGÍA",
    },
    text: {
      ESP: "de las secciones profesionales del F.C. Barcelona",
      CAT: "de les seccions professionals del F.C. Barcelona",
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
    ESP: "Para Clubs, Directores y Federaciones",
    CAT: "Per a Clubs, Directors y Federacions",
  },
  subTitle: {
    ESP: "CONFERENCIAS",
    CAT: "CONFERENCIAS",
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
    CAT: "CAT He participado en las siguientes producciones biográficas:",
  },
  list: [
    {
      year: "2021",
      color: "#286CBE",
      text: {
        ESP: "“El portero de hockey sobre patines: de la iniciación al alto rendimiento”.",
        CAT: "“El porter de hockey sobre patins: de l'iniciació al alt rendimient”.",
      },
    },
    {
      year: "2019",
      color: "#060823",
      text: {
        ESP: "“40 años de la creación de la Masía FCB: el destino es el sueño, el camino es la clave”.",
        CAT: "“40 años de la creación de la Masía FCB: el destino es el sueño, el camino es la clave”.",
      },
    },
    {
      year: "2012",
      color: "#286CBE",
      text: {
        ESP: "“Cómo formar un buen deportista” Enric Sebastiani. Coord.",
        CAT: "“Cómo formar un buen deportista” Enric Sebastiani. Coord.",
      },
    },
    {
      year: "2011",
      color: "#060823",
      text: {
        ESP: "“Educados para ganar”. Sique Rodríguez.",
        CAT: "“Educados para ganar”. Sique Rodríguez.",
      },
    },
    {
      year: "2010",
      color: "#286CBE",
      text: {
        ESP: "“Buen deportista, mejor persona”. Mauro Valenciano.",
        CAT: "“Buen deportista, mejor persona”. Mauro Valenciano.",
      },
    },
  ],
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
    ESP: "Solicitud de Contacto",
    CAT: "Solicitud de Contacte",
  },
  subTitle: {
    ESP: "CONTACTO",
    CAT: "CONTACTE",
  },
  list: [
    {
      ESP: "Una primera sesión gratuita de Mentoría de Alto Rendimiento Deportivo.",
      CAT: "Una primera sesión gratuita de Mentoría de Alto Rendimiento Deportivo.",
    },
    {
      ESP: "Pedir información sobre la Consultoría y creacion de un Plan de Desarrollo de un Club de Alto Rendimiento.",
      CAT: "Pedir información sobre la Consultoría y creacion de un Plan de Desarrollo de un Club de Alto Rendimiento.",
    },
    {
      ESP: "Solicitar una conferencia para tu empresa, equipo u organismo.",
      CAT: "Solicitar una conferencia para tu empresa, equipo u organismo.",
    },
    {
      ESP: "Pedir información sobre mis productos formativos de Alto Rendimiento Deportivo.",
      CAT: "Pedir información sobre mis productos formativos de Alto Rendimiento Deportivo.",
    },
  ],
}

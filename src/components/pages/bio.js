import React from "react"
import { container } from "../../styles/pages.module.scss"
import TextComponent from "../utils/text/TextComponent"
import OrangeShadow from "../utils/orangeShadow/OrangeShadow"
import worldIcon from "../../images/icons/world.png"
import trophyIcon from "../../images/icons/trophy.png"
import olympicsIcon from "../../images/icons/olympics.png"
import FlexGrid from "../utils/flexGrid/FlexGrid"

const Bio = () => {
  const list = [
    "Director de la Masía del FC Barcelona durante 16 años.",
    "Director durante 3 años del programa formativo Masía 360: “Formamos personas a través del deporte”.",
    "Director del Departamento de Metodología de las secciones profesionales del FC Barcelona durante 2 años (Baloncesto, Balonmano, Hockey sobre Patines y Fútbol Sala).",
    "Licenciado en Pedagogía, profesor Universitario y conferenciante sobre Educación, Deporte, Valores y Alto Rendimiento Deportivo.",
    "Considerado uno de los mejores porteros de la historia del Hockey sobre Patines.",
  ]
  const flex = [
    {
      img: worldIcon,
      title: "CAMPEÓN DEL MUNDO",
      text: "Selección Española",
    },
    {
      img: trophyIcon,
      title: "7 COPAS DE EUROPA",
    },
    {
      img: olympicsIcon,
      title: "MEDALLA DE PLATA",
      text: "Olimpiadas Barcelona 92’",
    },
    {
      img: trophyIcon,
      title: "11 CAMPEONATOS DE LIGA",
    },
  ]
  return (
    <div style={{ backgroundColor: "#060823" }} className={container} id="bio">
      <TextComponent
        title="Consultor, Formador y Mentor de Alto Rendimiento Deportivo"
        subTitle="SOY CARLES FOLGUERA"
        list={list}
        textColor="white"
      />
      <FlexGrid list={flex} />
      <OrangeShadow />
    </div>
  )
}

export default Bio

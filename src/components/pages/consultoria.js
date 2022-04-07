import React from "react"
import { container } from "../../styles/pages.module.scss"
import TextComponent from "../utils/text/TextComponent"
import OrangeShadow from "../utils/orangeShadow/OrangeShadow"
import fcbIcon from "../../images/icons/fcb.png"
import FlexGrid from "../utils/flexGrid/FlexGrid"
import TextBookCall from "../utils/text/TextBookCall"
// import DownloadPdf from "../utils/links/downloadPdf"

const Consultoria = () => {
  const textColor = "white"
  const list = [
    "Definición de la misión, visión, identidad y estrategia.",
    "Identificación de áreas a potenciar.",
    "Las 4 funciones: pensar, programar, intervenir y evaluar.",
    "Definición del perfil de entrenador ideal para el club y cada etapa formativa.",
    "Bienvenida al entrenador y al deportista.",
    "Plan de acompañamiento para las familias.",
    "Sentimiento de identidad y pertenencia.",
  ]
  const text = (
    <p style={{ color: textColor }}>
      Como consultor de Clubes Deportivos enfoco mi trabajo en crear un Plan de
      Desarrollo de un Club/Federación de Alto Rendimiento, que define la hoja
      de ruta desde la situación actual del Club/Federación a la visión de donde
      quiere estar en el futuro.
    </p>
  )
  const flex = [
    {
      img: fcbIcon,
      date: "2002 - 2017",
      title: "DIRECTOR DE LA MASÍA",
      text: "del F.C. Barcelona",
    },
    {
      img: fcbIcon,
      date: "2019 - 2021",
      title: "DIRECTOR DEL DEPARTAMENTO DE METODOLOGÍA",
      text: "de las secciones profesionales del F.C. Barcelona",
    },
    {
      img: fcbIcon,
      date: "2019 - 2021",
      title: "DIRECTOR DEL PROGRAMA FORMATIVO MASIA 360",
    },
  ]
  return (
    <div
      style={{ backgroundColor: "#060823" }}
      className={container}
      id="consultoria"
    >
      <TextComponent
        title="Para Clubs, Directores y Federaciones"
        subTitle="CONSULTORÍA"
        list={list}
        text={text}
        textColor="white"
      />
      <FlexGrid list={flex} />
      {/* <DownloadPdf textColor={textColor} link="" title="Consultoría" /> */}
      <TextBookCall
        textColor={textColor}
        buttonTo="contacto"
        buttonText="Contacta"
        text="Reserva tu primera llamada conmigo gratuita y sin compromiso para que comentemos juntos que necesitas y como te podría ayudar"
      />
      <OrangeShadow />
    </div>
  )
}

export default Consultoria

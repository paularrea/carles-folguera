import React from "react"
import { container } from "../../styles/pages.module.scss"
import TextComponent from "../utils/text/TextComponent"
import OrangeShadow from "../utils/orangeShadow/OrangeShadow"
import ContactLink from "../utils/links/ContactLink"

const Contacto = () => {
  const textColor = "white"

  const text = (
    <p style={{ color: textColor }}>
      Reserva una llamada conmigo sin compromiso para:
    </p>
  )

  const list = [
    "Una primera sesión gratuita de Mentoría de Alto Rendimiento Deportivo.",
    "Pedir información sobre la Consultoría y creacion de un Plan de Desarrollo de un Club de Alto Rendimiento.",
    "Solicitar una conferencia para tu empresa, equipo u organismo.",
    "Pedir información sobre mis productos formativos de Alto Rendimiento Deportivo.",
  ]

  return (
    <div
      style={{ backgroundColor: "#060823" }}
      className={container}
      id="contacto"
    >
      <TextComponent
        title="Solicitud de Contacto"
        subTitle="Contacto"
        text={text}
        list={list}
        textColor="white"
      />
      <br />
      <ContactLink link="hola@carlesfolguera.com" />
      <OrangeShadow />
    </div>
  )
}

export default Contacto

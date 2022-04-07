import React from "react"
import { container } from "../../styles/pages.module.scss"
import TextComponent from "../utils/text/TextComponent"
import OrangeShadow from "../utils/orangeShadow/OrangeShadow"
import TextBookCall from "../utils/text/TextBookCall"

const Conferencias = () => {
  const textColor = "white"

  const text = (
    <p style={{ color: textColor }}>
      En mis conferencias analizo las claves del alto rendimiento en el deporte
      y la importancia de los valores. El deporte nos genera experiencias que
      tienen que ver con el aprendizaje, las frustraciones, las expectativas, el
      disfrutar, el competir y la gestión de las emociones de los deportistas.
      <br />
      <br />
      En mis conferencias aporto mi experiencia como deportista profesional y
      como formador de jóvenes deportistas con expectativas de éxito. Comparto
      sus sueños, pero también descubro cuáles son sus miedos, sus inquietudes y
      sus aprendizajes en el largo camino que han de recorrer durante su etapa
      formativa.
      <br />
      <br />
      Algunas de mis conferencias son: “Autoestima y Deporte”, “¿Formamos
      personas a través del deporte?”, “Las claves del Alto Rendimiento en el
      Deporte: la visión de 50 deportistas que han llegado a la élite deportiva”
      <br />
      <br />
      He dado conferencias en España, República Dominicana, Ecuador, Perú,
      Colombia, Uruguay, Italia, Portugal, Inglaterra, Australia...
      <br />
      <br />
      Algunas de las organizaciones en las que he impartido mis conferencias
      son: Facultad de Psicología y Ciencias de la Educación y el Deporte
      Blanquerna. Universitat Ramon Llull, ESADE, IESE, Universidad de Vic,
      Universidad de Barcelona, Universidad Pompeu Fabra, Universidad Piura
      (Perú), Federación Española Futbol y también he participado en diferentes
      eventos deportivos.
    </p>
  )

  return (
    <div
      style={{ backgroundColor: "#060823" }}
      className={container}
      id="conferencias"
    >
      <TextComponent
        title="Las claves del Alto Rendimiento y el Deporte como generador de Valores, Emociones y Experiencias"
        subTitle="CONFERENCIAS"
        text={text}
        textColor="white"
      />
      <br />
      <br />
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

export default Conferencias

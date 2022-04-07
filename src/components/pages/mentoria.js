import * as React from "react"
import { container } from "../../styles/pages.module.scss"
import DownloadPdf from "../utils/links/downloadPdf"
import TextComponent from "../utils/text/TextComponent"

const Mentoria = () => {
  const list = [
    "Programa el éxito y el alto rendimiento a nivel inconsciente, por lo que se queda gravado en él.",
    "Los resultados son inmediatos, desde la primera sesión, y los procesos tienen una duración muy inferior a los de cualquier otra técnica de acompañamiento.",
    "Se consiguen grandes transformaciones internas que se convierten rápida y definitivamente en grandes logros.",
  ]

  const text = (
    <p>
      El Entrenamiento Invisible es un Programa de Alto Rendimiento Deportivo
      mediante mentorías personalizadas para jugadores y entrenadores que
      quieren optimizar su rendimiento, fortalecer su toma de decisiones,
      potenciar su autoconfianza e incrementar su mentalidad ganadora.
      <br />
      <br />
      Este programa es una combinación única de herramientas de programación
      mental y alto rendimiento, con los protocolos más eficaces, breves y
      avanzados de Neurociencia.
    </p>
  )

  return (
    <div id="mentoria" className={container}>
      <TextComponent
        title="Programa de Aceleración del Talento Deportivo"
        subTitle="MENTORÍAS"
        list={list}
        text={text}
      />
      <DownloadPdf
        title="Entrenamiento Invisible"
        link="https://www.google.com/"
      />
    </div>
  )
}

export default Mentoria

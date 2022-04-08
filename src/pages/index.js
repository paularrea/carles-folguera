import React from "react"
import Layout from "../components/layout/layout"
import Intro from "../components/pages/intro"
import Mentoria from "../components/pages/mentoria"
import Consultoria from "../components/pages/consultoria"
import Conferencias from "../components/pages/conferencias"
import Contacto from "../components/pages/contacto"
import Quote from "../components/utils/quote/Quote"
import Bio from "../components/pages/bio"
import Publicaciones from "../components/pages/publicaciones"

const Home = () => {
  return (
    <Layout>
      <Intro />
      <Quote
        buttonTo="bio"
        buttonText="Saber más"
        text="Ayudo a jóvenes deportistas y entrenadores a llevar su carrera al más alto nivel de rendimiento, transformando creencias destructivas y optimizando su gestión emocional y mental con técnicas de Neurociencia."
      />
      <Bio />
      <Quote
        buttonTo="mentoria"
        buttonText="Saber más"
        text="Cuando una persona reconoce con humildad todo su talento y su potencial es cuando descubre que él es su gran oportunidad."
      />
      <Mentoria />
      <Quote
        buttonTo="contacto"
        buttonText="Contacta"
        text="Todos los deportistas y entrenadores en el alto rendimiento quieren triunfar pero no todos están dispuestos a comprometerse en trabajar valores como el esfuerzo, la resiliencia, la autodisciplina y la tolerancia al error."
      />
      <Consultoria />
      <Quote
        buttonTo="contacto"
        buttonText="Contacta"
        text="La excelencia como directivo deportivo de un club o una federación no está en una idea puntual, está en pensar y llevar a cabo acciones pensadas que permitan dejar un legado que vaya más allá del resultado deportivo. La responsabilidad última es hacia el propio deporte y sus valores, en la formación a los entrenadores y la esencia está en formar a los niños y niñas más allá de las 2 horas al día que están entrenando o compitiendo."
      />
      <Conferencias />
      <Publicaciones/>
      <Contacto />
    </Layout>
  )
}
export default Home

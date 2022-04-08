import React from "react"
import { container } from "../../styles/pages.module.scss"
import Testimonials from "../utils/testimonials/Testimonials"

const Publicaciones = () => {
  const publicationsList = [
    {
      year: "2021",
      color: "#286CBE",
      text: "“El portero de hockey sobre patines: de la iniciación al alto rendimiento”.",
    },
    {
      year: "2019",
      color: "#060823",
      text: "“40 años de la creación de la Masía FCB: el destino es el sueño, el camino es la clave”.",
    },
    {
      year: "2012",
      color: "#286CBE",
      text: "“Cómo formar un buen deportista” Enric Sebastiani. Coord.",
    },
    {
      year: "2011",
      color: "#060823",
      text: "“Educados para ganar”. Sique Rodríguez.",
    },
    {
      year: "2010",
      color: "#286CBE",
      text: "“Buen deportista, mejor persona”. Mauro Valenciano.",
    },
  ]
  return (
    <div className={container}>
      <h6>PUBLICACIONES</h6>
      <p>He participado en las siguientes producciones biográficas:</p>
      <br />
      <ul>
        {publicationsList.map((item, i) => {
          return (
            <li key={i}>
              <span style={{ color: item.color }}>{item.year}</span>
              <p> {item.text}</p>
            </li>
          )
        })}
      </ul>
      <br />
      <br />
      <h6>TESTIMONIALS</h6>
      <Testimonials />
    </div>
  )
}

export default Publicaciones

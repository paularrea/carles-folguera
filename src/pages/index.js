import React, { useState } from "react"
import { IntlProvider } from "react-intl"
import Layout from "../components/layout/layout"
import Intro from "../components/pages/intro"
import Mentoria from "../components/pages/mentoria"
import Consultoria from "../components/pages/consultoria"
import Conferencias from "../components/pages/conferencias"
import Contacto from "../components/pages/contacto"
import Quote from "../components/utils/quote/Quote"
import Bio from "../components/pages/bio"
import Publicaciones from "../components/pages/publicaciones"
import { buttonsText, quotesText } from "../components/utils/data/texts"
import { LOCALES } from "../translations/locales"

const Home = () => {
  const [currentLocale, setCurrentLocale] = useState(LOCALES.SPANISH)
  const handleChange = e => {
    setCurrentLocale(e.target.value)
  }
  return (
    <IntlProvider locale={currentLocale}>
      <Layout currentLocale={currentLocale} handleChange={handleChange}>
          <Intro />
          <Quote
            buttonTo="bio"
            buttonText={buttonsText.know[currentLocale]}
            text={quotesText.quoteOne[currentLocale]}
          />
          <Bio />
          <Quote
            buttonTo="mentoria"
            buttonText={buttonsText.know[currentLocale]}
            text={quotesText.quoteTwo[currentLocale]}
          />
          <Mentoria />
          <Quote
            buttonTo="contacto"
            buttonText={buttonsText.contact[currentLocale]}
            text={quotesText.quoteThree[currentLocale]}
          />
          <Consultoria />
          <Quote
            buttonTo="contacto"
            buttonText={buttonsText.contact[currentLocale]}
            text={quotesText.quoteFour[currentLocale]}
          />
          <Conferencias />
          <Publicaciones />
          <Contacto />
      </Layout>
    </IntlProvider>
  )
}
export default Home

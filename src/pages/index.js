import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby";
import LogoBlack from "../components/GatsbyImages/LogoBlack"
import {
  container,
  img_container,
  text,
  abs_img
} from "../styles/home.module.scss"

const Home = () => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`);
  console.log(data.site.siteMetadata, 'data')
  return (
    <Layout>
      <Seo title="Home" />
      <div className={container}>
        <section className={img_container}></section>
        <section className={text}>
          <h1>
            At Bacana we offer interior design, but we also offer experiences
            that draw from the union of everything that inspires us. <br />
            We are a Worldwide studio specialized in Hospitality and Operations.
          </h1>
        </section>
        <div className={abs_img}>
        <LogoBlack/>
      </div>
      </div>
    </Layout>
  )
}
export default Home

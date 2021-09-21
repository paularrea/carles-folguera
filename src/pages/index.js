import * as React from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import LogoBlack from "../components/GatsbyImages/LogoBlack"
import {
  container,
  img_container,
  text,
  abs_img,
} from "../styles/home.module.scss"
import HomeVideo from "../components/video/HomeVideo"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className={container}>
        <section className={img_container}>
          <HomeVideo />
        </section>
        <section className={text}>
          <h1>
            At Bacana we offer <Link>interior design</Link>, but we also offer
            experiences that draw from the union of everything that inspires us.{" "}
            <br />
            We are a <Link>Worldwide</Link> studio specialized in Hospitality
            and Operations.
          </h1>
        </section>
        <Link style={{zIndex:9999}} className={abs_img} to="/contact">
          <LogoBlack />
        </Link>
      </div>
    </Layout>
  )
}
export default Home

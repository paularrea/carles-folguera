import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import LogoBlack from "../components/GatsbyImages/LogoBlack"
import {
  container,
  box,
  abs_img,
} from "../styles/contact.module.scss"

const Worldwide = () => (
  <Layout>
    <Seo title="Worldwide" />
    <div className={container}>
      <section className={box} style={{ marginBottom: "3rem" }}>
        <p style={{ fontWeight: 700 }}>We are a worldwide studio</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sit
          magni, error adipisci totam ad blanditiis repellendus expedita iste
          eaque asperiores minus aliquid eius? Eum perspiciatis fugit aliquid
          dignissimos magnam?
        </p>
      </section>
      <Link style={{ zIndex: 9999 }} className={abs_img} to="/">
        <LogoBlack />
      </Link>
    </div>
  </Layout>
)

export default Worldwide

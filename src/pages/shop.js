import * as React from "react"
import CommingSoon from "../components/GatsbyImages/CommingSoon"
import Hot from "../components/GatsbyImages/Hot"
import LogoBlack from "../components/GatsbyImages/LogoBlack"
import LogoWhite from "../components/GatsbyImages/LogoWhite"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import {container, flex_container, box} from "../styles/shop.module.scss"

const Shop = () => (
  <Layout>
    <Seo title="Shop" />
    <div className={container}>
      <div className={box}>
        <Hot />
      </div>
      <div className={box}>
        <CommingSoon />
        <section className={flex_container}>
          <LogoWhite />
          <LogoBlack />
        </section>
      </div>
    </div>
  </Layout>
)

export default Shop

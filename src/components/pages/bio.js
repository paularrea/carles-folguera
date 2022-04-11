import React from "react"
import { container } from "../../styles/pages.module.scss"
import TextComponent from "../utils/text/TextComponent"
import OrangeShadow from "../utils/orangeShadow/OrangeShadow"
import FlexGrid from "../utils/flexGrid/FlexGrid"
import { bioFlexList, bioList } from "../utils/data/lists"
import { useIntl } from "react-intl"
import BioBg from "../GatsbyImages/BioBg"

const Bio = () => {
  const { locale } = useIntl()
  return (
    <BioBg>
      <div
        // style={{ backgroundColor: "#060823" }}
        className={container}
        id="bio"
      >
        <TextComponent
          title={bioList.title[locale]}
          subTitle={bioList.subTitle[locale]}
          list={bioList.list}
          locale={locale}
          textColor="white"
        />
        <FlexGrid list={bioFlexList} locale={locale} />
        <OrangeShadow />
      </div>
    </BioBg>
  )
}
export default Bio

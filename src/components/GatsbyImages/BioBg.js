import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const BioBg = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bio-bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 90, webpQuality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const imageData = data.placeholderImage.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
    >
      <div>{props.children}</div>
    </BackgroundImage>
  );
};

export default BioBg;

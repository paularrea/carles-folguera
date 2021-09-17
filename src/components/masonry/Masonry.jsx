import React from "react"
import Img from "gatsby-image"
import "./masonry.css"
import Masonry from "react-masonry-css"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

const breakpointColumnsObj = {
  default: 4,
  2000: 3,
  700: 2,
  500: 1,
}

const MasonryGrid = ({ images }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <SimpleReactLightbox>
        <SRLWrapper>
          {images.map(image => (
            <a href={image.node.publicURL}>
              <Img
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base}
              />
            </a>
          ))}
        </SRLWrapper>
      </SimpleReactLightbox>
    </Masonry>
  )
}

export default MasonryGrid

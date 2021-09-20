import React from "react"

function HomeVideo() {
  return (
      <iframe
        title="intro video"
        src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdop69qrah%2Fvideo%2Fupload%2Fv1612775196%2FJOSIE_m0gnjk.mp4&cloud_name=Pau%27s%20cloud&player%5Bfluid%5D=true&player%5Bcontrols%5D=false&player%5Bmuted%5D=true&player%5Bautoplay%5D=true&player%5Bloop%5D=true"
        width="200%"
        height="100%"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        style={{ zIndex:'-1', position: "absolute", height: "100vw", top: 0, left: "-60%" }}
        allowfullscreen
        frameborder="0"
      ></iframe>
  )
}

export default HomeVideo

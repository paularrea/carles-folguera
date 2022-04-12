module.exports = {
  siteMetadata: {
    title: `Carles Folguera`,
    description: `Entrena lo invisible, para que lo visible sea insuperable`,
    author: `www.paularrea.com`,
    siteUrl: `www.carlesfolguera.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 2000,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
}

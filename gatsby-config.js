module.exports = {
  siteMetadata: {
    title: `product design person`,
    description: `product designer portfolio. showcasing my latest work and projects.`,
    author: `kyle`,
  },
  plugins: [
     {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
     },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
     {
       resolve: `gatsby-transformer-remark`,
       options: {
         plugins: [
           {
             resolve: `gatsby-remark-images`,
             options: {
               // It's important to specify the maxWidth (in pixels) of
               // the content container as this plugin uses this as the
               // base for generating different widths of each image.
               maxWidth: 800,
             },
           },
         ],
       },
     },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kyle | product design portfolio`,
        short_name: `kyle's portfolio`,
        start_url: `/`,
        background_color: `#1D1D1D`,
        theme_color: `#DDDDDD`,
        display: `minimal-ui`,
        icon: `src/images/icon/kyle_favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

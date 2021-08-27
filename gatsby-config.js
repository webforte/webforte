const path = require(`path`)
// const languages = require('./src/config/languages')

module.exports = {
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    LMDB_STORE: true,
  },
  siteMetadata: {
    siteUrl: 'https://www.webforte.io',
    title: `Konstantin Werner`,
    description: `Webforte Webseite`,
    author: `Konstantin Werner <konstantin@webforte.io>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/portfolio/*`, `/work/*`],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `qiwepqcjf6yg`,
        accessToken: `e7f6d46c94276e09b1af83df1632a4e7d941d8e6c156ee8872a1b59c99afd72f`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Webforte`,
        short_name: `webforte`,
        start_url: `/`,
        background_color: `#90cac0`,
        theme_color: `#90cac0`,
        display: `minimal-ui`,
        icon: `src/images/webforte-logo.svg`, // This path is relative to the root of the site.
      },
    }, // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
  ],
}

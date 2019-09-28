const path = require(`path`)
// const languages = require('./src/config/languages')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.webforte.io',
    title: `Konstantin Werner`,
    description: `Webforte Webseite`,
    author: `Konstantin Werner <konstantin@webforte.io>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-flow`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    // `gatsby-plugin-remove-generator`,
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
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

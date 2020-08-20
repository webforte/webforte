/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const slash = require(`slash`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // (filter: { status: { eq: "published" } })
  const result = await graphql(`
    query {
      allContentfulPortfolio {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `)
  const customPortfolioTemplate = path.resolve(
    `./src/templates/custom-portfolio.js`
  )
  result.data.allContentfulPortfolio.edges.forEach((edge) => {
    createPage({
      // will be the url for the page
      path: `/portfolio/${edge.node.slug}`,
      // specify the component template of your choice
      component: slash(customPortfolioTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}

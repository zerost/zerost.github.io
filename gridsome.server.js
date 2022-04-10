// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allMarkdownPost {
        edges {
          node {
            id
            title
          }
        }
      }
    }`)

    const idList = []
    data.allMarkdownPost.edges.forEach(({ node }) => {
      idList.push(node.id)
    })
    createPage({
      path: `/myindex`,
      component: './src/templates/index.vue',
      context: {
        idList
      }
    })
  })
}

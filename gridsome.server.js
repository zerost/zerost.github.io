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
      allMarkdownPost(sort: [{ by: "category", order: ASC }, {by: "date", order: DESC}]) {
        edges {
          node {
            id
            category
            date
            title
            lang
            content
          }
        }
      }
    }`)

    const map = new Map()
    data.allMarkdownPost.edges.forEach(({ node }) => {
      let key = `/${node.lang}/posts`
      node.category.forEach((s) => {
        key = key + '/' + s
        if (!map.has(key)) {
          map.set(key, { name: s, postList: [] })  
        }
        map.get(key).postList.push({ 
          id: node.id,  
          title: node.title,
          content: node.content
        })
      })
    })

    for (const [key, value] of map) {
      let path = key
                .split('/')
                .map(s => encodeURI(s.replace(/ /g, '-')))
                .join('/')
      console.log(path)
      createPage({
        path,
        component: './src/templates/index.vue',
        context: {
          data: value,
        }
      })      
    }
  })
}

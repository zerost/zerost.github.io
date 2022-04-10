// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'ZEROST\'s Blog',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'markdownPost',
        remark: {
        }
      }
    },
    {
      use: 'gridsome-plugin-gtag',
      options: {
          config: {
              id: 'G-XPCYCBEZ7Y',
          },
      },
  },
  ],
  templates: {
    markdownPost: [
      {
        path: (node) => {
          let category = ''
          if (node.category != null) {
            let categoryArray = node.category.map((s) => encodeURI(s.replace(/ /g, '-')))
            category = categoryArray.join('/').replace(/ /g, '-') + '/'
          }
            
          return `/${node.lang}/posts/${category}/${encodeURI(node.title.replace(/ /g, '-'))}`
        },
        component: './src/templates/markdownPost.vue'
      }
    ]
  },  
  transformers: {
    remark: {
      plugins: [
        [
          '@gridsome/remark-prismjs', 
          {
            showLineNumbers: true,
            transformInlineCode: true
          }
        ]
      ]
    }
  },
  //deploy
  siteUrl: 'blog.zerost.com',
  pathPrefix: '/',
}

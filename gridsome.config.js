// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'ZEROST\'s Blog',
  siteUrl: 'https://blog.zerost.com',
  pathPrefix: '/',  
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
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/exclude-me'],
        config: {
          '/ko/**': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2022-04-12',
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2022-04-12',
          }
        }
      }
    }
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
}

<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">
          <h2>{{ $static.metadata.siteName }}</h2>
        </g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <div class="main-container">
      <nav>
        <ul>
          <li v-for="(value, key) in categoryList" :key="key">
            <a :href="`/ko/posts/${parseUrl(key)}`">{{ key }}</a>
            <ul v-if="Object.keys(value).length > 0">
              <li v-for="(value2, key2) in value" :key="key2">
                <a :href="`/ko/posts/${parseUrl(key)}/${parseUrl(key2)}`">{{ key2 }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }

  allMarkdownPost(sort: [{by: "category", order: ASC}]) {
    edges {
      node {
        id
        title
        content
        lang
        category
        date
      }
    }
  }    
}
</static-query>


<script>
export default {
  data() {
    return {
      categoryObj: {} 
    }
  },

  mounted() {
    //console.log(Object.entries(this.$static))
  },

  methods: {
    parseUrl(url) {
      return encodeURI(url.replace(/ /g, '-'))
    }
  },

  computed: {
    categoryList() {
      const allMarkdownPost = this.$static.allMarkdownPost
      allMarkdownPost.edges.forEach(elm => {
        let obj
        elm.node.category.forEach((elm2, index) => {
          switch (index) {
            case 0:
              if (typeof this.categoryObj[elm2] === 'undefined') {
                this.categoryObj[elm2] = {}
              }
              obj = this.categoryObj[elm2]
              break;

            default:
              if (typeof obj[elm2] === 'undefined') {
                obj[elm2] = {}
              }
              obj = obj[elm2]
              break;
          }
        })
      })
      //console.log(this.categoryObj)
      return this.categoryObj
    }
  }
}
</script>


<style>
.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>

<style lang="scss" src="../styles/vars.scss"></style>
<style lang="scss" src="../styles/vars-dark.scss"></style>
<style lang="scss">
.home-links a {
  margin-right: 1rem;
}


html {
  body {
    background-color: var(--cm-background);
    color: var(--cm-font-color);
    font-family: 'Noto Sans KR', sans-serif;

    h1, 
    h2 {
      font-weight: 700;
    }

    h2 {
      font-size: 1.8rem;
    }

    a, a:visited, a:hover {
      color: var(--cm-font-color);
      text-decoration: none;
    }

    code[class*="language-"] {
      font-family: 'Nanum Gothic Coding', monospace;
    }

    code[class*="language-"] .line-numbers-rows {
      top: -4px;
    }

    .main-container {
      display: flex;
      flex-direction: row;

      nav {
        flex: 0 0 15rem;
      }

      main {
        flex-grow: 1;
      }      
    }


  }
}
</style>
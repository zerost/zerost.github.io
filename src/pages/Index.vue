<script setup>
</script>

<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <h2 class="subtitle">Zerost's Programming Notes</h2>
    <div v-for="(obj, index) in $page.allMarkdownPost.edges" :key="index">
      <a :href="`/${obj.node.lang}/posts/${obj.node.category.map((s) => encodeURI(s.replace(/ /g, '-'))).join('/')}/${obj.node.title.replace(/ /g, '-')}`">
        <h3 class="title">{{ obj.node.title }}</h3>
      </a>
      <div class="post-info">
        <div class="category">[카테고리] {{ obj.node.category.join('/') }}</div>
        <div class="date">[작성시간] {{ obj.node.date }}</div>
      </div>
      <div class="content" v-text="obj.node.content.replace(/(<([^>]+)>)/gi, '')"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Zerost programming notes',
    htmlAttrs: {
      lang: 'ko'
    }
  }
}
</script>

<page-query>
query {
  allMarkdownPost {
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
</page-query>

<style lang="scss" scoped>
.subtitle {
  padding-bottom: .7rem;
  border-bottom: 1px solid #ccc;
}

.title {
  margin-bottom: 0;
  font-size: 1.3rem;
}

.post-info {
  display: flex;
  margin-bottom: .5rem;
  font-size: .875rem;

  > .category,
  > .date {
    flex-grow: 1;
  }

}

.content {
  display: inline-block; 
  width: 100%; 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  /* 여러 줄 자르기 추가 스타일 */ 
  white-space: normal; 
  line-height: 1.2; 
  height: 3.6em; 
  text-align: left; 
  word-wrap: break-word; 
  display: -webkit-box; 
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
}
</style>




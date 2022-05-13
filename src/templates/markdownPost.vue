<template>
  <Layout>
    <section class="post-info">
      <h2 v-html="$page.markdownPost.title" />
      <div>작성일시: {{ $page.markdownPost.date }}</div>
      <div>카테고리: {{ $page.markdownPost.category.join("/") }}</div>
    </section>
    <div>
      <div v-html="$page.markdownPost.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  // metaInfo: {
  //   title: '1234',
  //   htmlAttrs: {
  //     lang: 'ko'
  //   }
  // },
  metaInfo() {
    return {
      title: this.$page.markdownPost.title,
      htmlAttrs: {
        lang: this.$page.markdownPost.lang
      }
    }
  }
}
</script>

<page-query>
query ($id: ID!) {
  markdownPost(id: $id) {
    title
    content
    date
    category
    lang
  }
}
</page-query>

<style lang="scss" scoped>
.post-info {
  border-bottom: 1px solid #ccc;
  margin-bottom: 1.5rem;
  padding-bottom: 0.6rem;
}
</style>
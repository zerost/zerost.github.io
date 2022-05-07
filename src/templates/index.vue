<template>
  <Layout>
    <!-- <h1 v-html="$page.markdownPost.title" />
    <div v-html="$page.markdownPost.content" /> -->
    <ul>
      <li v-for="(obj, index) in $context.data.postList" :key="index">
        <div><a :href="`/ko/posts/${encodeURI(obj.category.join('/').replace(/ /g, '-') + '/' + obj.title.replace(/ /g, '-'))}`">{{ obj.title }}</a></div>
      </li>
    </ul>
  </Layout>
</template>
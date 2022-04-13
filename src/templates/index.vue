<script setup>
//console.log($page)
</script>


<template>
  <Layout>
    <!-- <h1 v-html="$page.markdownPost.title" />
    <div v-html="$page.markdownPost.content" /> -->
    <ul>
      <li v-for="(obj, index) in $context.data.postList" :key="index">
        <div>{{ obj.title }}</div>
        <div>{{ obj.content.replace(/(<([^>]+)>)/gi, '') }}</div>
      </li>
    </ul>
  </Layout>
</template>
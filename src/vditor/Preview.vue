<template>
  <div>{{ article }}</div>
</template>

<script setup lang="ts">
const article = ref();

onMounted(() => {
  request
    .get('/fancy/blog/articles/' + router.currentRoute.value.params.id)
    .then((res) => {
      article.value = res.data.data;
    });
});
</script>

<style scoped lang="scss"></style>

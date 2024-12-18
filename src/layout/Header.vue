<template>
  <header>
    <div flex="~ justify-between items-center">
      <div flex="~ items-center">
        <nav>
          <ul list-none flex="~ wrap" m="0 l-4" p0>
            <li>首页</li>
            <li>资源导航</li>
            <li>个人博客</li>
            <li>在线工具</li>
          </ul>
        </nav>
      </div>
      <ThemeIcon size="2rem" />
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeIcon from './ThemeIcon.vue';
</script>

<style scoped lang="scss"></style>

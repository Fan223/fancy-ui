<template>
  <nav ml-4>
    <ul list-none flex="~ wrap" m-0 p-0>
      <li
        v-for="menu in menus"
        :key="menu.path"
        :class="{ active: active === menu.path }"
        p="x-3 y-2"
        m-1
        rd-2
        cursor-pointer
        @click="$router.push(menu.path)"
      >
        <b> {{ menu.name }} </b>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useNavStore } from '@/pinia';

const { active } = storeToRefs(useNavStore());
const menus = [
  { name: '首页', path: '/home' },
  { name: '博客', path: '/blog' },
  { name: '资源导航', path: '/resource' },
  { name: '在线工具', path: '/tool' },
  { name: '关于', path: '' },
];
</script>

<style scoped lang="scss">
.active,
li:hover {
  background: var(--background-trans);
}
</style>

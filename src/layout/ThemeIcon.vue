<template>
  <div :style="{ height: props.size, width: props.size }" cursor-pointer>
    <div class="i-ic-twotone-contrast" v-if="'os' === theme" @click="changeTheme('dark')" />
    <div
      class="i-line-md-sunny-filled-loop-to-moon-filled-loop-transition"
      v-if="'dark' === theme"
      @click="changeTheme('light')"
    />
    <div
      class="i-line-md-moon-filled-to-sunny-filled-loop-transition"
      v-if="'light' === theme"
      @click="changeTheme('dark')"
    />
  </div>
</template>

<script setup lang="ts">
import theme from '@/assets/ts/useTheme';

const props = defineProps(['size']);

function changeTheme(val: string) {
  theme.value = val;
}
</script>

<style scoped lang="scss">
div {
  height: 100%;
  width: 100%;
}
</style>

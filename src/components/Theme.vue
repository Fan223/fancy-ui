<template>
  <div :style="{ height: props.size, width: props.size }" cursor-pointer>
    <Icon
      class="i-ic:round-contrast"
      v-if="'os' === theme"
      @click="changeTheme('light')"
    />
    <Icon
      class="i-line-md:sunny-filled-loop"
      v-if="'light' === theme"
      @click="changeTheme('dark')"
    />
    <Icon
      class="i-line-md:moon-filled-loop"
      v-if="'dark' === theme"
      @click="changeTheme('os')"
    />
  </div>
</template>

<script setup lang="ts">
import theme from '@/assets/ts/theme';
import { type Theme } from '@/assets/ts/theme';

const props = withDefaults(defineProps<{ size?: string }>(), {
  size: '2rem',
});

function changeTheme(val: Theme) {
  theme.value = val;
}
</script>

<style scoped lang="scss"></style>

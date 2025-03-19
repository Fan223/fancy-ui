<template>
  <div :style="{ height: props.size, width: props.size }" h-full w-full>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: string;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss"></style>

<template>
  <Aurora
    :class="[
      'divider',
      `divider--${props.vertical ? 'vertical' : 'horizontal'}`,
    ]"
  >
    <div
      v-if="hasSlot"
      :class="[
        'divider__text',
        `divider--${props.vertical ? 'vertical' : 'horizontal'}__text`,
        textAlign,
      ]"
    >
      <slot />
    </div>
  </Aurora>
</template>

<script setup lang="ts">
interface Props {
  vertical?: boolean; // 是否为垂直分隔线
  align?: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom'; // 文本对齐方式
}

const props = defineProps<Props>();
const textAlign = computed(
  () => props.align ?? (props.vertical ? 'middle' : 'center')
);

// 是否有 slot
const slots = useSlots();
const hasSlot = computed(() => !!slots.default);
</script>

<style scoped lang="scss">
.divider {
  position: relative;
  border-radius: 0.5rem;

  &--horizontal {
    height: 0.25rem;
    margin: 2rem 0;

    &__text {
      top: 50%;
      transform: translateY(-50%);
      padding: 0 2rem;

      &.left {
        left: 10%;
      }
      &.center {
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &.right {
        right: 10%;
      }
    }
  }

  &--vertical {
    width: 0.25rem;
    margin: 0 1.5rem;

    &__text {
      left: 50%;
      transform: translateX(-50%);
      writing-mode: vertical-rl;
      padding: 1.5rem 0;

      &.top {
        top: 10%;
      }
      &.middle {
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &.bottom {
        bottom: 10%;
      }
    }
  }

  &__text {
    position: absolute;
    background-color: var(--background-primary);
  }
}
</style>

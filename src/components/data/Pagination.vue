<template>
  <div flex="~ items-center justify-center" v-if="pages > 1">
    <span> Total {{ props.total }}</span>
    <!-- 上一页 -->
    <button :disabled="isPrevDisabled" @click="changePage(current - 1)">
      <Icon class="i-ic:round-keyboard-arrow-left" size="1.5rem" />
    </button>

    <!-- 页码显示 -->
    <button
      v-for="(page, index) in visiblePages"
      :key="page"
      @click="changePage(page, index)"
      :class="{ active: page === current }"
    >
      <!-- {{ page }} -->
      <template v-if="typeof page === 'number'"> {{ page }} </template>
      <div
        v-else
        @mouseenter="hoverIndex = index"
        @mouseleave="hoverIndex = -1"
        h-6
        w-6
      >
        <Icon
          v-if="hoverIndex === index"
          :class="{
            'i-ic:round-keyboard-double-arrow-left': page === 'prev',
            'i-ic:round-keyboard-double-arrow-right': page === 'next',
          }"
        />
        <Icon v-else class="i-ic:round-more-horiz" />
      </div>
    </button>

    <!-- 下一页 -->
    <button :disabled="isNextDisabled" @click="changePage(current + 1)">
      <Icon class="i-ic:round-keyboard-arrow-right" size="1.5rem" />
    </button>
  </div>
</template>

<script setup lang="ts">
interface Pagination {
  current?: number;
  size?: number;
  total?: number;
}

const props = withDefaults(defineProps<Pagination>(), {
  current: 1,
  size: 12,
  total: 12,
});
const emit = defineEmits(['handlePageChange']);

// 计算总页数
const pages = computed(() => Math.ceil(props.total / props.size));

// 是否禁用上一页 / 下一页
const isPrevDisabled = computed(() => props.current <= 1);
const isNextDisabled = computed(() => props.current >= pages.value);

// 计算可见的页码
const visiblePages = computed(() => {
  const totalPages = pages.value;
  if (totalPages <= 5) {
    return totalPages;
  }

  const visiblePages: (number | string)[] = [];
  visiblePages.push(1);

  const current = props.current;
  if (current >= 4) {
    visiblePages.push('prev');
  }

  let start = Math.max(2, current - 1);
  let minStart = Math.min(start, totalPages - 3);
  let end = Math.min(totalPages - 1, current + 1);
  let minEnd = Math.max(4, end);

  for (let i = minStart; i <= minEnd; i++) {
    visiblePages.push(i);
  }

  if (current < totalPages - 2) {
    visiblePages.push('next');
  }
  visiblePages.push(totalPages);
  return visiblePages;
});

const hoverIndex = ref(-1);

const changePage = (page: number | string, index?: number) => {
  if (typeof page === 'number' && page >= 1 && page <= pages.value) {
    emit('handlePageChange', page);
  } else if (typeof page === 'string') {
    if (index && index > 1) {
      emit('handlePageChange', props.current + 2);
    } else {
      emit('handlePageChange', props.current - 2);
    }
  }
};
</script>

<style scoped lang="scss">
button {
  background-color: var(--background-trans);
  min-width: 2rem;
  margin: 0 0.25rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:not(:disabled):hover {
    color: var(--text-accent);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.active {
  background-color: var(--text-accent);
  color: var(--text-bright) !important;
  font-weight: bold;
  cursor: default;
}
</style>

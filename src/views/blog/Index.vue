<template>
  <!-- 推荐文章 -->
  <Article :articles="recommendArticles.slice(0, 1)" layout="vertical" />

  <div class="article-recommend">
    <!-- 推荐栏 -->
    <div style="background: var(--main-gradient)" p-1 rd-4>
      <div
        style="background-color: var(--background-secondary)"
        h-full
        w-full
        p-4
        rd-4
        flex="~ items-center justify-center"
        op-90
      >
        <div class="i-ic:round-recommend" h-8 w-8 />
        <b ml-2>推荐文章</b>
      </div>
    </div>

    <!-- 推荐文章 -->
    <Article :articles="recommendArticles.slice(1, 3)" :column="2" />
  </div>

  <!-- 分类 -->
  <Category
    :categories="categories"
    :selectId="queryForm.categoryId"
    @handleCategoryChange="handleCategoryChange"
  />

  <!-- 文章 -->
  <Article :articles="articles" />

  <!-- 分页 -->
  <Pagination
    :total="pagination.total"
    :current="pagination.current"
    :size="pagination.size"
    @handlePageChange="handlePageChange"
    mb-6
  />
</template>

<script setup lang="ts">
import Category from './category/Index.vue';
import Article from './article/Index.vue';
import type { Article as ArticleType } from './article/article';
import type { Category as CategoryType } from './category/category';
import { stringify } from 'qs';

// 推荐文章
const recommendArticles = ref<ArticleType[]>([]);
function listRecommendArticles() {
  request.get('/fancy/blog/articles/recommend').then((res) => {
    recommendArticles.value = res.data.data;
  });
}
listRecommendArticles();

// 分类
const categories = ref<CategoryType[]>([]);
function listCategories() {
  request.get('/fancy/blog/categories/list').then((res) => {
    categories.value = res.data.data;
  });
}
listCategories();

function handleCategoryChange(categoryId: string) {
  queryForm.categoryId = categoryId;
  pagination.current = 1;
  pageArticles();
}

const queryForm = reactive({
  categoryId: '',
  title: '',
  state: '',
});

const pagination = reactive({
  current: 1,
  size: 12,
  total: 12,
});

// 文章
const articles = ref([] as ArticleType[]);
function pageArticles() {
  let params = stringify({
    categoryId: queryForm.categoryId,
    title: queryForm.title,
    state: queryForm.state,
    currentPage: pagination.current,
    pageSize: pagination.size,
  });

  request.get('/fancy/blog/articles?' + params).then((res) => {
    articles.value = res.data.data.records;
    pagination.total = res.data.data.total;
  });
}
pageArticles();

// 监听分页变化
const handlePageChange = (newPage: number) => {
  pagination.current = newPage;
  pageArticles();
};
</script>

<style scoped lang="scss">
.article-recommend {
  display: grid;
  gap: 2rem;
  margin: 2rem;
  grid-template-columns: auto 1fr;
}

@media (max-width: 992px) {
  .article-recommend {
    grid-template-columns: auto;
  }
}
</style>

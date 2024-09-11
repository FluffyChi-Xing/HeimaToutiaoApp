<script setup lang="ts">
import { ref } from 'vue';
import ArticleCardTemplate from "@/components/ArticleCardTemplate.vue";
import {showToast} from "vant";
import type {LayoutTypes} from "@/conponsables/api/LayoutTypes";


/** ===== 页面刷新-start ===== **/
const isLoading = ref<boolean>(false)
function handleRefresh() {
  isLoading.value = true
  setTimeout(() => {
    showToast('刷新成功');
    isLoading.value = false
  }, 2000)
}
/** ===== 页面刷新-end ===== **/

/** ===== 推荐文章-start ===== **/
const defaultList = [
  {
    id: 1,
    title: '超小众的旅游景点 !',
    imgUrl: ['https://picsum.photos/200/300?1', 'https://picsum.photos/200/300?2'],
    isTop: true,
    author: '小明',
    date: '2021-09-01',
  },
  {
    id: 2,
    title: '这是一个大新闻 !',
    imgUrl: ['https://picsum.photos/200/300?3'],
    isTop: true,
    author: '小王',
    date: '2021-09-12',
  },
  {
    id: 3,
    title: '这是一个大新闻 !',
    desc: '震惊! 你还在使用jQuery吗? 你out了!',
    imgUrl: [],
    isTop: false,
    author: '小红',
    date: '2021-09-23',
  },
  {
    id: 4,
    title: '这是一个大新闻 !',
    imgUrl: ['https://picsum.photos/200/300?4', 'https://picsum.photos/200/300?5'],
    isTop: false,
    author: '小李',
    date: '2021-09-30',
  }
]
const articleList = ref<LayoutTypes.ArticleCardTypes[]>(defaultList)
/** ===== 推荐文章-end ===== **/
</script>

<template>
  <div class="w-full h-full block py-4 overflow-y-auto">
    <van-pull-refresh
        v-model="isLoading"
        @refresh="handleRefresh"
        success-text="刷新成功"
    >
      <ArticleCardTemplate
          v-for="(item, index) in articleList"
          :key="index"
          :img-url="item.imgUrl"
          :title="item.title"
          :desc="item.desc"
          :author="item.author"
          :date="item.date"
          :id="item.id"
          :is-top="item.isTop"
      />
    </van-pull-refresh>
  </div>
</template>

<style scoped>

</style>

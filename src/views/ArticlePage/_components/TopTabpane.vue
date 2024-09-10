<script setup lang="ts">
import { ref } from 'vue'
import {LayoutTypes} from "@/conponsables/api/LayoutTypes";


/** ===== 顶部标签栏-start ===== **/
const active = ref<number>(1)
const tabs = [
  {
    id: 1,
    title: '动态'
  },
  {
    id: 2,
    title: '推荐'
  },
  {
    id: 3,
    title: '关注'
  },
  {
    id: 4,
    title: '热榜'
  },
  {
    id: 5,
    title: '前端'
  }
]
const tabsList = ref<LayoutTypes.ArticleTypes[]>(tabs)
/** ===== 顶部标签栏-end ===== **/
</script>

<template>
  <div class="w-full h-full flex">
    <van-tabs
        v-model:active="active"
        class="w-full"
    >
      <van-tab
          v-for="(item, index) in tabsList"
          :key="index"
          :title="item.title"
      />
    </van-tabs>
  </div>
</template>

<style scoped>

</style>

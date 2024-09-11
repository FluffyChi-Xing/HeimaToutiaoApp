<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type {LayoutTypes} from "@/conponsables/api/LayoutTypes";
import { useRouter } from "vue-router";
import {$stores} from "@/conponsables/stores";




const router = useRouter()
// const route = useRoute()
const homeStore = $stores.homeStore();
/** ===== 顶部标签栏-start ===== **/
const active = ref<number>(1)
const tabs = [
  {
    id: 1,
    title: '动态'
  },
  {
    id: 2,
    title: '推荐',
    url: '/home'
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
// 保存tabs栏的数据到Home上下文
function storeContext(item: LayoutTypes.ArticleTypes[]) {
  homeStore.tabsList = item
}
// 切换tabs栏
function handleChange(item: any) {
  // console.log(item.name)
  if (item.name + 1 === 2) {
    router.push(String(tabs[1].url))
  } else {
    router.push(`/home/part/${item.name + 1}`)
  }
}
onMounted(() => {
  // TODO: 动态获取tabs栏数据
  // initTabs()
  storeContext(tabs)
})
// watch(() => route.fullPath, () => {
//   console.log(route.fullPath)
// })
/** ===== 顶部标签栏-end ===== **/
</script>

<template>
  <div class="w-full h-full flex">
    <van-tabs
        v-model:active="active"
        class="w-full"
        @click-tab="handleChange"
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

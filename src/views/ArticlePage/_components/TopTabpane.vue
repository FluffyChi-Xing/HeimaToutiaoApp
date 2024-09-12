<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type {LayoutTypes} from "@/conponsables/api/LayoutTypes";
import { useRouter, useRoute } from "vue-router";
import {$stores} from "@/conponsables/stores";




const router = useRouter()
const route = useRoute()
const homeStore = $stores.homeStore();
const params = ref<number>()
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
function checkActive() {
  params.value = Number(route.params.id)
  if (route.path === '/home/part') {
    active.value = 1
  }
  switch (params.value) {
    case 1:
      active.value = 0
      break
    case 2:
      active.value = 1
      break
    case 3:
      active.value = 2
      break
    case 4:
      active.value = 3
      break
    case 5:
      active.value = 4
      break
  }
}
onMounted(() => {
  // TODO: 动态获取tabs栏数据
  // initTabs()
  storeContext(tabs)
  checkActive()
})
watch(() => route.params.id, () => {
  checkActive()
})
const emits = defineEmits(['expand:change'])
function handleExpand() {
  emits('expand:change', true);
}
/** ===== 顶部标签栏-end ===== **/
</script>

<template>
  <div class="w-full h-full flex">
    <div style="width: calc(100% - 40px)" class="h-full flex">
      <van-tabs
          v-model:active="active"
          class="w-full z-[999]"
          @click-tab="handleChange"
      >
        <van-tab
            v-for="(item, index) in tabsList"
            :key="index"
            :title="item.title"
        />
      </van-tabs>
    </div>
    <div class="w-10 h-10 flex">
      <van-button
          class="w-full h-full outline-none border-none"
          icon="list-switch"
          @click="handleExpand"
      />
    </div>
  </div>
</template>

<style scoped>
:deep(.van-button) {
  border: none;
}
</style>

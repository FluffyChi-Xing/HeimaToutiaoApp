<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import type {LayoutTypes} from "@/conponsables/api/LayoutTypes";
import { useRouter, useRoute } from "vue-router";




const route = useRoute()
const router = useRouter()
/** ===== app tab bar-start ===== **/
const defaultActive = ref<string>('/home')
const tabList = [
  {
    name: '/home',
    title: '主页',
    icon: 'home-o',
  },
  {
    name: '/category',
    title: '视频',
    icon: 'play-circle-o',
  },
  {
    name: '/discover',
    title: '发现',
    icon: 'fire-o',
  },
  {
    name: '/mine',
    title: '我的',
    icon: 'user-o',
  }
]
const tabBarList = ref<LayoutTypes.LayoutTab[]>(tabList)
// 切换tab
function handleChange(index: string) {
  router.push(index);
}
function handleHighlight(index: string) {
  switch (index) {
    case '/home':
      defaultActive.value = '/home'
      break
    case '/category':
      defaultActive.value = '/category'
      break
    case '/discover':
      defaultActive.value = '/discover'
      break
    case '/mine':
      defaultActive.value = '/mine'
      break
  }
}
onMounted(() => {
  handleHighlight(route.path)
})
watch(() => route.fullPath, () => {
  handleHighlight(route.path)
})
/** ===== app tab bar-end ===== **/
</script>

<template>
  <div class="w-full h-full flex">
    <van-tabbar
        v-model="defaultActive"
        @change="handleChange"
    >
      <van-tabbar-item
          v-for="(item, index) in tabBarList"
          :key="index"
          :icon="item.icon"
          :name="item.name"
      >
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>

</style>

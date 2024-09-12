<script setup lang="ts">
import { ref } from 'vue'
import TopBanner from "@/components/TopBanner.vue";
import InforTemplate from "@/views/DiscoverPage/_components/InforTemplate.vue";
import type {LayoutTypes} from "@/conponsables/api/LayoutTypes";


/** ===== 下拉刷新-start ===== **/
const isLoading = ref<boolean>(false)
function handleRefresh() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
}
/** ===== 下拉刷新-end ===== **/

/** ===== 消息列表初始化-start ===== **/
const defaultList = [
  {
    id: 1,
    title: '整个大新闻 !',
    agree: 12,
    date: '30分钟前',
    comment: 5,
  },
  {
    id: 2,
    title: '作为IT行业过来人，你有什么相对小白说的 !',
    agree: 120,
    date: '30分钟前',
    comment: 45,
    img: 'https://picsum.photos/200/300?1'
  },
  {
    id: 3,
    title: '整个大新闻 !',
    agree: 123,
    date: '30分钟前',
    comment: 25,
  },
  {
    id: 4,
    title: '整个大新闻 !',
    agree: 102,
    date: '5分钟前',
    comment: 5,
  }
]
const inforList = ref<LayoutTypes.inforTypes[]>(defaultList)
/** ===== 消息列表初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <!-- top banner -->
    <TopBanner
        :share="false"
        title="发现"
    />
    <div class="w-full h-full flex flex-col overflow-y-auto">
      <van-pull-refresh
          v-model="isLoading"
          @refresh="handleRefresh"
          success-text="刷新成功"
      >
        <div class="w-full h-full p-5 flex flex-col">
          <InforTemplate
              v-for="(item, index) in inforList"
              :key="index"
              :title="item.title"
              :date="item.date"
              :agree="item.agree"
              :comment="item.comment"
              :img="item.img"
          />
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<style scoped>
:deep(.van-pull-refresh) {
  width: 100%;
  height: 100%;
}
</style>

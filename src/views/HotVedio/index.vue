<script setup lang="ts">
import { ref } from 'vue'
import VideoTemplate from "@/views/HotVedio/_components/VideoTemplate.vue";




/** ===== 下拉刷新-start ===== **/
interface fakaVedio {
  imgUrl: string;
  title: string;
  like: number;
  view: number;
  comment?: number;
}
const defaultList = [
  {
    imgUrl: 'https://picsum.photos/200/300?1',
    title: '震惊！这个视频居然这么火',
    like: 120,
    view: 2000
  },
  {
    imgUrl: 'https://picsum.photos/200/300?2',
    title: '2024年入行计算机视觉的前景如何？',
    like: 1200,
    view: 4300
  },
  {
    imgUrl: 'https://picsum.photos/200/300?3',
    title: '作为过来人，小白必须知道的事 ！',
    like: 120,
    view: 2000,
    comment: 356
  },
  {
    imgUrl: 'https://picsum.photos/200/300?4',
    title: '震惊！这个视频居然这么火',
    like: 120,
    view: 2000
  },
  {
    imgUrl: 'https://picsum.photos/200/300?5',
    title: '震惊！这个视频居然这么火',
    like: 120,
    view: 2000
  }
]
const loading = ref<boolean>(false)
const fakeData = ref<fakaVedio[]>(defaultList)
function handleRefresh() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
/** ===== 下拉刷新-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
   <van-pull-refresh
       v-model="loading"
       pulling-text="下拉刷新"
       @refresh="handleRefresh"
       success-text="刷新成功"
   >
     <div class="w-full h-full block p-4 overflow-y-auto">
       <VideoTemplate
           v-for="(item, index) in fakeData"
           :key="index"
           :title="item.title"
           :img-url="item.imgUrl"
           :like="item.like"
           :view="item.view"
           :comment="item.comment"
       />
     </div>
   </van-pull-refresh>
  </div>
</template>

<style scoped>
:deep(.van-pull-refresh) {
  width: 100%;
  height: 100%;
}
</style>

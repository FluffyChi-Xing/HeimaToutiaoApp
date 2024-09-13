<script setup lang="ts">
import { ref } from 'vue'
import {showToast} from "vant";

// 接口定义
withDefaults(defineProps<{
  imgUrl?: string;
  title?: string;
  view?: number;
  like?: number;
  comment?: number;
}>(), {
  imgUrl: 'https://picsum.photos/200/300?1',
  title: '标题',
  view: 120,
  like: 20,
  comment: 12
})


function handleTouch() {
  showToast("功能开发中")
}
</script>

<template>
  <div
      @click="handleTouch"
      class="w-full h-48 flex flex-col bg-gray-100 rounded-[5px] overflow-hidden"
  >
    <!-- video -->
    <div class="w-full h-36 flex flex-col relative">
      <img :src="imgUrl" alt="" loading="lazy" class="w-full h-full object-cover">
      <div class="w-full h-8 absolute flex flex-row items-center px-4 bottom-0">
        <div class="w-auto h-full flex items-center">
          <van-icon name="like-o" color="#fff" />
          <span class="ml-1 text-white">{{ like }}</span>
        </div>
        <van-divider vertical />
        <div class="w-auto h-full flex items-center">
          <van-icon name="eye-o" color="#fff" />
          <span class="ml-1 text-white">{{ view }}</span>
        </div>
        <van-divider vertical />
        <div class="w-auto h-full flex items-center">
          <van-icon name="comment-o" color="#fff" />
          <span class="ml-1 text-white">{{ comment }}</span>
        </div>
      </div>
    </div>
    <!-- title -->
    <div class="w-full h-full flex flex-col justify-center align-middle text-ellipsis overflow-hidden px-4">
      {{ title }}
    </div>
  </div>
  <van-divider />
</template>

<style scoped>

</style>

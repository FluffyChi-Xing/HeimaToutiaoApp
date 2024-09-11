<script setup lang="ts">
import {onMounted, ref} from 'vue'
import AuthorTemplate from "@/views/ArticleDetail/_components/AuthorTemplate.vue";
import {showToast} from "vant";

const props = withDefaults(defineProps<{
  title?: string;
  desc?: string;
  isLike?: boolean;
  isDisLike?: boolean;
}>(), {
  title: '暂无标题',
  desc: '暂无内容',
  isLike: false,
  isDisLike: false
})


/** ===== 作者banner初始化-start ===== **/
const author = ref<string>('小明')
const avatar = ref<string>('https://picsum.photos/200/300?1')
const date = ref<string>('2024-09-18')
const isFollow = ref<boolean>(false)
/** ===== 作者banner初始化-end ===== **/

/** ===== 点赞操作-start ===== **/
const active = '#FF976A'
const color = ref<string>('')
const info = ref<string>('点赞')
function checkLike(index: boolean) {
  if (index) {
    color.value = active
    info.value = '取消点赞'
  } else {
    info.value = '点赞'
  }
}

function handleLike() {
  if (!props.isLike) {
    color.value = active
    info.value = '取消点赞'
    showToast('点赞成功')
  } else {
    color.value = ''
    info.value = '点赞'
    showToast('取消点赞')
  }
}
onMounted(() => {
  checkLike(props.isLike)
})
/** ===== 点赞操作-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col pt-[70px] px-4">
    <!-- title -->
    <div class="w-full text-2xl font-bold h-auto max-h-16 my-4 text-ellipsis overflow-hidden whitespace-pre-line">
      {{ title }}
    </div>
    <!-- author -->
    <AuthorTemplate
        :date="date"
        :name="author"
        :avatar="avatar"
        :is-follow="isFollow"
    />
    <!-- desc -->
    <div class="w-full h-auto flex flex-col text-xl whitespace-pre-line">
      {{ desc }}
    </div>
    <!-- banner -->
    <div class="w-full h-10 flex justify-center">
      <div class="w-auto h-full flex">
        <div
            @click="handleLike"
            class="w-auto h-full flex items-center"
        >
          <van-icon name="good-job" :color="color" />
          <span class="text-[15px] ml-1">{{ info }}</span>
        </div>
        <van-divider vertical />
        <div class="w-auto h-full flex items-center">
          <van-icon name="delete" color="red" />
          <span class="text-[15px] ml-1">不喜欢</span>
        </div>
      </div>
    </div>
    <van-divider>评论区</van-divider>
    <!-- 评论区 -->
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import ArticleCardTemplate from "@/components/ArticleCardTemplate.vue";
import type {LayoutTypes} from "@/conponsables/api/LayoutTypes";
import {$apis} from "@/conponsables/apis";


/** ===== 获取文章列表-start ===== **/
const load = '/api/v1/article/load'
const loadmore = '/api/v1/article/loadmore'
const loadNew = '/api/v1/article/loadnew'
const newData = ref<any>()
const maxTime = ref<Date>(new Date())
const minTime = ref<Date>(new Date())
const tag = ref<string>('')
const size = 10
async function getList(item: string) {
  await $apis.getArticleList(item, {
    maxBehotTime: maxTime.value,
    minBehotTime: minTime.value,
    size: size,
    tag: tag.value
  }).then((res: any) => {
    newData.value = res.data
    res.data.forEach((item: any) => {
      articleList.value.push({
        id: item.id,
        title: item.title,
        author: item.authorName,
        imgUrl: ['https://picsum.photos/200/300?random=' + Math.random() * 10, 'https://picsum.photos/200/300?random=' + Math.random() * 10], // 由于接口没有返回图片，所以这里随机生成一个图片
        isTop: false,
        date: item.createTime,
        channel: item.channelName,
      })
    })
  })
}
async function initArticleList() {
  await getList(load).catch(() => {
    showToast('获取文章列表失败')
    articleList.value = []
  })
  isLoading.value = false
}
onMounted(async () => {
  await initArticleList()
})
/** ===== 获取文章列表-end ===== **/




/** ===== 页面刷新-start ===== **/
const isLoading = ref<boolean>(false)
async function refresh() {
  await getList(loadNew)
}
async function handleRefresh() {
  isLoading.value = true
  await refresh().catch(() => {
    showToast('刷新失败')
    isLoading.value = false
  })
  isLoading.value = false
}
/** ===== 页面刷新-end ===== **/

/** ===== 推荐文章-start ===== **/
const articleList = ref<LayoutTypes.ArticleCardTypes[]>([])
/** ===== 推荐文章-end ===== **/

/** ===== 文章滚动加载-start ===== **/
const loading = ref<boolean>(false)
const finished = ref<boolean>(false)
// const maxLoadTime = ref<number>(3000)
async function loadMore() {
  await getList(loadmore)
}
async function handleLoad() {
  loading.value = true
  await loadMore()
  loading.value = false
  if (newData.value.length === 0) {
    finished.value = true
  }
}
/** ===== 文章滚动加载-end ===== **/
</script>

<template>
  <div
      class="w-full h-full block py-4 overflow-y-auto"
  >
    <van-pull-refresh
        v-model="isLoading"
        @refresh="handleRefresh"
        success-text="刷新成功"
    >
      <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          :immediate-check="false"
          @load="handleLoad"
      >
        <div
            v-if="articleList.length > 0"
            class="w-full h-auto flex flex-col"
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
              :channel="item.channel"
              :is-top="item.isTop"
          />
        </div>
        <div
            v-else
            class="w-full h-full flex justify-center items-center"
        >
          <van-empty
              description="暂无数据"
          />
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<style scoped>

</style>

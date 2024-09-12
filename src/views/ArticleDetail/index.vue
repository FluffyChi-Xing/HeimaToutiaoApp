<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { useRoute } from "vue-router";
import TopBanner from "@/components/TopBanner.vue";
import DetailTemplate from "@/views/ArticleDetail/_components/DetailTemplate.vue";
import {$apis} from "@/conponsables/apis";




const route = useRoute()
const params = ref<string>()
/** ===== 文章详情初始化-start ===== **/
const title = ref<string>('震惊 ! 以下几件事前端开发一定要尽早了解 !')
const desc = ref<string>('最近在用 Vue3 写一个开源的商城项目，开源后让大家也可以用现成的 Vue3 大型商城项目源码来练练手，目前处于开发阶段，过程中用到了 Vant3.0，于是就整理了这篇文章来讲一下如何使用 Vue3.0 + Vant 3.0 搭建种子项目。\n' +
    '\n' +
    '众所周知，Vue 3.0 发布已经有小一个月的时间了，但是市面上能作出快速相应的 Vue UI 组件库并不多，就我目前所知的有 Ant Design of Vue、Vant，这俩组件库迁移的是比较完善的，可能会有一些小遗漏，但是不影响大局，你可以去他们的 Github 仓库提 Issue。\n' +
    '\n' +
    '接下来我将带大家手动搭建一个带有组件库 Vant、最新路由 Vue-Router 4.0、最新状态管理插件 Vuex 4.0 的一个 Vue 3.0 种子项目。'
)
/** ===== 文章详情初始化-end ===== **/

/** ===== 文章详情-start ===== **/
function getParams() {
  params.value = String(route.params.id)
}
async function getContent() {
  // await $apis.getArticleContent(BigInt(params.value) + 2).then((res: string) => {
  //   console.log(res)
  // })
  console.log('获取文章详情')
}
onMounted(async () => {
  getParams()
  await getContent()
})
/** ===== 文章详情-end ===== **/
</script>

<template>
  <div class="w-screen h-screen relative flex flex-col justify-center overflow-y-auto">
    <!-- 页头返回 -->
    <TopBanner />
    <!-- 文章部分 -->
    <DetailTemplate
        :title="title"
        :desc="desc"
    />
  </div>
</template>

<style scoped>

</style>

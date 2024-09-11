<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import { useRoute } from "vue-router";
import type {LayoutTypes} from "@/conponsables/api/LayoutTypes";
import {$stores} from "@/conponsables/stores";
// import {$apis} from "@/conponsables/apis";




const route = useRoute()
const homeStore = $stores.homeStore();
/** ===== 动态页面初始化-start ===== **/
const params = ref<string>()
const tabsList = ref<LayoutTypes.ArticleTypes[]>()
const title = ref<string>()
function getInfo() {
  tabsList.value = homeStore.tabsList
}
function getParams() {
  params.value = route.params.id as string
}
function checkInfo() {
  tabsList.value?.forEach((item: any) => {
    if (item.id === Number(params.value)) {
      title.value = item.title
      // console.log(item.title, item.id)
    }
  })
}
onMounted(() => {
  getParams()
  getInfo()
  checkInfo()
  // await test()
})
// async function test() {
//   await $apis.testApis().then((res: any) => {
//     console.log(res)
//   })
// }
watch(() => route.params.id , () => {
  getParams()
  getInfo()
  checkInfo()
})
/** ===== 动态页面初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center bg-yellow-500">
    <span class="text-white text-xl">{{ title }}</span>
  </div>
</template>

<style scoped>

</style>

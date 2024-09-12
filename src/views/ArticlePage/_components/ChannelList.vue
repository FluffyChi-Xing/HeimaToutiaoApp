<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';
import type {LayoutTypes} from "@/conponsables/api/LayoutTypes";
import {$stores} from "@/conponsables/stores";
import { useRoute} from "vue-router";
import { useRouter } from "vue-router";


withDefaults(defineProps<{
  defaultChannel?: LayoutTypes.channelsType[],
  selectChannel?: LayoutTypes.channelsType[],
}>(), {

})



const route = useRoute()
const router = useRouter()
const pageStore = $stores.homeStore();
const tabsList = ref<LayoutTypes.ArticleTypes[]>()
function getTabList() {
  tabsList.value = pageStore.tabsList
}
onMounted(() => {
  getTabList() // 获取tabs栏数据
})

/** ===== 频道初始化-start ===== **/
// 获取当前路由地址，判断所处的tabs栏
const params = ref<string>()
function checkHighLight(item: LayoutTypes.ArticleTypes) {
  params.value = route.params.id as string // 获取当前路由参数
  if (!params.value) {
    if (item.id === 2) {
      return true
    }
  }
  if (params.value === String(item.id)) {
    return  true
  } else {
    return  false
  }
}
const emits = defineEmits(['expand:change'])
function handleSelect(item: number) {
  emits('expand:change', false)
  console.log(item)
  // 处理默认tabs栏
  if (item === 2) {
    router.push(`/home`)
  } else {
    router.push(`/home/part/${item}`)
  }
}
/** ===== 频道初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full grid grid-rows-2 gap-4">
    <!-- 我的频道 -->
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-10 flex justify-between">
        <div class="w-auto h-10 align-middle text-xl text-black font-bold">
          我的频道:
          <span class="text-[10px] h-full align-middle text-gray-500">点击进入频道</span>
        </div>
        <div class="w-auto h-full flex flex-col justify-center items-center">
          <van-button
              type="warning"
              plain
              round
              size="small"
              style="padding: 0 20px"
          >
            编辑
          </van-button>
        </div>
      </div>
      <div style="height: calc(100% - 40px)" class="w-full grid grid-cols-4 grid-rows-5 gap-2">
        <div
            v-for="(item, index) in tabsList"
            :key="index"
            class="w-full h-10 flex"
        >
          <van-tag
              closeable
              round
              size="large"
              plain
              :type="checkHighLight(item) ? 'warning' : 'primary'"
              class="w-full h-full"
              @click="handleSelect(item.id)"
          >
            {{ item.title }}
          </van-tag>
        </div>
      </div>
    </div>
    <!-- 可选频道 -->
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-10 flex justify-between">
        <div class="w-auto h-10 align-middle text-xl text-black font-bold">
          可选频道:
        </div>
      </div>
      <div style="height: calc(100% - 40px)" class="w-full grid grid-cols-4 grid-rows-5 gap-2">
        <div
            v-for="(item, index) in 10"
            :key="index"
            class="w-full h-10 flex"
        >
          <van-tag
              closeable
              round
              size="large"
              plain
              type="primary"
              class="w-full h-full"
          >
            cccc
          </van-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

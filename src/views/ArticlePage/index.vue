<script setup lang="ts">
import { ref } from 'vue';
import TopTabpane from "@/views/ArticlePage/_components/TopTabpane.vue";
import ChannelList from "@/views/ArticlePage/_components/ChannelList.vue";


/** ===== 频道弹出层-start ===== **/
const showDrawer = ref<boolean>(false)
function handleExpand(index: boolean) {
  showDrawer.value = index
}
function handleClose() {
  showDrawer.value = false
}
function handleSelect(index: boolean) {
  showDrawer.value = index
}
/** ===== 频道弹出层-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <!-- 顶部话题tabs -->
    <div class="w-full h-10 sticky top-0">
      <TopTabpane
          @expand:change="handleExpand"
      />
    </div>
    <div style="height: calc(100% - 40px)" class="w-full flex flex-col overflow-y-auto">
      <RouterView />
    </div>
    <!-- popup 弹出层 -->
    <van-popup
        v-model:show="showDrawer"
        position="left"
        :style="{height: '100%', width: '100%'}"
        closeable
        @close="handleClose"
    >
      <template #default>
        <div class="w-full h-full px-4 py-16 flex">
          <ChannelList
              @expand:change="handleSelect"
          />
        </div>
      </template>
    </van-popup>
  </div>
</template>

<style scoped>

</style>

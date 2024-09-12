<script setup lang="ts">
import { ref } from 'vue';
import TopBanner from "@/components/TopBanner.vue";


/** ===== 我的收藏-start ===== **/
const collectionList = ref<any>()
/** ===== 我的收藏-end ===== **/
</script>

<template>
  <div class="w-screen h-screen flex flex-col pt-16 relative">
    <!-- top banner pane -->
    <TopBanner
        :share="false"
        title="我的收藏"
    />
    <!-- content pane -->
    <div class="w-full h-full flex flex-col justify-center items-center">
      <van-empty
          v-if="!collectionList"
          description="暂无消息"
      />
    </div>
  </div>
</template>

<style scoped>

</style>

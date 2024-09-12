<script setup lang="ts">
import { ref } from 'vue';
import TopBanner from "@/components/TopBanner.vue";




/** ===== 浏览历史-start ===== **/
const historyList = ref<any>()
/** ===== 浏览历史-end ===== **/
</script>

<template>
  <div class="w-screen h-screen flex flex-col pt-16 relative">
    <!-- top banner pane -->
    <TopBanner
        :share="false"
        title="浏览历史"
    />
    <!-- content pane -->
    <div class="w-full h-full flex flex-col justify-center items-center">
      <van-empty
          v-if="!historyList"
          description="暂无消息"
      />
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import TopBanner from "@/components/TopBanner.vue";
import { ref } from 'vue';


/** ===== 消息中心-start ===== **/
const noticeList = ref<any>()
/** ===== 消息中心-end ===== **/
</script>

<template>
  <div class="w-screen h-screen flex flex-col pt-16 relative">
    <!-- top banner pane -->
    <TopBanner
        :share="false"
        title="消息中心"
    />
    <!-- content pane -->
    <div class="w-full h-full flex flex-col justify-center items-center">
      <van-empty
          v-if="!noticeList"
          description="暂无消息"
      />
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import TopBanner from "@/components/TopBanner.vue";
</script>

<template>
  <div class="w-screen h-screen flex flex-col pt-16 relative">
    <TopBanner
        :share="false"
        title="设置中心"
    />
    <div class="w-full h-full flex flex-col bg-red-500 justify-center items-center">
      <span class="text-2xl text-white font-bold">我的设置</span>
    </div>
  </div>
</template>

<style scoped>

</style>

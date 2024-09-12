<script setup lang="ts">
withDefaults(defineProps<{
  userAvatar?:string;
  username?: string;
}>(), {
  userAvatar: 'https://picsum.photos/200/300?2',
  username: '用户名'
})
</script>

<template>
  <div class="w-full h-full flex px-5">
    <div class="w-16 h-full flex rounded-[32px] overflow-hidden">
      <img :src="userAvatar" alt="" loading="lazy" class="w-full h-full flex">
    </div>
    <div class="w-auto ml-2 h-full max-w-1/2 flex items-center">
      <span class="align-middle w-auto h-auto text-white text-xl font-bold text-ellipsis overflow-hidden whitespace-nowrap">{{ username }}</span>
    </div>
    <div class="w-auto h-full flex ml-auto items-center">
      <span class="text-white">个人信息</span>
      <van-icon name="arrow" color="#fff" />
    </div>
  </div>
</template>

<style scoped>

</style>

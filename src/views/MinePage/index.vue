<script setup lang="ts">
import { ref } from 'vue';
import type {UserTypes} from "@/conponsables/api/UserTypes";


/** ===== 用户信息-start ===== **/
const defaultList = [
  {
    label: '动态',
    account: 1200
  },
  {
    label: '关注',
    account: 12
  },
  {
    label: '粉丝',
    account: 355
  },
  {
    label: '被赞',
    account: 123
  }
]
const userInfo = ref<UserTypes.UserInfoTypes[]>(defaultList)
/** ===== 用户信息-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col relative">
    <div class="w-full h-1/3 top-bg flex bg-gradient-to-b from-[#53517F] to-[#53517F80] absolute top-0" />
    <!-- user avatar -->
    <div class="w-full h-16 flex absolute top-[20px] bg-red-500 z-[19]">

    </div>
    <!-- user info -->
    <div class="w-full h-16 flex justify-center absolute top-[100px] z-[19]">
      <div class="w-full h-full grid grid-cols-4 gap-2">
        <div
            v-for="(item, index) in userInfo"
            :key="index"
            class="col-span-1 w-full h-full flex flex-col"
        >
          <div class="w-full h-1/2 flex text-xl text-white justify-center text-center">{{ item.account }}</div>
          <div class="w-full h-1/2 flex text-xl text-white justify-center text-center">{{ item.label }}</div>
        </div>
      </div>
    </div>
    <!-- 卡片A -->
    <div class="w-full h-20 flex justify-center absolute px-5 top-[190px] z-[19]">
      <div class="w-full h-full info-card flex" />
    </div>
    <!-- 卡片B -->
    <div class="w-full h-28 flex absolute px-5 top-[286px] z-[19]">
      <div class="w-full h-full info-card flex" />
    </div>
  </div>
</template>

<style scoped>
.top-bg {
  border-radius: 0 0 30% 30%;
  z-index: 2;
}
.info-card {
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(9, 9, 9, 0.1);
}
</style>

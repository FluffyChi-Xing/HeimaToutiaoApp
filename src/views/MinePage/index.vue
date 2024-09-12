<script setup lang="ts">
import { ref } from 'vue';
import type {UserTypes} from "@/conponsables/api/UserTypes";
import UserAvatar from "@/views/MinePage/_components/UserAvatar.vue";


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
const username = ref<string>('admin')
/** ===== 用户信息-end ===== **/

/** ===== 卡片栏A-start ===== **/
interface cardAtypes {
  label: string;
  icon: string;
  url?: string;
}
const cardAList = ref<cardAtypes[]>([
  {
    label: '消息通知',
    icon: 'bell'
  },
  {
    label: '我的收藏',
    icon: 'gift-o'
  },
  {
    label: '浏览历史',
    icon: 'clock-o'
  },
  {
    label: '我的作品',
    icon: 'notes-o'
  }
])
/** ===== 卡片栏A-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col relative">
    <div class="w-full h-1/3 top-bg flex bg-gradient-to-b from-[#53517F] to-[#53517F80] absolute top-0" />
    <!-- user avatar -->
    <div class="w-full h-16 flex absolute top-[20px] z-[19]">
      <UserAvatar
          :username="username"
      />
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
      <div class="w-full h-full info-card grid grid-cols-4 gap-2">
        <div
            v-for="(item, index) in cardAList"
            :key="index"
            class="w-full h-full flex px-4"
        >
          <div class="w-full h-full py-4 flex flex-col items-center">
            <div class="w-full h-1/2 flex justify-center">
              <van-icon :name="item.icon" />
            </div>
            <div class="w-full h-1/2 text-[10px] justify-center flex text-center">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 卡片B -->
    <div class="w-full h-28 flex absolute px-5 top-[286px] z-[19]">
      <div class="w-full h-full info-card flex flex-col p-4">
        <div class="w-full h-auto text-xl font-bold">更多服务</div>
        <div class="w-full h-full grid grid-cols-4 gap-2">
         <div class="w-full h-full flex flex-col">
           <div class="w-full h-1/2 flex justify-center">
             <van-icon name="chat-o" />
           </div>
           <div class="w-full h-1/2 flex justify-center text-[10px]">
             用户反馈
           </div>
         </div>
          <div class="w-full h-full flex flex-col">
            <div class="w-full h-1/2 flex justify-center">
              <van-icon name="service-o" />
            </div>
            <div class="w-full h-1/2 flex justify-center text-[10px]">
              在线客服
            </div>
          </div>
        </div>
      </div>
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

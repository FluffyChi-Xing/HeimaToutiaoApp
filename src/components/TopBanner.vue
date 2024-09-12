<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import {showToast} from "vant";



withDefaults(defineProps<{
  share?: boolean,
  title?: string
}>(), {
  share: true
})




// 返回
const router = useRouter()
function goBack() {
  router.back()
}

/** ===== 分享-start ===== **/
const showShare = ref<boolean>(false);
const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
];

function onSelect(option: any) {
  showToast(option.name);
  showShare.value = false;
}
function handleShare() {
  showShare.value = true
}
/** ===== 分享-end ===== **/
</script>

<template>
  <div class="w-full h-16 absolute banner px-4 top-0 flex items-center bg-white">
    <div class="w-auto h-auto flex" @click="goBack">
      <van-icon size="20" name="arrow-left" />
    </div>
    <div
        v-if="title"
        class="w-auto h-auto align-middle text-xl mx-auto"
    >
      {{ title }}
    </div>
    <div
        v-if="share"
        class="w-auto h-auto flex ml-auto"
    >
      <van-icon size="20" name="ellipsis" @click="handleShare" />
    </div>
    <van-share-sheet
        v-model:show="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
    />
  </div>
</template>

<style scoped>
.banner {
  border-bottom: 1px solid #ebedf0;
}
</style>

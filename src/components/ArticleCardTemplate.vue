<script setup lang="ts">
import { useRouter } from "vue-router";
import {ref} from "vue";

const props = withDefaults(defineProps<{
  id?: BigInt;
  imgUrl?: string[];
  title?: string;
  isTop?: boolean;
  author?: string;
  desc?: string;
  date?: string;
  url?: string;
  channel?: string;
}>(), {
  imgUrl: () => ['https://picsum.photos/200/300?1', 'https://picsum.photos/200/300?2'],
  title: '这是一个大新闻 !',
  isTop: true,
  author: '小明',
  date: '2021-09-01',
  channel: '新闻',
})

// 文章跳转
const router = useRouter()
function handleDetail(index: any) {
  router.push(`/article/${index}`)
}
// TODO: 未完成
function handleErrorLoad(item: string) {
  // 如果图片加载失败，显示默认图片
}
</script>

<template>
  <div class="w-full h-auto flex flex-col px-2" @click="handleDetail(BigInt(props.id))">
    <div class="w-full h-auto flex flex-col">
      <!-- title -->
      <div
          class="w-full max-h-[56px] mb-2 flex text-black font-bold text-xl whitespace-pre-line text-ellipsis overflow-hidden"
      >
        {{ title}}
      </div>
      <!-- img area -->
      <div
          v-if="imgUrl?.length"
          class="w-full h-full grid grid-cols-3 gap-1"
          style="height: 90px"
      >
        <div
            v-for="(item, index) in imgUrl"
            :key="index"
            class="col-span-1 w-full h-full overflow-hidden"
        >
          <img :src="item" alt="" loading="lazy" @error="handleErrorLoad(item)" class="w-full h-full z-[299] object-cover">
        </div>
      </div>
      <div
          v-if="desc"
          class="w-full max-h-[56px] h-auto text-[15px] text-black whitespace-pre-line text-ellipsis overflow-hidden"
      >
        {{ desc }}
      </div>
      <!-- footer -->
      <div
          style="height: 15px"
          class="w-full flex my-2 overflow-hidden"
      >
        <div
            v-if="isTop"
            class="text-[10px] font-bold text-red-500"
        >
          置顶
          <van-divider vertical />
        </div>
        <div
            class="text-[10px] h-full align-middle text-gray-500"
        >
          {{ author ? author : '暂无作者'}}
        </div>
        <van-divider vertical />
        <div
            class="text-[10px] h-full align-middle text-gray-500"
        >
          {{ date ? date : '暂无日期'}}
        </div>
        <div
            v-if="channel"
            class="text-[10px] font-bold text-red-500"
        >
          <van-divider vertical />
          {{ channel }}
        </div>
      </div>
    </div>
    <van-divider />
  </div>
</template>

<style scoped>

</style>

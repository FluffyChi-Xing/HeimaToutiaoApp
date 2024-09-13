<script setup lang="ts">


withDefaults(defineProps<{
  title?: string;
  agree?: number;
  comment?: number;
  date?: string;
  img?: string;
}>(), {
  title: '这是一个大新闻 !',
  agree: 400,
  comment: 120,
  date: '1小时前',
})
</script>

<template>
  <div
      class="w-full h-auto max-h-28"
      :class="img ? 'grid grid-cols-4 gap-2' : 'flex'"
  >
    <div
        class="w-full h-full flex flex-col"
        :class="img ? 'col-span-2' : ''"
    >
      <!-- title -->
      <div class="w-full h-auto max-h-1/2 mb-4 whitespace-pre-line text-ellipsis text-xl font-bold">
        {{ title }}
      </div>
      <!-- footer -->
      <div class="w-full h-auto flex mt-auto text-[10px]">
        <div>赞同<span class="mx-1">{{ agree ? agree : '暂无' }}</span></div>
        <van-divider vertical />
        <div>评论<span class="mx-1">{{ comment ? comment : '暂无' }}</span></div>
        <van-divider vertical />
        <div>{{ date ? date : '暂无' }}</div>
      </div>
    </div>
    <div
        v-if="img"
        class="col-span-2 w-full h-full flex"
    >
      <img :src="img" alt="" loading="lazy" class="w-full max-h-24 object-cover">
    </div>
  </div>
  <van-divider />
</template>

<style scoped>

</style>

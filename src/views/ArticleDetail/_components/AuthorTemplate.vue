<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {showToast} from "vant";




const props = withDefaults(defineProps<{
  avatar?: string;
  name?: string;
  date?: string;
  isFollow?: boolean;
}>(), {
  avatar: 'https://picsum.photos/200/300?1',
  name: '暂无作者',
  date: '2023-09-19',
  isFollow: false
})


/** ===== 关注作者-start ===== **/
const type = ref<string>()
const info = ref<string>('关注')
function checkFollow(index: boolean) {
  if (index) {
    type.value = 'warning'
  } else {
    type.value = ''
  }
}
function handleFollow() {
  if (props.isFollow) {
    type.value = ''
    info.value = '关注'
    showToast('取消关注')
  } else {
    type.value = 'warning'
    info.value = '取消关注'
    showToast('关注成功')
  }
}
onMounted(() => {
  checkFollow(props.isFollow)
})
/** ===== 关注作者-end ===== **/
</script>

<template>
  <div class="w-full h-16 flex justify-between">
    <div class="w-auto h-full flex items-center">
      <div class="w-10 h-10 flex rounded-[20px] overflow-hidden">
        <img :src="avatar" alt="" loading="lazy" class="w-full h-full object-cover">
      </div>
      <div class="w-20 h-full flex flex-col justify-center ml-2">
        <div class="w-full h-auto flex flex-col">
          <div class="w-full h-auto text-[10px] flex overflow-hidden whitespace-nowrap text-ellipsis">
            {{ name }}
          </div>
          <div class="w-full h-auto text-[10px] text-gray-500 flex overflow-hidden whitespace-nowrap text-ellipsis">
            {{ date }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-auto h-full flex flex-col justify-center items-center">
      <van-button
          :type="type"
          @click="handleFollow"
      >
        {{ info }}
      </van-button>
    </div>
  </div>
</template>

<style scoped>

</style>

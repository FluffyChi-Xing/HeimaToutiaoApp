<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from "vue-router";


withDefaults(defineProps<{
  shape?: 'square' | 'round'
}>(), {
  shape: 'round'
})



const router = useRouter()
/** ===== top search-start ===== **/
const searchValue = ref<string>('')
function handleNotice() {
  router.push('/notice')
}
/** ===== top search-end ===== **/
</script>

<template>
  <div class="w-full h-full flex">
    <div
        @click="handleNotice"
        class="w-16 h-full flex justify-center items-center"
    >
      <van-icon class="w-auto h-auto" name="bell" size="20" />
    </div>
    <div style="width: calc(100% - 128px)" class="h-full flex flex-col justify-center">
      <van-search
          v-model="searchValue"
          placeholder="请输入搜索关键词"
          :shape="shape"
          clearable
      />
    </div>
    <div class="w-16 h-full flex justify-center items-center">
      <van-icon class="w-auto h-auto" name="plus" size="20" />
    </div>
  </div>
</template>

<style scoped>

</style>

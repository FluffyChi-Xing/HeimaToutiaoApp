<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from "vue-router";
import {showToast} from "vant";



const router = useRouter()
/** ===== 登录页面初始化-start ===== **/
const phone = ref<string>('')
const password = ref<string>('')
function handleLogin() {
  if (phone.value && password.value) {
    router.push('/home')
  } else {
    showToast('请输入手机号和密码')
  }
}
/** ===== 登录页面初始化-end ===== **/
</script>

<template>
  <div class="w-screen h-screen p-4 login-bg flex flex-col justify-center items-center">
    <div class="text-2xl text-black font-bold">黑马头条</div>
    <div class="w-full h-auto mt-4 bg-[#BEBEBEFF] rounded-[10px] shadow-md flex flex-col">
      <van-cell-group>
        <van-field
            v-model="phone"
            label="手机号"
            placeholder="请输入手机号"
        />
        <van-field
            v-model="password"
            label="密码"
            placeholder="请输入密码"
            type="password"
        />
        <van-cell class="mt-5">
          <van-button @click="handleLogin" type="primary" class="w-full">登录</van-button>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<style scoped>
.login-bg {
  background-image: url("@/assets/img/login.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.login-logo {
  background-image: url("@/assets/img/login2.png");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>

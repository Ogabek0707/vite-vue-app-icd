<template>
    <div>
       <div class="relative">
        <div class="absolute mt-[50px] ml-[70px] flex cursor-pointer gap-[5px]" @click="Back">
          <button>
            <svg-icon type="mdi" class="w-[25px] h-[37px]" :path="mdiArrowLeft"></svg-icon>
          </button>
          <h1 class="text-[25px]">Ortga</h1>
        </div>
      </div>
      <div class="translate-y-[60%] flex items-center justify-center flex-col">
        <h1 class="text-[40px] text-center font-bold">Parolni Tiklash</h1>
        <p class="text-[30px] mt-[5px] text-center font-semibold">Sizga kod yuborishimiz uchun email'ingizni kiriting</p>
        <div class="w-[35%] mt-[15px]">
            <vee-form :validation-schema="schema" @submit="send" class="mt-[10px]">
              <VInput type="email" label="" name="email" placeholder="Email'ingizni kiriting"></VInput>
              <VButton type="submit" btn_type="primary" class="bg-global1 w-[100%] mt-[20px]" :isLoading="loading">{{ btn_title }}</VButton>
            </vee-form>
        </div>
      </div>
    </div>
</template>

<script setup>
import { mdiArrowLeft } from "@mdi/js";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import SvgIcon from "@jamescoyle/vue-icon";
import VInput from '../../components/form/VInput.vue'
import VButton from '../../components/form/VButton.vue'

const router = useRouter()
const loading = ref(false)
const store = useAuthStore()

const schema = computed(()=>{
  return {
    email: 'required|min:3|max:40',
  }
})
const send = async (value) => {
  loading.value = true
  let payload = {
    email: value.email
  }
    await store.authForgotP(payload)
  loading.value = false
}
const btn_title = computed(()=>{
      if(loading.value) {
            return "Kod yuborilmoqda"
      }else {
            return "Kod yuborish"
      }
})
const Back = () => {
  router.push({name: "Login"})
}
</script>

<style lang="scss" scoped>

</style>
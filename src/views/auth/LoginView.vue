<template>
  <div class="w-full h-full">
     <div class="flex justify-center h-screen flex justify-center items-center">
       <div class="w-[41%] mx-auto">
        <h1 class="text-[35px] text-center font-bold sm:text-[40px] md:text-[50px]">Tizimga Kirish</h1>
        <vee-form :validation-schema="schema" @submit="send" class="mt-[20px]">
                <VInput type="email" label="" name="email" placeholder="Email kiriting"></VInput>
                <VPassword type="password" label="" name="password" placeholder="Parol kiriting" type2="pass" class="mt-[15px]"></VPassword>
                <VButton type="submit" btn_type="primary" class="bg-global1 w-[100%] mt-[25px]" :isLoading="loading">{{ btn_title }}</VButton>
        </vee-form>
        <div class="mt-[9px] text-center">
          <p class="text-black text-[20px] font-[500] cursor-pointer" @click="ForgotP">Parolni unitdingizmi ? </p>
        </div>
       </div>
     </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import VInput from '../../components/form/VInput.vue'
import VPassword from '../../components/form/VPassword.vue'
import VButton from '../../components/form/VButton.vue'
import { useAuthStore } from "@/stores/auth";

const router = useRouter()
const loading = ref(false)
const store = useAuthStore()
const schema = computed(()=>{
  return {
    password: 'required|min:6|max:15',
    email: 'required|min:3|max:40',
  }
})
const send = async (value) => {
  loading.value = true
  let payload = {
    email: value.email,
    password: value.password
  }
  await store.authLogin(payload)
  loading.value = false
}
const btn_title = computed(()=>{
      if(loading.value) {
            return "Loading"
      }else {
            return "Tizimga kirish"
      }
})
const ForgotP = () => {
  router.push({name: "Forgot-Password"})
}
</script>

<style lang="scss" scoped></style>
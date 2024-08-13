<template>
    <AppModal v-model="dialog">
    <div class="w-full">
      <div class="w-[75%] text-center m-auto">
        <h1 class="text-[30px] font-bold sm:text-[35px] md:text-[40px] mt-[10px]">Enter the code</h1>
        <h2 class="text-[16px] font-semibold mt-[8px]">We have sent a verification code to your email. Please enter the verification code. You will be registered after the code is confirmed!</h2>
        <vee-form :validation-schema="schema2" @submit="send2" class="mt-[15px]">
           <VPassword type="password" type3="type3" label="" name="password" placeholder="Tasdiqlash parolini kiriting" class="mt-[10px]"></VPassword>
           <VButton type="submit" btn_type="primary" class="bg-global1 w-[100%] mt-[20px]" :isLoading="loading">{{ btn_title }} </VButton>
        </vee-form>
        <h1 class="text-[18px] text-start ml-[3px] mt-[20px] mb-[10px]" >Time left: <span>{{ time }}</span> seconds</h1>
      </div>
    </div>
  </AppModal>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import AppModal from '../../../components/ui/app-modal.vue'
import VPassword from '../../../components/form/VPassword.vue'
import VButton from '../../../components/form/VButton.vue'
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const dialog = ref(false)
const time = ref(60)
const Email = ref('')
const LoginPage = ref("")
const store = useAuthStore()
const router = useRouter()
const loading = ref(false)
let interval = null

const schema2 = computed(()=>{
  return {
    password: 'required|min:0|max:6',
  }
})
const send2 = async (value) => {
  loading.value = true
  let payload = {
    email: Email.value,
    code: value.password
  }
  await store.AuthVerify(payload)
  loading.value = false
}
watch(dialog, (newValue) => {
  if (newValue === true) {
    clearInterval(interval);
    time.value = 60
    interval = setInterval(() => {
      if (time.value === 0) {
        clearInterval(interval);
        dialog.value = false
        time.value = 60
        console.log('Salom dunyo');
      } else {
        time.value--;
      }
    }, 1000);
  }else {
    clearInterval(interval)
  }
});
watch(LoginPage, (value) => {
  console.log(LoginPage);
  if(value == "NextPage") {
    router.push({name: "Login"})
  }else{
    LoginPage.value = ""
  }
})
const openModal = (email) => {
    dialog.value = true
    console.log(email);
    Email.value = email
    // console.log(route.params);
}
const btn_title = computed(()=>{
      if(loading.value) {
            return "Confirmed"
      }else {
            return "Confirm"
      }
})
defineExpose({openModal});
</script>

<style lang="scss" scoped>

</style>
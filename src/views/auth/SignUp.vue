<template>
  <!-- <div class="w-full h-full">
    <Verify ref="verify"/>
    <div>
      <div class="relative">
        <div class="absolute mt-[50px] ml-[70px] flex cursor-pointer gap-[5px]" @click="Back">
          <button>
            <svg-icon type="mdi" class="w-[25px] h-[37px]" :path="mdiArrowLeft"></svg-icon>
          </button>
          <h1 class="text-[25px]">Ortga</h1>
        </div>
      </div>
    <div class="mt-[20px] flex justify-center">
       <div class="w-[35%]">
         <h1 class="text-[40px] text-center font-bold">Ro'yhatdan o'tish</h1>
         <vee-form :validation-schema="schema" @submit="send" class="mt-[10px]">
           <VInput type="text" label="Ismingiz" name="name" placeholder="Ismingizni kiriting"></VInput>
           <VTell type="text" label="Telefon raqamingiz" name="phone_number" mask="+998 (##) ### ## ##" placeholder="+998-xx-xxx-xx-xx" class="mt-[10px]"></VTell>
           <VInput type="email" label="Email" name="email" placeholder="Email kiriting" class="mt-[10px]"></VInput>
           <VPassword type="password" label="Parol" name="password" placeholder="Parol kiriting" type3="pass" class="mt-[10px]"></VPassword>
           <VButton type="submit" btn_type="primary" class="bg-global1 w-[100%] mt-[20px]" :isLoading="loading">{{ btn_title }}</VButton>
         </vee-form>
         <div class="flex gap-[10px] justify-center mt-[20px] mb-[20px]">
           <p class="text-black text-[20px] font-[400]">Ro'yhatdan o'tganmisiz?</p>
           <span class="text-global1 text-[20px] font-[400] cursor-pointer" @click="Login">Tizimga kirish</span>
         </div>
       </div>
    </div>
    </div>
  </div> -->
  <div class="w-full h-full" style="background-image: url('../../assets/images/Menu.png'); background-size: cover;
  background-position: center;
  background-repeat: no-repeat;">
    <Verify ref="verify"/>
     <div class="h-screen flex justify-center items-center">
       <div class="w-[41%] mx-auto">
        <h1 class="text-[35px] text-center font-bold sm:text-[40px] md:text-[50px]">Ro‘yxatdan o‘tish</h1>
        <vee-form :validation-schema="schema" @submit="send" class="mt-[40px] flex gap-[10px] flex-col">
                <VInput type="email" label="" name="Name" placeholder="Ismingizni kiriting"></VInput>
                <VTell type="text" label="" name="Phone" mask="+998 (##) ### ## ##" placeholder="Telefon raqamingiz" class="mt-[10px]"></VTell>
                <VInput type="email" label="" name="Email" placeholder="Email kiriting" class="mt-[10px]"></VInput>
                <VPassword type="password" label="" name="Password" placeholder="Parol kiriting" type2="pass" class="mt-[10px]"></VPassword>
                <VButton type="submit" btn_type="primary" class="bg-global1 w-[100%] mt-[15px]" :isLoading="loading">{{ btn_title }}</VButton>
        </vee-form>
       </div>
     </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import VInput from '../../components/form/VInput.vue'
import VPassword from '../../components/form/VPassword.vue'
import VButton from '../../components/form/VButton.vue'
import VTell from '../../components/form/VTell.vue'
import Verify from './modal/Verify.vue'

const loading = ref(false)
const store = useAuthStore()
const modal = ref('')
const verify = ref('')


const schema = computed(()=>{
  return {
    Name: 'required|min:0|max:20',
    Password: 'required|min:6|max:15',
    Email: 'required|min:0|max:40',
    Phone: 'required|min:0|max:20'
  }
})
const send = async (value) => {
  let phone = value.Phone.replace(/[^\d+]/g, '')
  let payload = {
    full_name: value.Name,
    email: value.Email,
    password: value.Password,
    phone_number: phone,
  }
  await store.authSignUp(payload)
  loading.value = false
  if(store.VerificationCode == "Yuborildi"){
    modal.value = "Yuborildi"
    setTimeout(() => {
      if(modal.value = "Yuborildi"){
        verify.value.openModal(value.Email)
      }else{
        modal.value = ""
      }
    }, 1000);
  }else{
    modal.value = ""
  }
}
const btn_title = computed(()=>{
      if(loading.value) {
            return "Kod Yuborilmoqda"
      }else {
            return "Ro'yhatdan o'tish"
      }
});
</script>

<style lang="scss" scoped></style>

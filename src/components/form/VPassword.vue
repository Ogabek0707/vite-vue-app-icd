<template>
      <div class="w-full flex flex-col">
            <div v-if="type2" class="flex justify-between">
                  <label :for="name" class="text-black text-[20px] font-[500]">{{ label }}</label>
            </div>
            <div v-else>
                  <label :for="name" class="text-black text-[20px] font-[500]">{{ label }}</label>
            </div>
            <div v-if="!type3" class="relative w-full mt-1.5">
                  <vee-field :type="active ? 'text' : 'password'" :name="name" :placeholder="placeholder" class="py-[17px] px-[25px] text-[17px] outline-none rounded-[5px] border-gray-400 border-[1px] hover:border-black focus:border-blue-500 w-full pr-[50px]"/>
                  <button type="button" @click="changeType" class="absolute inset-y-0 right-0 pr-[17px] text-[18.5px] rounded-e-lg flex items-center justify-center"><font-awesome-icon :icon="active ? 'eye-slash' : 'eye'" class="text-global3"/></button>
            </div>
            <div v-else class="relative w-full mt-1.5">
                  <vee-field :type="active ? 'text' : 'password'" :name="name" :placeholder="placeholder" class="py-[17px] px-[25px] text-[17px] outline-none rounded-[5px] border-gray-400 border-[1px] hover:border-black focus:border-blue-500 w-full pr-[50px]"/>
            </div>
            <!-- <p v-if="type3" class="text-[red] mt-2 text-[15px] font-medium">Parolda kamida 1 ta bosh (A...) harf, 1 ta kichik harf (a...), kamida 6 ta son bo'lishi kerak !</p> -->
            <ErrorMessage :name="name" class="text-error_color mt-2 mb-[-5px] text-start ml-4 text-[17px] font-medium"/>
      </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router";

const router = useRouter()
const active = ref(false)
const props = defineProps({
      name:{
            type: String
      },
      label:{
            type: String
      },
      placeholder:{
            type: String
      },
      type2:{
            type: String
      },
      type3:{
            type: String
      },
})
const ForgotP = () => {
      router.push({name: "Forgot-Password"})
}
const changeType = (e) => {
      e.preventDefault();
      
      active.value = !active.value
}
</script>

<style lang="scss" scoped>

</style>
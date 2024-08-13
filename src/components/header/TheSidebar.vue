<template>
  <!-- <div :class="isOpen ? 'block' : 'hidden'" @click="isOpen = false" class="fixed inset-0 z-0 transition-opacity opacity-50 lg:hidden" style="background: rgba(0, 16.81, 19.13, 0.50)"></div> -->
  <div class="border-r-[1px] fixed left-0 z-20 overflow-y-auto inset-y-0 transition duration-300 transform lg:translate-x-0 lg:static media">
  <div class="m-[27px] flex items-center justify-center">
    <div class="text-[20px] img"><img class="h-[45px] bg-no-repeat bg-center bg-fixed" src="../../assets/images/Logo1 .png" alt=""></div>
    <button class="mt-[15px] button" @click="toggleSidebar"><svg-icon type="mdi" :path="mdiMenu"></svg-icon></button>
  </div>
  <hr>
  <div>
    <div class="mt-[20px] w-full">
      <router-link
      v-for="(item, index) in AdminMenu"
      :key="index"
      :to="item.path"
      class="media2 flex w-full items-center gap-[10px] text-black font-medium hover"
      active-class="active"
    >
      <SvgIcon type="mdi" :path="item.icon" class="icon"/>
      <span class="disp">{{ item.label }}</span>
    </router-link>
    </div>
  </div>
</div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { ref } from "vue";
import { mdiMenu } from '@mdi/js';
import { AdminMenu } from "../menu/AdminMenu";

const isOpen = ref(false);
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

</script>

<style lang="scss" scoped>
.media {
width: 240px;
height: 100%;
}
.hover {
width: 90%;
height: 50px;
margin-top: 10px;
padding-left: 10px;
margin-left: 10px;
}
.active{
background: #2389DA;
color: white;
border-radius: 10px;
height: 50px;
}
.hover:hover {
background: #ededed;
border-radius: 10px;
color: #12486B;
font-weight: bold;
}
.active:hover {
background: #2389DA;
color: white;
}
/* .icon {
font-size: 40px;
} */
.button {
display: none;
}
@media (max-width: 1000px) {
.img {
  display: none;
}
.media2 {
  align-items: center;
  margin-left: 10px;
}
.media {
  height: 100vh;
  position: fixed;
  transition: all 0.4s linear;
  overflow: hidden;
}
.disp {
    display: none
}
.icon {
  margin-left: -3px;
}
.button {
  display: block;
  font-size: 30px;
  margin-top: 13px;
  margin-bottom: 13px;
}
.hover {
  width: 85%;
  padding-left: 20px;
  margin-left: 6px;
}
.active {
  width: 85%;
  margin-left: 6px;
  margin-right: 20px;
}
.list {
  display: none;
}
}
</style>

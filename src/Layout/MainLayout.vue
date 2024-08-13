<template>
      <div class="w-full flex h-screen">
            <div class="media">
                  <TheSidebarVue/>
            </div>
            <div class="media2 w-full flex flex-col">
              <div>
                  <TheHeaderVue/>
              </div>
              <div class="overflow-y-scroll">
                  <router-view class="bg-global3 border-[2px] border-[#0dc5d3]"></router-view>
              </div>
            </div>
      </div>
</template>

<script setup>
import TheHeaderVue from "../components/header/TheHeader.vue";
import TheSidebarVue from "../components/header/TheSidebar.vue";

</script>

<style scoped>
@media (max-width: 1000px) {
      .media {
            width: 77px;
      }
      .media2 {
            width: 93%
      }
}
</style>
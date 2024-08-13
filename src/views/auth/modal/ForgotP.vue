<template>
    <AppModal v-model="dialog">

    </AppModal>
</template>

<script setup>
import { ref } from "vue";
import AppModal from '../../../components/ui/app-modal.vue'

const dialog = ref(false)
</script>

<style lang="scss" scoped>

</style>
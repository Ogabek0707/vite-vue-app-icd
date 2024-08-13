<template>
      <div class="w-full flex items-center justify-center">
            <!-- <svg-icon type="mdi" class="mt-1 mr-1 cursor-pointer text-[#00aaff]" :path="mdiTextBoxEditOutline" @click="openModalEdit"></svg-icon>
            <svg-icon type="mdi" class="mt-1 ml-1 cursor-pointer text-[#f52f2f]" :path="mdiDelete" @click="openModalDelete"></svg-icon> -->
      </div>
</template>

<script setup>
// import { mdiTextBoxEditOutline, mdiDelete } from '@mdi/js'
// import SvgIcon from '@jamescoyle/vue-icon'

const props = defineProps({
      item: {
            type: Object
      },
      modal_value: {
            type: String
      }
})
const openModalEdit = () => {
      props.modal_value.openModal(props.item)
}
const openModalDelete = () => {
      props.modal_value.openModalDelete(props.item._id)
}
</script>

<style lang="scss" scoped>

</style>

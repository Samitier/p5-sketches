<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api"
import MainLayout from "./components/MainLayout.vue"

export default createComponent({
  name: "App",
  components: { MainLayout }
})
</script>

<style lang="stylus">
html, body
  height 100%
  width 100%
  margin 0
  overflow hidden
</style>

<template>
  <div class="mainLayout">
    <slot />
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api"

export default createComponent({
  name: "MainLayout"
})
</script>

<style scoped lang="stylus"></style>

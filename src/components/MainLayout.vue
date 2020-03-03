<template>
  <div class="mainLayout">
    <slot />
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped lang="stylus">
.mainLayout
  fixed-fullscreen()
  background beige_2
  &:before, &:after
    content ''
    fixed-fullscreen()
    pointer-events none
  &:before
    background: radial-gradient(circle, rgba(0,0,0,0) 69%, rgba(0,0,0,0.55) 140%)
  &:after
    opacity 0.1
    background-image: url("../assets/images/tile.png")
</style>

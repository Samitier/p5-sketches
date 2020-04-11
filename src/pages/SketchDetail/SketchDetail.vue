<template>
  <div :class="isClosed && 'closed'">
    <SketchInfo />
    <SketchRenderer @click="isClosed = true" />
    <a class="samitier" @click="onOpen">
      サミティエ
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
import SketchInfo from "./_components/SketchInfo.vue"
import SketchRenderer from "./_components/SketchRenderer.vue"

export default defineComponent({
  components: { SketchInfo, SketchRenderer },
  setup() {
    const isClosed = ref(false)
    const closeAfterTimeout = () => setTimeout(() => (isClosed.value = true), 2500)
    onMounted(closeAfterTimeout)
    let timeout = 0
    const onOpen = () => {
      isClosed.value = false
      if (timeout) clearTimeout(timeout)
      timeout = closeAfterTimeout()
    }
    return { isClosed, onOpen }
  }
})
</script>

<style lang="stylus" scoped>
animTime = .5s

.info
  transform translateX(0)
  transition transform animTime, opacity  animTime
.canvas
  filter blur(5px)
  opactity 0.5
  transition filter animTime, opacity animTime
.closed
  .info
    transform translate(-30rem)
  .canvas
    filter blur(0)
    opacity 1
.samitier
  background #222
  position fixed
  transform rotateZ(-45deg)
  top -2rem
  left -6.5rem
  font-size .9rem
  padding 4rem 5rem .5rem 5rem
  color white
  transition box-shadow 0.5s
  cursor pointer
  &:hover
    box-shadow 0 0 10px 3px #00000050
</style>

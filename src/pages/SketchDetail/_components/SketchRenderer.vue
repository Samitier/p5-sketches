<template>
  <div ref="canvas" class="canvas"></div>
</template>

<script lang="ts">
import P5 from "p5"
import { defineComponent, onMounted, onUnmounted, ref } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
  setup(props, b) {
    const { canvas } = useP5Sketch()
    return { canvas }
  }
})

function useP5Sketch() {
  const canvas = ref<HTMLElement>()
  const route = useRoute()
  let sketchInstance: P5
  onMounted(async () => {
    const { sketch } = route.value.meta
    const newSketch = await import(`@/assets/sketches/${sketch}/${sketch}.ts`)
    sketchInstance = new P5(newSketch.default, canvas.value)
  })
  onUnmounted(() => {
    if (sketchInstance) sketchInstance.remove()
  })
  return { canvas }
}
</script>

<style lang="stylus" scoped>
.canvas
  z-index 0
  fixed-fullscreen()
</style>

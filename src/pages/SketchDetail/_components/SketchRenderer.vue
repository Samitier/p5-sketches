<template>
  <div ref="canvas" class="canvas" />
</template>

<script lang="ts">
import P5 from 'p5'
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const { canvas } = useP5Sketch()
    return { canvas }
  }
})

function useP5Sketch() {
  const canvas = ref<HTMLElement>()
  const route = useRoute()
  let sketchInstance: P5
  onMounted(async () => {
    const { sketch } = route.meta
    const newSketch = await import(
      `../../../sketches/${sketch}/${sketch}.ts`
    )
    sketchInstance = new P5(newSketch.default, canvas.value)
  })
  onUnmounted(() => {
    if (sketchInstance) sketchInstance.remove()
  })
  return { canvas }
}
</script>

<style scoped>
.canvas {
  z-index: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

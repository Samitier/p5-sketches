<template>
  <div>
    <SketchInfo />
    <SketchRenderer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SketchInfo from "./_components/SketchInfo.vue"
import SketchRenderer from "./_components/SketchRenderer.vue"

export default defineComponent({
  components: { SketchInfo, SketchRenderer }
})
</script>

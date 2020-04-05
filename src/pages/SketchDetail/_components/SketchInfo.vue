<template>
  <article class="info">
    <h1 class="title">{{ title }}.</h1>
    <p class="description">{{ description }}.</p>
    <nav>
      <a target="_blank" :href="source">View source</a>
    </nav>
  </article>
</template>

<script lang="ts">
import P5 from "p5"
import { defineComponent } from "vue"
import { useRoute } from "vue-router"
const baseSrc = "https://github.com/Samitier/soundbox/blob/master/src/assets/sketches/"

export default defineComponent({
  setup(props, b) {
    const { title, description, source } = useSketchInfo()
    return { title, description, source }
  }
})

function useSketchInfo() {
  const route = useRoute()
  return {
    title: route.value.name,
    description: route.value.meta.description,
    source: baseSrc + route.value.meta.sketch
  }
}
</script>

<style lang="stylus" scoped>
.info
  fixed-fullscreen()
  align-middle()
  z-index 1
  padding 3rem
  color white
  max-width 30rem
  background #222
.title
  font-size 6rem
  line-height .85
  margin .5rem 0
.description
  font-style italic
  font-size 1.6rem
  font-weight normal
a
  color white
</style>
